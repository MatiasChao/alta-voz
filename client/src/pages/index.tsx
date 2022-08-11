import type { NextPage } from 'next'
import { useEffect } from 'react'
import Account from '../components/Account'

const Home: NextPage = () => {

  // useEffect(() => {
  //   getArticles();
  // }, [])

  // const getArticles = async () => {
  //   const resp = await fetch('http://localhost:8080/api/articles')
  //   .then(response => response.json())
  //   console.log(resp)
  //   // .then(data => console.log(data.json()));
  // }

  return (
    <Account />
  )
}

export default Home
