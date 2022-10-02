import './Logo.scss';
import { Link } from "react-router-dom"

const Logo = props => {
 return(
  <div className="logo">
    <Link to={props.url}>{props.logo}</Link>
  </div>
 )
}

export {Logo}