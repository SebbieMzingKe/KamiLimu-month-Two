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
          <div>
          <img src={g1} alt="" />
          <h3>Academic Excellence & Scolarship writing</h3>
          <p>Scaffolding as a learning habit - its good to seek support
            so that you can engage in one's unassisted efforts</p>
            <p>Feedback matters for good education as it makes one more likeable
              and enhances their experence
            </p>
          </div>
          <div>
          <img src={g2} alt="" />
            <h3>Soul in the game and Podcast for KamiLimu</h3>
            <p>Different factors have to come to play for one to chose where 
              they have to go
            </p>
            <p>Innovation has to scare you and if it doesn't its not an innovation</p>
            <p>
            The way to catch the attention of your users is by making 
            the end product easy, fun, accessible, cheaper, more convenient and
             bringing one to one tutor experience. 
             </p>
          </div>
          <div>
          <img src={g3} alt="" />
            <h3>Responsible Computing</h3>

            <p>While innovating responsibly we should be aware of who we are sffecting</p>
          </div>
          <div>
          <img src={g4} alt="" /> 
            <h3>
              Public Speaking
            </h3>
            <p>
              For one to connect with the audience they should apply the elements of speech which are 
              ethos for credibility, pathos for emotion and logos for logic.
            </p>
            <p>
              Always arrive unknown and leave unforgettable
            </p>
          </div>
        </div>

        <button className='btn dark-btn'>See more take aways here <img src={arrow} alt="" /></button>
      
    </div>
  );
}

export default TakeHome;
