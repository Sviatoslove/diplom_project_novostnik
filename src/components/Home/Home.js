import '../OneNews/OneNews.scss';
import '../Body/Body.scss';
import { Body } from '../Body/Body';
import { Link } from 'react-router-dom';


const Home = () => {
 return (
  <div className='home'>
   <Body
    text1='Всегда '
    text2='свежие'
    lastWorld=' Новости'
    numberOfTitles='5'
    class='news__home'
   />
   <div className='wrapp__news__aware'>
    <Link className='news__aware' to="/news">Быть в курсе событий</Link>
   </div>
  </div>
 )
}

export { Home };