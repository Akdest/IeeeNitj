import Footer from './components/Footer';
import NavigationBar from './components/Navigation';
import NewsEvents from './components/NewsEvents'
import Herosection from './components/Herosection';
import Gallery from './components/Gallery' ;
import Aboutsection from './components/Aboutsection';
import CoverPage from './components/CoverPage';

export default function Home() {
  return (
    <>
    <NavigationBar/>
    <CoverPage/>
    <Herosection/>
     
    <div
      style={{
        background:"linear-gradient(to bottom, #E0F5FF, #AFCFF1)",
        //  width:"100%"
        }}
    >
      <Aboutsection/>
      <NewsEvents/>
      <Gallery/>
    </div>
    <Footer/>
    </>
  );
}
