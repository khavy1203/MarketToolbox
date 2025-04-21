import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import MainContent from '../layout/MainContent';

const DashboardPage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContent>
                <h2>Dashboard</h2>
                <p>This is the dashboard page.</p>
            </MainContent>
            <Footer />
        </div>
    );
};

export default DashboardPage; 