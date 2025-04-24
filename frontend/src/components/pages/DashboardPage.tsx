import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import MainContent from '../layout/MainContent';
import Footer from '../layout/Footer';
import { Comment, Message } from '../../types/comment';
import styles from '../../styles/DashboardPage.module.css';

const DashboardPage: React.FC = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const stats = [
    { title: 'Profile Views', value: '112.000', icon: 'iconly-boldShow', color: 'purple' },
    { title: 'Followers', value: '183.000', icon: 'iconly-boldProfile', color: 'blue' },
    { title: 'Following', value: '80.000', icon: 'iconly-boldAdd-User', color: 'green' },
    { title: 'Saved Post', value: '112', icon: 'iconly-boldBookmark', color: 'red' },
  ];

  const comments: Comment[] = [
    {
      name: 'Si Cantik',
      comment: 'Congratulations on your graduation!',
      avatar: require('../../assets/images/faces/5.jpg'),
    },
    {
      name: 'Si Ganteng',
      comment: 'Wow amazing design! Can you make another tutorial for this design?',
      avatar: require('../../assets/images/faces/2.jpg'),
    },
  ];

  const messages: Message[] = [
    { name: 'Hank Schrader', handle: '@johnducky', avatar: require('../../assets/images/faces/4.jpg') },
    { name: 'Dean Winchester', handle: '@imdean', avatar: require('../../assets/images/faces/5.jpg') },
    { name: 'John Dodol', handle: '@dodoljohn', avatar: require('../../assets/images/faces/1.jpg') },
  ];
  return (
    <div className={styles.container}>
      <Sidebar />
      <div id="main" className={`${styles.main} ${isSidebarActive ? styles.sidebarActive : ''}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <MainContent stats={stats} comments={comments} messages={messages} />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;