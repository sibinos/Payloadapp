import { buildConfig } from 'payload/config';
import Header from './collections/header';
import Media from './collections/Media';
import Users from './collections/Users';
import Logo from './graphics/Logo';
import Icon from './graphics/Icon';
import editor from './collections/editor';
import Footer from './collections/Footer';
import AboutPage from './collections/aboutPage';
import Main from './collections/main';
import HomePage from './collections/homePage';
// import TermsOfServicePage from './collections/TermsofServicePage';
import ServicePage from './collections/servicePage';
import PrivacyPolicyPage from './collections/privacyPolicyPage';
import ContactPage from './collections/contact';
import App from './component.js/customnav';
import Customers from './collections/Customer';
import SiteSettings from './collections/siteSettings';

// import example from './collections/test';
// import example from './collections/test';
// import test from './collections/test';
// import index from './index.html';

const path =require('path');
export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  admin: {
    user: Users.slug,
    // indexHTML:index,
    meta: {
      titleSuffix: '- TRBL Design',
      favicon: '/assets/favicon.svg',
    },
    components: {
       Nav:App,
      graphics: {
        Logo,
        Icon
      },
    },
    // css: path.resolve(__dirname, './stylesheet.css'),
    css: path.resolve(__dirname,'/admin/scss/font.scss'),
  },
  collections: [
    Users,
    Media,
    Header,
    editor,
    ContactPage,
    Footer,
    AboutPage,
    Main,
    HomePage,
    SiteSettings,
    ServicePage,
    PrivacyPolicyPage,
    Customers
  ],
  
});






