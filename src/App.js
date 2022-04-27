import './assets/index.scss';

import logo from './resources/mainlogo.svg';
import calendar from './resources/Groupcalendar.svg';
import cup from './resources/Groupcup.svg';
import sos from './resources/Groupsossage.svg';
import egs from './resources/IMAGEeggs.jpg';
import first from './resources/IMAGEfirstmenu.jpg';
import second from './resources/IMAGEsecondmenu.jpg';
import facebook from './resources/IMAGEfacebook.svg';
import twitter from './resources/IMAGEfacebook.svg';
import instagram from './resources/IMAGEinsta.svg';
import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState(null);

  const onChange = (i) => {
    setActive(i);
  }

  const arr = [
    {name: 'Features'},
    {name: 'Premium'},
    {name: 'Pricing'},
    {name: 'About'}
  ]
  const button = arr.map(({name , i}) => {
    let clazz = '';
    if (active === i) {
      clazz = 'promo__nav-active'
    }
    return (
      <li onClick={onChange(i)} className={`promo__nav-item ${clazz}`} key={name}>
      <a className='promo__nav-link' href='#'>{name}</a>
    </li>
    )
  })
  return (
    <>
    <nav>
      <ul className='promo__nav'>
        <li className='promo__nav-item'>
          <img className='promo__nav-img' src={logo} alt="" />
        </li>
        {button}
        <li className='promo__nav-item promo__nav-point'>
          <a className='promo__nav-link' href='#'>Sign in</a>
        </li>
        <li className='promo__nav-item promo__nav-wide'>
          <a  className='promo__nav-link promo__nav-started' href='#'>Get Started</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

const Ability = () => {
  const arr = [
    {title: 'Pro ad constituto', text: 'Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.', img: {cup}},  /* Как правильно прописывать картинку */
    {title: 'Eam commodo', text: 'Fuisset intellegat delicatissimi ex mea. Cu probo integre nec.', img: 'sos'},
    {title: 'Pro ad constituto', text: 'Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet.', img: 'calendar'}
  ];
  const card = arr.map(({title, text, img}) => {
    return (
      <div className="ability__item" key={title}>
        <img className='ability__item-img' src={img} alt="" />
        <div className="ability__subtitle">{title}</div>
        <div className="ability__text">{text}</div>
      </div>
    )
  })
  return (
  <section className="ability">
    <div className="ability__title">
      <span className="ability__span">Promoting your business and services with Propel:</span><br />
      A responsive, multi-page business template with everything you need propel your business.
    </div>
    <div className="ability__cards">
      {card}
      {/* <div className="ability__item">
        <img className='ability__item-img' src={cup} alt="" />
        <div className="ability__subtitle">Pro ad constituto</div>
        <div className="ability__text">Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.</div>
      </div>
      <div className="ability__item">
        <img className='ability__item-img' src={sos} alt="" />
        <div className="ability__subtitle">Eam commodo</div>
        <div className="ability__text">Fuisset intellegat delicatissimi ex mea. Cu probo integre nec.</div>
      </div>
      <div className="ability__item">
        <img className='ability__item-img' src={calendar} alt="" />
        <div className="ability__subtitle">Pro ad constituto</div>
        <div className="ability__text">Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet.</div>
      </div> */}
    </div>
  </section>
  )
}

const Pic = () => {
  return (
    <section className='pic'>
      <img className='pic__photo' src={egs} alt="" />
      <p className="pic__text"><span className="pic__subtitle">Illud decore voluptaria has at.</span> <br />
      Hinc invenire atomorum no vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo. <br />
        <span className="pic__about">More About Us</span>
      </p>
      <div className="divider"></div>
    </section>
  )
}

const Menu = () => {
  return (
    <section className="menu">
    <div className="menu__wrapper">
        <img className='menu__img' src={first} alt="" />
      <div className="menu__descr">
        <div className="menu__descr-subtitle"><span className="menu__descr-span">Ex tempor euismod sapientem ouis lexor pro.</span> Ad vix dicta iudico singulis, ius ex mollis veritus.</div>
        <div className="menu__descr-text">Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed.</div>
      </div>
    </div>
    <div className="menu__cover">
      <div className="menu__descr">
        <div className="menu__descr-subtitle"><span className="menu__descr-span">Te elit antiopam vix zril recusabo ut pri.</span> Quas suscipit ad mea verear vivendo tincidunt.</div>
        <div className="menu__descr-text">Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</div>
      </div>
        <img className='menu__img' src={second} alt="" />
    </div>
    <div className="menu__info">Wanna know more about the Premium deal?</div>
    <div className="menu__footer">See the full range of Premium</div>
    <div className="divider"></div>
  </section>
  )
}

const Info = () => {
  return (
    <section className="info">
    <div className="info__descr">
      <div className="info__descr-wrapper">
        <div className="info__descr-title">Party On</div>
        <div className="info__descr-dash"></div>
      </div>
      <div className="info__descr-text"><span className="info__descr-span">Quas suscipit ad mea.</span> Pri cu dico labores officiis odio principes complectitur ad sea.</div>
    </div>
    <button className="info__btn">Get Started</button>
  </section>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__left">
      <img className='footer__left-img' src={logo} alt="" />
      <div className="footer__left-rights">© 2018 Spoon Inc, All rights reserved.</div>
    </div>
    <div className="footer__right">
      <div className="footer__right-1">
        <a className='footer__link' href="#">Features</a>
        <a className='footer__link' href="#">Premium</a>
        <a className='footer__link' href="#">Pricing</a>
      </div>
      <div className="footer__right-2">
        <a className='footer__link' href="#">About</a>
        <a className='footer__link' href="#">Blog</a>
        <a className='footer__link' href="#">Contact</a>
      </div>
      <div className="footer__right-3">
        <a className='footer__link' href="#">Image License Info</a>
        <a className='footer__link' href="#">Powered by Webflow</a>
      </div>
      <div className="footer__social">
        <a className='footer__social-icons' href="#"><img src={facebook} alt="" /></a>
        <a className='footer__social-icons' href="#"><img src={twitter} alt="" /></a>
        <a className='footer__social-icons' href="#"><img src={instagram} alt="" /></a>
      </div>
    </div>
  </footer>
  )
}

const App = () => {
  return (
    <body>
      <Nav/>
      <section className='promo'>
        <div className='container'>
{/*           Понял что надо вынести но у меня получается белая полоса(это навигация т к там белый шрифт и уже под ней бэкграунд, нужно создать еще доп тэг и туда прописать
          бэкграунд?) */}
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

            <h1 className='title promo__title'>Propel your business.</h1>
            <h3 className='promo__subtitle'>
              Propel comes with everything you need to get your business rolling.
            </h3>
            <button className='promo__btn'>Get Started</button>
        </div>
      </section>

      <div className="container">
        <Ability/>

        <Pic/>

        <Menu/>

        <Info/>

      </div>
        <Footer/>
    </body>
  );
}

export default App;