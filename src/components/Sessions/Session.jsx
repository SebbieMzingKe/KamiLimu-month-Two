import './Session.css'
import p1 from '../../assets/responsible comuting.webp'
import p2 from '../../assets/academic excellence.jpeg'
import p3 from '../../assets/real life.webp'
import p4 from '../../assets/github portfolio.webp'
import p5 from '../../assets/how to learn.jpeg'

import i1 from '../../assets/Screenshot (1).png'
import i2 from '../../assets/Screenshot (6).png'
import i3 from '../../assets/Screenshot (21).png'

const Sessions = () => {
  return (
    <div className='BigPicture'>
        <div className="picture">
            <img src={p5} alt="" />
            <div className="caption">
                {/* <img src={i3} alt="" />             */}
                <h3>Academic <br />Excellence</h3>
            </div>
        </div>
        <div className="picture">
            <img src={p1} alt="" />
            <div className="caption">
                {/* <img src={i1} alt="" />             */}
                <h3>Responsible <br />Computing</h3>
            </div>
        </div>
        <div className="picture">
            <img src={p2} alt="" />
            <div className="caption">
                {/* <img src={i2} alt="" />             */}
                <h3>Scholarships and <br /> essay writing</h3>
            </div>
        </div>
        <div className="picture">
            <img src={p3} alt="" />
            <div className="caption">
                {/* <img src={i3} alt="" />             */}
                <h3>Responsible <br />Computing in <br />real life</h3>
            </div>
        </div>
        <div className="picture">
            <img src={p4} alt="" />
            <div className="caption">
                {/* <img src={i3} alt="" />             */}
                <h3>Version Control <br /> and CLI</h3>
            </div>
        </div>
        
      
    </div>
  )
}

export default Sessions