import React, { useEffect, useState } from "react";
import { ModalDialog } from "../commons/ModalDialog";
import { useRouter } from 'next/router';
import { db } from "../utils/db";

interface ArticleState {
  userId: string,
  article: any;
  index: number;
  readArticle: () => void;
}

const Article = ({userId, article, index, readArticle} : ArticleState) => {

  const [modalIsOpen, showModal] = useState(false);
  const [indexDbData, setIndexDbData] = useState({limitShowArticles: 0});
  const router = useRouter();

  useEffect(() => {
    getIndexDbData();
  } , [])

  const getIndexDbData = async () => {
    const indexdb = await db.users.get(userId);
    setIndexDbData(indexdb || {limitShowArticles: 0})
  }
  
  const closeModal = () => {
    if(indexDbData && indexDbData?.limitShowArticles < 3) {
      showModal(!modalIsOpen)
    }
  }

  const showModalFn = async () => {
    readArticle()

    const indexdb = await db.users.get(userId);
    console.log('indexdb ', indexdb?.limitShowArticles);
    
    if(indexdb && indexdb?.limitShowArticles < 4) {
      router.push({
        pathname: '/detail',
        query: {
          title: article.title,
        },
      }, '/detail')
    } else {
      showModal(true)
    }
  }

  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-7 flex flex-col justify-center" key={index} onClick={() => showModalFn()}>
      <img src={article?.image} alt={article?.description} width="300" height="200" />
      
      <div className="px-6 py-4 w-50" style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>
        <div className="font-bold text-xl mb-2">{article?.title}</div>
        <span className="block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {article?.description}
        </span>
      </div>

      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          VER ARTICULO
        </button>
      </div>
    </div>
    <ModalDialog modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default Article;
