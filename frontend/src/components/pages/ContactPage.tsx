import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';

const ContactPage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContent>
                <h2>Contact Us</h2>
                <p>This is the contact page.</p>
            </MainContent>
            <Footer />
        </div>
    );
};

export default ContactPage; 