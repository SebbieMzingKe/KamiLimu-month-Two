import './BigPicture.css'
import p1 from '../../assets/flo.webp'
import p2 from '../../assets/4.webp'
import p3 from '../../assets/bk.jpeg'
import i1 from '../../assets/Screenshot (1).png'
import i2 from '../../assets/Screenshot (6).png'
import i3 from '../../assets/Screenshot (21).png'

const BigPicture = () => {
  return (
    <div className='BigPicture'>
        <div className="picture">
            <img src={p1} alt="" />
            <div className="caption">
                <img src={i1} alt="" />            
                <p>Responsible Computing</p>
            </div>
        </div>
        <div className="picture">
            <img src={p2} alt="" />
            <div className="caption">
                <img src={i2} alt="" />            
                <p>Scholarships and essay writing</p>
            </div>
        </div>
        <div className="picture">
            <img src={p3} alt="" />
            <div className="caption">
                <img src={i3} alt="" />            
                <p>Responsible Computing in real life</p>
            </div>
        </div>
      
    </div>
  )
}

export default BigPicture
