import './Body.scss';
import { News } from '../News/News';

const Body = props => {
 return(
  <section className={props.class}>
    <h1 className="news__title">
      {props.text1}<br/><span>{props.text2}</span><span className='last__world'>{props.lastWorld}</span>
    </h1>
    <ul className='news__list'>
      <News
        numberOfTitles={props.numberOfTitles}
      />
    </ul>
  </section>
 )
}

export {Body}