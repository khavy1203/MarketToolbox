import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';

const ProfilePage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContent>
                <h2>User Profile</h2>
                <p>This is the profile page.</p>
            </MainContent>
            <Footer />
        </div>
    );
};

export default ProfilePage; 