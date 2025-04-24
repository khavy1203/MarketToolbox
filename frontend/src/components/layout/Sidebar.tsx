import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css';

interface MenuItem {
  title: string;
  icon: string;
  link?: string;
  subMenu?: { title: string; link: string }[];
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: 'bi-grid-fill', link: '/' },
  {
    title: 'Components',
    icon: 'bi-stack',
    subMenu: [
      { title: 'Alert', link: '/components/alert' },
      { title: 'Badge', link: '/components/badge' },
      { title: 'Breadcrumb', link: '/components/breadcrumb' },
      { title: 'Button', link: '/components/button' },
      { title: 'Card', link: '/components/card' },
      { title: 'Carousel', link: '/components/carousel' },
      { title: 'Dropdown', link: '/components/dropdown' },
      { title: 'List Group', link: '/components/list-group' },
      { title: 'Modal', link: '/components/modal' },
      { title: 'Navs', link: '/components/navs' },
      { title: 'Pagination', link: '/components/pagination' },
      { title: 'Progress', link: '/components/progress' },
      { title: 'Spinner', link: '/components/spinner' },
      { title: 'Tooltip', link: '/components/tooltip' },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'bi-collection-fill',
    subMenu: [
      { title: 'Avatar', link: '/extra/avatar' },
      { title: 'Sweet Alert', link: '/extra/sweetalert' },
      { title: 'Toastify', link: '/extra/toastify' },
      { title: 'Rating', link: '/extra/rating' },
      { title: 'Divider', link: '/extra/divider' },
    ],
  },
  {
    title: 'Layouts',
    icon: 'bi-grid-1x2-fill',
    subMenu: [
      { title: 'Default Layout', link: '/layouts/default' },
      { title: '1 Column', link: '/layouts/1-column' },
      { title: 'Vertical with Navbar', link: '/layouts/vertical-navbar' },
      { title: 'Horizontal Menu', link: '/layouts/horizontal' },
    ],
  },
  {
    title: 'Form Elements',
    icon: 'bi-hexagon-fill',
    subMenu: [
      { title: 'Input', link: '/forms/input' },
      { title: 'Input Group', link: '/forms/input-group' },
      { title: 'Select', link: '/forms/select' },
      { title: 'Radio', link: '/forms/radio' },
      { title: 'Checkbox', link: '/forms/checkbox' },
      { title: 'Textarea', link: '/forms/textarea' },
    ],
  },
  { title: 'Form Layout', icon: 'bi-file-earmark-medical-fill', link: '/forms/layout' },
  {
    title: 'Form Editor',
    icon: 'bi-pen-fill',
    subMenu: [
      { title: 'Quill', link: '/forms/editor/quill' },
      { title: 'CKEditor', link: '/forms/editor/ckeditor' },
      { title: 'Summernote', link: '/forms/editor/summernote' },
      { title: 'TinyMCE', link: '/forms/editor/tinymce' },
    ],
  },
  { title: 'Table', icon: 'bi-grid-1x2-fill', link: '/tables/table' },
  { title: 'Datatable', icon: 'bi-file-earmark-spreadsheet-fill', link: '/tables/datatable' },
  {
    title: 'Widgets',
    icon: 'bi-pentagon-fill',
    subMenu: [
      { title: 'Chatbox', link: '/ui/widgets/chatbox' },
      { title: 'Pricing', link: '/ui/widgets/pricing' },
      { title: 'To-do List', link: '/ui/widgets/todolist' },
    ],
  },
  {
    title: 'Icons',
    icon: 'bi-egg-fill',
    subMenu: [
      { title: 'Bootstrap Icons', link: '/ui/icons/bootstrap' },
      { title: 'Fontawesome', link: '/ui/icons/fontawesome' },
      { title: 'Dripicons', link: '/ui/icons/dripicons' },
    ],
  },
  {
    title: 'Charts',
    icon: 'bi-bar-chart-fill',
    subMenu: [
      { title: 'ChartJS', link: '/ui/charts/chartjs' },
      { title: 'Apexcharts', link: '/ui/charts/apexcharts' },
    ],
  },
  { title: 'File Uploader', icon: 'bi-cloud-arrow-up-fill', link: '/ui/file-uploader' },
  {
    title: 'Maps',
    icon: 'bi-map-fill',
    subMenu: [
      { title: 'Google Map', link: '/ui/maps/google' },
      { title: 'JS Vector Map', link: '/ui/maps/jsvectormap' },
    ],
  },
  { title: 'Email Application', icon: 'bi-envelope-fill', link: '/app/email' },
  { title: 'Chat Application', icon: 'bi-chat-dots-fill', link: '/app/chat' },
  { title: 'Photo Gallery', icon: 'bi-image-fill', link: '/app/gallery' },
  { title: 'Checkout Page', icon: 'bi-basket-fill', link: '/app/checkout' },
  {
    title: 'Authentication',
    icon: 'bi-person-badge-fill',
    subMenu: [
      { title: 'Login', link: '/auth/login' },
      { title: 'Register', link: '/auth/register' },
      { title: 'Forgot Password', link: '/auth/forgot-password' },
    ],
  },
  {
    title: 'Errors',
    icon: 'bi-x-octagon-fill',
    subMenu: [
      { title: '403', link: '/error/403' },
      { title: '404', link: '/error/404' },
      { title: '500', link: '/error/500' },
    ],
  },
  { title: 'Documentation', icon: 'bi-life-preserver', link: 'https://zuramai.github.io/mazer/docs' },
  { title: 'Contribute', icon: 'bi-puzzle', link: 'https://github.com/zuramai/mazer/blob/main/CONTRIBUTING.md' },
  { title: 'Donate', icon: 'bi-cash', link: 'https://github.com/zuramai/mazer#donate' },
];

const Sidebar: React.FC = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div id="sidebar" className={`${styles.sidebar} ${isSidebarActive ? styles.active : ''}`}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarHeader}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={require('../../assets/images/logo/logo.png')} alt="Logo" />
              </Link>
            </div>
            <div className={styles.toggler}>
              <a href="#" className={styles.sidebarHide} onClick={toggleSidebar}>
                <i className="bi bi-x bi-middle" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.menu}>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.title.includes('Menu') ||
                item.title.includes('Forms & Tables') ||
                item.title.includes('Extra UI') ||
                item.title.includes('Pages') ||
                item.title.includes('Raise Support') ? (
                  <li className={styles.sidebarTitle}>{item.title}</li>
                ) : (
                  <li className={`${styles.sidebarItem} ${item.subMenu ? styles.hasSub : ''}`}>
                    {item.subMenu ? (
                      <a
                        href="#"
                        className={styles.sidebarLink}
                        onClick={() => toggleSubmenu(index)}
                      >
                        <i className={item.icon} />
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <Link to={item.link || '#'} className={styles.sidebarLink}>
                        <i className={item.icon} />
                        <span>{item.title}</span>
                      </Link>
                    )}
                    {item.subMenu && (
                      <ul
                        className={`${styles.submenu} ${activeSubmenu === index ? styles.active : ''}`}
                        id={`menu-${index}`}
                      >
                        {item.subMenu.map((sub, subIndex) => (
                          <li key={subIndex} className={styles.submenuItem}>
                            <Link to={sub.link}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <button className={styles.sidebarToggler} onClick={toggleSidebar}>
          <i className="bi bi-x" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;