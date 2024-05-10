import './MapLessons.css';

import next from '../../assets/arrowfd.png'
import back from '../../assets/arrowbk.png'
import usr1 from '../../assets/duck.jpeg'
import usr2 from '../../assets/flo.webp'
import usr3 from '../../assets/ld.webp'
import usr4 from '../../assets/duck.jpeg'
import { useRef } from 'react';

const MapLessons = () => {

    const slider = useRef()
    let translatex = 0;
    const slideForward = () =>{
        if(translatex > -50){
            translatex -= 25;

        }
        slider.current.style.transform = `translateX(${translatex}%)`
        
    }
    const slideBackward = () =>{
        if(translatex < 0){
            translatex += 25;

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
                                <h3>Academic Excellence</h3>
                                <span>Wrote and received feedback</span>
                            </div>
                        </div>
                        <p>
                            From what is a good education? A one that is supported 
                            by a good teacher, A holistic education. How do i apply 
                            academic excellence in research. Its by building ones 
                            research skills. I am applying this in my current work 
                            with our lecturer on responsible AI 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="lesson-info">
                            <img src={usr2} alt="" />
                            <div>
                                <h3>Scholarships and Soul in the Game</h3>
                                <span>Wrote and received feedback</span>
                            </div>
                        </div>
                        <p>
                            From what is a good education? A one that is supported 
                            by a good teacher, A holistic education. How do i apply 
                            academic excellence in research. Its by building ones 
                            research skills. I am applying this in my current work 
                            with our lecturer on responsible AI 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="lesson-info">
                            <img src={usr3} alt="" />
                            <div>
                                <h3>Version Control and CLI</h3>
                                <span>Wrote and received feedback</span>
                            </div>
                        </div>
                        <p>
                            From what is a good education? A one that is supported 
                            by a good teacher, A holistic education. How do i apply 
                            academic excellence in research. Its by building ones 
                            research skills. I am applying this in my current work 
                            with our lecturer on responsible AI 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="lesson-info">
                            <img src={usr4} alt="" />
                            <div>
                                <h3>Responsible Computing in Real Life</h3>
                                <span>Wrote and received feedback</span>
                            </div>
                        </div>
                        <p>
                            From what is a good education? A one that is supported 
                            by a good teacher, A holistic education. How do i apply 
                            academic excellence in research. Its by building ones 
                            research skills. I am applying this in my current work 
                            with our lecturer on responsible AI 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  );
}

export default MapLessons;
