import Footer from './components/Footer';
import NavigationBar from './components/Navigation';
import NewsEvents from '../../components/NewsEvents';
import Herosection from '../Components/Herosection'
import Gallery from '../Components/Gallery'

export default function Home() {
  return (
    <>
    <NavigationBar login={false}/>
    <Herosection />
    <NewsEvents/>
    <Gallery/>
    <Footer/>
    </>
  );
}
