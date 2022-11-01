import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../NewsDetails/NewsDetails.scss';
import axios from 'axios';

const useFetch = () => {
 const [data, updateData] = useState(null);
 const reqestUrl = 'https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=0d4e5d2ce47c4559b66e6633b597ccc9';
 useEffect(() => {
   const fetchData = async () => {
     const response = await axios.get(reqestUrl);
     updateData(response.data);
   }
   fetchData();
 }, [])
 return data;
}

const getLastWorld = str => {
  let finalArr = [];
  let returnStr = '';
  let lastWorld;
  const arr = str.split(' ');
  arr.forEach((item, idx) => {
    if(item === '') {
      arr.splice(idx, 1)
    }
  })

  arr.forEach((item, idx) => {
    if(idx === arr.length - 1) {
      lastWorld = item
    }else {
      finalArr.push(item)
      returnStr = finalArr.join(' ')
    }
  })
  return (
    <h1 className="news__title">
     {returnStr} <span className="last__world">{lastWorld}</span>
    </h1>
  )
}

const NewsDetails = () => {
 const result = useFetch();
 const {index} = useParams();
 return result && (
  <div className="section__news__details">
    <div className="details__title">
      {getLastWorld(result['articles'][index].title)}
      <div className="news__info">
        <a className="news__url" href={`https://${result['articles'][index].source.name}`}>
          {result['articles'][index].source.name}
        </a>
        <div className='news__data'>
          <span className="news__day">
            {`${result['articles'][index].publishedAt[8]}${result['articles'][index].publishedAt[9]}`}
          </span>
          <span className='news__slash'>/</span>
          <span className='news__month'>
            {`${result['articles'][index].publishedAt[5]}${result['articles'][index].publishedAt[6]}`}
          </span>
        </div>
      </div>
    </div>
    <div className="details__content">
      <div className="details__content__image">
        <img src={result['articles'][index].urlToImage}></img>
      </div>
      <div className="details__content__text">
        {result['articles'][index].content}
      </div>
   </div>
  </div>
 )
}

export {NewsDetails}