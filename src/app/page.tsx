import Footer from './components/Footer';
import NavigationBar from './components/Navigation';
import NewsEvents from '../../components/NewsEvents'
import Herosection from './components/Herosection';

export default function Home() {
  return (
    <>
    <NavigationBar login={false}/>
    <Herosection/>
    <NewsEvents/>
    <Footer/>
    </>
  );
}
