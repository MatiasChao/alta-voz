import React, { useEffect, useState } from 'react';
import { withProtected } from "../hooks/route";
import Article from '../components/Article';
import Loading from '../commons/Loading';
import { db } from "../utils/db";

const Layout = ({auth}: {auth: any}) => {

    const [articles, setArticles] = useState([]);
    const [dbCreated, setDbCreated] = useState(false);
    const userId = auth?.user?.user?.uid;

    useEffect(() => {
        if(userId) {
            articles.length === 0 && getArticles();
            !dbCreated && createIndexDB();
        }
    }, [])

    const createIndexDB = async () => {
        try {
            await db.users.add({
                userId,
                limitShowArticles: 0
              });
            setDbCreated(true);
        } catch (error) {
            console.log(error);
        }
    }
    
    const readArticle = async () => {
        try {
            await db.users.toCollection().modify(article => {
                article.limitShowArticles = article.limitShowArticles+1;
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    const getArticles = async () => {
        try {
            await fetch('http://localhost:8080/api/articles')
            .then(response => response.json())
            .then(response => {
                console.log('data > ', response)
                setArticles(response.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                articles.length > 0 ?
                    <div className="py-4 px-4 my-4 mx-4">
                    {
                        articles.map((article, index) => (
                            <Article userId={userId} article={article} index={index} key={index} readArticle={readArticle} />
                        ))
                    }
                </div>
                :
               <Loading />
            }
        </>
        
    )
}

export default withProtected(Layout);