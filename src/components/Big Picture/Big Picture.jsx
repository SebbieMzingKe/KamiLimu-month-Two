import './Big Picture.css'
import session from '../../assets/horse.jpeg'
import playicon from '../../assets/play.png'
import PropTypes from 'prop-types';

const BigPicture = ({setPlayState}) => {
  return (
    <div className='session'>
      <div className="session-left">
        <img src={session} alt="" className='session-img'/>
        <img src={playicon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
      </div>
      <div className="session-right">
        <h3>About the BigPicture</h3>
        <h2>Changing Lives. Nurturing Talents.</h2>
        <p>we are taught to nurture our talents both from industry experts and from our friends within KamiLimu examples of the ICT tracks and public speaking </p>
        <p>mainly students do apply write essays, pass through interviews it is a long process and it is not easy btw once you get in everything will be flowing swiftly</p>
        <p>they decided to do mainly what other universities arent able to provid to their students e.g the version and command line interface</p>
      </div>
      
    </div>
  );
}
BigPicture.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default BigPicture;
