import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';

const AboutPage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContent>
                <h2>About Us</h2>
                <p>This is the about page.</p>
            </MainContent>
            <Footer />
        </div>
    );
};

export default AboutPage; 