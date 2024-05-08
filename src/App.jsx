import Sessions from "./components/About/Session";
import BigPicture from "./components/BigPicture/BigPicture";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MapLessons from "./components/MapLessons/MapLessons";
import Navbar from "./components/Navbar/Navbar";
import TakeHome from "./components/TakeHome/TakeHome";
import Title from "./components/Title/Title";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle = 'Big Pictures' title = 'What Was Taught'/>
      <BigPicture/>
      <Sessions/>
      <Title subTitle = 'From each Session' title = 'Key Takeaways'/>
      <TakeHome/> 
      <Title subTitle = 'Map Lessons' title = 'Application in studies and life'/>
      <MapLessons/>
      <Title subTitle = 'Contact Me' title = 'Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
