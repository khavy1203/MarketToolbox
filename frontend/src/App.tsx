import React from 'react';
// import './assets/css/app.css';
import './assets/vendors/iconly/bold.css';
import './assets/vendors/bootstrap-icons/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './components/pages/DashboardPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;