import { Helmet } from 'react-helmet'
import EcommerceDevelopment from './components/EcommerceDevelopment'
import Footer from './components/Footer'
import Header from './components/Header'
import TechnicalWriting from './components/TechnicalWriting'
import WebDevelopment from './components/WebDevelopment'
import profileImage from './assets/AVATARZ 4.png'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-149400351-2');

function App() {
  return (
    <div>
      <Helmet>
      <meta name="description"
          content="Shahed Nasser is a full-stack developer and technical writer based in Lebanon with +5 years of experience in web development, e-commerce development, and more." />
        <meta name="keywords" content={`freelance,developer,lebanon,shahed,nasser,shahed nasser,projects,websites,software,ecommerce,development,
                                        lebanese,lebanese freelancer, business,lebanese web developer,web developer,
                                        software developer,html,js,css,html5,css3,javascript,react,nodejs,,laravel,magento,technical writer,e-commerce`} />
        <meta property="og:title" content="Shahed Nasser, Full-Stack Developer, Technical Writer" />
        <meta property="og:site_name" content="Shahed Nasser, Full-Stack Developer, Technical Writer" />
        <meta property="og:url" content={process.env.REACT_APP_DOMAIN_NAME} />
        <meta property="og:description"
          content="Shahed Nasser is a full-stack developer and technical writer based in Lebanon with +5 years of experience in web development, e-commerce development, and more." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content={profileImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shahed Nasser, Full-Stack Developer, Technical Writer" />
        <meta name="twitter:description" content="Shahed Nasser is a full-stack developer and technical writer based in Lebanon with +5 years of experience in web development, e-commerce development, and more." />
        <meta name="twitter:image" content={profileImage} />
        <meta name="twitter:image:alt" content="Shahed Nasser, Full-Stack Developer, Technical Writer" />
        <title>Shahed Nasser, Full-Stack Developer, Technical Writer</title>
      </Helmet>
      <Header />
      <WebDevelopment />
      <EcommerceDevelopment />
      <TechnicalWriting />
      <Footer />
    </div>
  );
}

export default App;
