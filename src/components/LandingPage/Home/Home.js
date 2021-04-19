import React from 'react';
import Contact from '../Contact/Contact';
import Discount from '../Discount/Discount';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurReviews from '../OurReviews/OurReviews';
import OurServices from '../OurServices/OurServices';
import './Home.css'
const Home = () => {
    return (
        <div className="Home">
            <Header></Header>
    <OurServices></OurServices>
    <Discount></Discount>
    <OurReviews></OurReviews>
    <Contact></Contact>
            <Footer></Footer>
       </div>
    );
};

export default Home;