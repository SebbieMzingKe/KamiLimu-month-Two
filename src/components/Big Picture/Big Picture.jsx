import './Big Picture.css'
import session from '../../assets/horse.jpeg'
import playicon from '../../assets/play.png'
import PropTypes from 'prop-types';

const BigPicture = ({setPlayState}) => {
  return (
    <div className='session'>
      {/* <div className="session-left">
        <img src={session} alt="" className='session-img'/>
        <img src={playicon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
      </div> */}
      <div className="session-right">
        <h3>Here is what I learnt</h3>
        <h2>Being at KamiLimu</h2>
        <p>I learnt the aspect of introducing play before or after every session</p>
        <p>that we should become an all-rounded individual not nly in tech but also communication and community engagement</p>
        <h2>Across all Sessions</h2>
        <p>The importance of responsible innovation/development and the use of technology responsibly</p>
      </div>
      
    </div>
  );
}
BigPicture.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default BigPicture;
