import '../Contacts/Contacts.scss';
import React from "react";
import MyImage from '../../img/q.jpg';

const Contacts = () => {
 return (
  <div className="section__contacts">
    <div className="author">
      <a className="author__link" href="tel:+79967537913">
        +7 (996) 753 79 13
      </a>
      <h2 className="author__name">
        Святослав Попов
      </h2>
      <a className="author__email" href="mailto:vanasvyatee@gmail.com">
        vanasvyatee@gmail.com
      </a>
      <p className="author__employ">
        JavaScript разработчик
      </p>
      <p className="author__skills">
        ES5, ES6, <span>React</span>
      </p>
    </div>
    <div className="author__photo">
      <img src={MyImage} alt="photo" />
    </div>
  </div>
 )
}

export { Contacts };