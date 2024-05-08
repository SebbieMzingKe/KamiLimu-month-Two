import './Hero.css'
import arrow from '../../assets/Scroll.svg'

function Hero() {
  return (
    <div className='hero container'>
      <div className="herotext">
        <h1>Lets take a look of what I have learnt the second month</h1>
        <p>From excelling in your Academics to what is good education and 
            why feedback matters. Have you ever had a soul in the game, 
            well. Find out about scholarships, Responsible Computing Challenges and how to win in real life
            What about some  some Version Control and CLI</p>
            <button className="btn">
                Explore More <img src={arrow} alt="" />
            </button>
      </div>
    </div>
  )
}

export default Hero
