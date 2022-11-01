import { Outlet } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Footer } from '../Footer/Footer';
import { CustomLink } from '../CustomLink/CustomLink'
import './head.scss';

const Head = () => {
 return(
  <>
    <header>
      <div className="container">
        <div className='head'>
          <Logo 
            logo={'Новостник'}
            url='/'
          />
          <div className="menu">
            <CustomLink to="/" children="Главная"/>
            <CustomLink to="/news" children="Новости"/>
            <CustomLink to="/contacts" children="Контакты"/>
          </div>
        </div>
      </div>
    </header>
    <main className='container__outlet'>
      <Outlet/>
    </main>
    <Footer/>
  </>
   
 )
}

export {Head}