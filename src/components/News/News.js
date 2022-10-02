import { OneNews } from '../OneNews/OneNews';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
 const [data, updateData] = useState(null);
 const reqestUrl = 'https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=0d4e5d2ce47c4559b66e6633b597ccc9';
 useEffect( () => {
   const fetchData = async () => {
     const response = await axios.get(reqestUrl);
     updateData(response.data);
   }
   fetchData();
 }, [])
 return data;
} 

const News = props => {
 const result = useFetch();
  return result && result['articles'].map ((item, index) => {
    if(index <= props.numberOfTitles) {
      return (
        <OneNews
          key={index}
          class='news__link__wrapper'
          to={`/news/details/${index}`}
          title={item.title}
          url={item.source.name}
          day={`${item.publishedAt[8]}${item.publishedAt[9]} `}
          month={` ${item.publishedAt[5]}${item.publishedAt[6]}`}
        />
      )
    }
  })
}

export {News}
