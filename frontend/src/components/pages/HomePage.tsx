import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContent>
                <h2>Welcome to My Application</h2>
                <p>This is the home page.</p>
            </MainContent>
            <Footer />
        </div>
    );
};

export default HomePage; 