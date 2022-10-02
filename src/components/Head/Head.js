import { NavLink, Outlet } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Footer } from '../Footer/Footer';
import './head.scss';

const Head = () => {
 return(
  <>
    <header>
      <div className="container">
        <div className='head'>
          <Logo 
            logo={'Новостник'}
            url='/home'
          />
          <div className="menu">
            <NavLink to="/home">Главная</NavLink>
            <NavLink to="/news">Новости</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
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

// сделать HeadItem!