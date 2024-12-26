import Footer from './components/Footer';
import NavigationBar from './components/Navigation';
import NewsEvents from '../../components/NewsEvents'

export default function Home() {
  return (
    <>
    <NavigationBar login={false}/>
    <NewsEvents/>
    <Footer/>
    </>
  );
}
