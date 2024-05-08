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
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
        </div>

        <button className='btn dark-btn'>See more take aways here <img src={arrow} alt="" /></button>
      
    </div>
  );
}

export default TakeHome;
