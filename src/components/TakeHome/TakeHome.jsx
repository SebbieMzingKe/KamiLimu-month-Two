import './TakeHome.css'
import g1 from '../../assets/cactus.jpeg'
import g2 from '../../assets/duck.jpeg'
import g3 from '../../assets/reflect.jpeg'
import g4 from '../../assets/ld.webp'
import arrow from '../../assets/Scroll.svg'

const TakeHome = () => {
  return (
    <div className='TakeHome'>
        <div className="gallery">
          <div>
          <img src={g1} alt="" />
          <h3>How To Learn</h3>
          <p>Working with Procrastination - using the promodomo technique</p>
            <p>
            </p>
            </div>
        </div>
            <div className="gallery">
          <div>
          <img src={g1} alt="" />
          <h3>Academic Excellence & Scolarship writing</h3>
          <p>Scaffolding as a learning habit </p>
            <p>Feedback matters for good education 
            </p>
          </div>
          </div>
          <div className="gallery">
          <div>
          <img src={g2} alt="" />
            <h3>Soul in the game and Podcast for KamiLimu</h3>
            <p>Considering different factors to choose a path
            </p>
            <p>Innovation has to scare you </p>
            <p>
            Make your products easy, fun and accessible 
             </p>
          </div>
          </div>

          <div className="gallery">
          <div>
          <img src={g3} alt="" />
            <h3>Responsible Computing</h3>

            <p>While innovating mind impact</p>
          </div>
          </div>

          <div className="gallery">
          <div>
          <img src={g4} alt="" /> 
            <h3>
              Public Speaking
            </h3>
            <p>
              Connect with the audience using pathos, logos and ethos
            </p>
            <p>
              Arrive unknown, leave unforgettable
            </p>
          </div>
          </div>

        {/* <button className='btn dark-btn'>See more take aways here <img src={arrow} alt="" /></button> */}
      
    </div>
    
  );
}

export default TakeHome;
