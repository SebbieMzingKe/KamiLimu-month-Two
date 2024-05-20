import { useState } from "react";
//import Session from "./components/Session/Session";
import BigPicture from "./components/Big Picture/Big Picture";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MapLessons from "./components/MapLessons/MapLessons";
import Navbar from "./components/Navbar/Navbar";
import TakeHome from "./components/TakeHome/TakeHome";
import Title from "./components/Title/Title";
import VidePlayer from "./components/VideoPlayer/VidePlayer";
import Sessions from "./components/Sessions/Session";
import JeffBezos from "./components/SteveJobs/SteveJobs";


const App = () => {

  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle = 'Sessions' title = 'Session Overview'/>
      <BigPicture/>
      <Sessions setPlayState = {setPlayState}/>
      <Title subTitle = 'From each Session' title = 'Key Takeaways'/>
      <TakeHome/> 
      <Title subTitle = 'Map Lessons' title = 'Application in studies and life'/>
      <MapLessons/>
      <Title subTitle = 'From Steve Jobs' title = 'This Is What I Learnt'/>
      <JeffBezos/>
      {/* <Title subTitle = 'Contact Me' title = 'Get In Touch'/>
      <Contact/> */}
      <Footer/>
      </div>
      <VidePlayer playState = {playState} setPlayState = {setPlayState}/>
    </div>
  );
}

export default App;
