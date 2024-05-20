import './MapLessons.css';

import next from '../../assets/arrowfd.png'
import back from '../../assets/arrowbk.png'
import usr1 from '../../assets/scholarship.webp'
import usr2 from '../../assets/public speaking.webp'
import usr3 from '../../assets/version control.webp'
import usr4 from '../../assets/responsible comuting.webp'
import usr5 from '../../assets/ict.webp'
import usr6 from '../../assets/publicspkng.jpeg'
import { useRef } from 'react';

const MapLessons = () => {

    const slider = useRef()
    let translatex = 0;
    const slideForward = () =>{
        if(translatex > -50){
            translatex -= 20;

        }
        slider.current.style.transform = `translateX(${translatex}%)`
        
    }
    const slideBackward = () =>{
        if(translatex < 0){
            translatex += 20;

        }
        slider.current.style.transform = `translateX(${translatex}%)`
        
    }


  return (
    <div className='map-lessons'>
        <img src={next} alt="" className='next-btn' onClick={slideForward}/> 
        <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul type='none' ref = {slider}>
                <li>
                    <div className="slide">
                        <div className="lesson-info">
                            <img src={usr1} alt="" />
                            <div>
                                <h3>Academic Excellence & Scholarship Writing</h3>
                                <span>Scholarship</span>
                            </div>
                        </div>
                        {/* <p>
                            From what is a good education? A one that is supported 
                            by a good teacher, A holistic education. How do i apply 
                            academic excellence in research. Its by building ones 
                            research skills. I am applying this in my current work 
                            with our lecturer on responsible AI 
                        </p> */}
                    </div>
                </li>
                <li>
                    <div className="slide"> 
                        <div className="lesson-info">
                            <img src={usr2} alt="" />
                            <div>
                                <h3>Soul in the Game and Podcast for KamiLimu</h3>
                                <span>Community Engagement</span>
                            </div>
                        </div>
                        {/* <p>
                            From what is a good education? A one that is supported 
                            by a good teacher, A holistic education. How do i apply 
                            academic excellence in research. Its by building ones 
                            research skills. I am applying this in my current work 
                            with our lecturer on responsible AI 
                        </p> */}
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="lesson-info">
                            <img src={usr3} alt="" />
                            <div>
                                <h3>Version Control and CLI</h3>
                                <span>ICT</span>
                            </div>
                        </div>
                        {/* <p>
                            From what is a good education? A one that is supported 
                            by a good teacher, A holistic education. How do i apply 
                            academic excellence in research. Its by building ones 
                            research skills. I am applying this in my current work 
                            with our lecturer on responsible AI 
                        </p> */}
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="lesson-info">
                            <img src={usr4} alt="" />
                            <div>
                                <h3>Responsible Computing in Real Life</h3>
                                <span>Innovation</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </li>
                <li>
                <div className="slide">
                        <div className="lesson-info">
                            <img src={usr5} alt="" />
                            <div>
                                <h3>ICT Careers</h3>
                                <span>Professional Development</span>
                            </div>
                        </div>
                    </div>
                </li>
                
                <li>
                <div className="slide">
                        <div className="lesson-info">
                            <img src={usr6} alt="" />
                            <div>
                                <h3>How To Learn and Public Speaking</h3>
                                <span>Personal Development</span>
                            </div>
                        </div>
                    </div>
                </li>
               
            </ul>
        </div>
      
    </div>
  );
}

export default MapLessons;
