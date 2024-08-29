// import logo from './logo.svg';
import './App.css';
import EighthPage from './components/EighthPage';
import FifthPage from './components/FifthPage';
import FirstPage from './components/FirstPage';
import Footer from './components/Footer';
import FourthPage from './components/FourthPage';
import Head from './components/Head';
import NinthPage from './components/NinthPage';
import SecondPage from './components/SecondPage';
import SeventhPage from './components/SeventhPage';
import SixthPage from './components/SixthPage';
import ThirdPage from './components/ThirdPage';

function App() {
  return (
    <div className="App">
     <Head />
     <FirstPage />
     <SecondPage />
     <ThirdPage />
     <FourthPage />
     <FifthPage />
     <SixthPage />
     <SeventhPage />
     <EighthPage />
     <NinthPage />
     <Footer />
    </div>
  );
}

export default App;
