import React from "react";
import collage from '../images/collage.png';
import logo from '../images/logoResize.png';
import {useRoutes, A} from 'hookrouter';
import About from './About';
import Contact from './Contact';
import Sponsors from './Sponsors';
import Donate from './Donate';
import Applications from './Applications';
import Board from './Board';
import Testimonials from './Testimonials';
import Visuals from './Visuals';
//'/products/:id': ({id}) => <ProductDetails id={id} 
const routes = {
    '/': () => <About />,
    '/donate': () => <Donate />,
    '/applications': () => <Applications />,
    '/testimonials': () => <Testimonials />,
    '/visuals': () => <Visuals />,
    '/sponsors': () => <Sponsors />,
    '/board': () => <Board />,
    '/contact': () => <Contact />
};


export const Header= () =>  {
    const routeResult = useRoutes(routes);
    return (<div><div id="topBar" className="col-xs-12">
        <img src={collage} className="fixedCollage" alt="collage" />
        </div>
        <div id='header'>
        <A href="/" className="brand">
            <img src={logo} alt="Tour of Honor" />
        </A>
        <nav className="navbar navbar-expand-lg navbar-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mainMenu" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto navbar-nav">
                <li>
                    <A href="/donate"><i className="fa fa-money"></i> Donate</A>
                </li>
                <li>
                    <A href="/applications"><i className="fa fa-pencil"></i> Applications</A>
                </li>
                <li>
                    <A href="/testimonials"><i className="fa fa-comments-o"></i> Testimonials</A>
                </li>
                <li>
                    <A href="/visuals"><i className="fa fa-camera"></i> Visuals</A>
                </li>
                <li>
                    <A href="/sponsors"><i className="fa fa-handshake-o"></i> Sponsors</A>
                </li>
                <li>
                    <A href="/board"><i className="fa fa-users"></i> Board</A>
                </li>
                <li>
                    <A href="/contact"><i className="fa fa-phone"></i> Contact</A>
                </li>
            </ul>
        </div>
        </nav>


        
        
        
        
        </div>
        {routeResult}
        </div>

        
    );
  }

  export default Header;