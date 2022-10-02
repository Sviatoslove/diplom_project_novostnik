import './OneNews.scss';
import { NavLink } from 'react-router-dom';

const OneNews = props => {
  return(
    <li className='news__item'>
      <div className={props.class}>
        <NavLink to={props.to} phone={props.phone}>
          {props.title}
        </NavLink>
      </div>
      <div className="news__info">
        <a className="news__url" href={`https://${props.url}`}>{props.url}</a>
        <div className='news__data'>
          <span className="news__day">{props.day}</span>
          <span className='news__slash'>/</span>
          <span className='news__month'>{props.month}</span>
        </div>
      </div>
    </li>
  )
}

export {OneNews}