import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Head } from './components/Head/Head';
import { Home } from './components/Home/Home';
import { AllNews } from './components/AllNews/AllNews';
import { NewsDetails } from './components/NewsDetails/NewsDetails';
import { Contacts } from './components/Contacts/Contacts';


const App = () => {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Head/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="news" element={<AllNews/>}/>
          <Route path="news/:details/:index" element={<NewsDetails/>}/>
          <Route path="contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
