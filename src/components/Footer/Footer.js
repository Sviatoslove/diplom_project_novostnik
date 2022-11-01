import './Footer.scss';
import { Logo } from "../Logo/Logo"
import { MadeBy } from '../MadeBy/MadeBy';

const Footer = () => {
 return(
  <footer>
   <div className="container">
    <div>
     <Logo
      logo='Новостник'
      url='/'
     />
     <span className="footer__content">
      Single Page Application
     </span>
    </div>
    <span className="footer__project">
     Дипломный проект
    </span>
    <div className="footer__logo">
     <span className="footer__content">
      Made by
     </span>
     <MadeBy/>
    </div>
   </div>
  </footer>
 )
}

export {Footer}