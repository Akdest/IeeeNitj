import Footer from './components/Footer';
import NavigationBar from './components/Navigation';
import NewsEvents from './components/NewsEvents'
import Herosection from './components/Herosection';
import Gallery from './components/Gallery' ;

export default function Home() {
  return (
    <>
    <NavigationBar login={false}/>
    <Herosection/>
    <div
      style={{
        background:"linear-gradient(to bottom, #E0F5FF, #AFCFF1)",
        //  width:"100%"
        }}
    >
      <NewsEvents/>
      <Gallery/>
    </div>
    <Footer/>
    </>
  );
}
