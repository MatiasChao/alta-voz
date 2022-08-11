import React, { useEffect, useRef } from "react";

const Article = ({userId} : {userId: string}) => {

  const renderCount = useRef(0);

  useEffect(() => {
    console.log('userId =)', userId)
  }, [])

  const countReadArticle = () => {
    renderCount.current += 1;
  }

  // guardar en indexDB
  // proteger ruta
  const checkUserGetLimit = () => {
    
    const indexdedDB = window.indexedDB;

    if(indexdedDB) {
      let db;
      const request = indexdedDB.open('articles', 1) // hacemos la peticion y creamos la db
      
      request.onsuccess = () => {
        db = request.result
        console.log('OPEN ', db)
      }

      request.onupgradeneeded = () => {
        db = request.result
        console.log('create ', db)

        const objectStore = db.createObjectStore('list')
      }

      request.onerror = (error) => {
        console.log('Error ', error)
      }
    }

  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        VER ARTICULO
      </button>
      <span>Cantidad: {renderCount.current}</span>
    </div>
  );
};

export default Article;
