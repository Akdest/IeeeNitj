import Footer from './components/Footer';
import NavigationBar from './components/Navigation';
import NewsEvents from '../../components/NewsEvents'
import Herosection from './components/Herosection';
import Gallery from './components/Gallery' ;
import Aboutsection from './components/Aboutsection';

export default function Home() {
  return (
    <>
    <NavigationBar login={false}/>
    <Herosection/>
    <Aboutsection/>
    <NewsEvents/>
    <Gallery/>
    <Footer/>
    </>
  );
}
