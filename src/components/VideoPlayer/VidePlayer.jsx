import './VidePlayer.css'
import bus from '../../assets/bus simulator indonesia.mp4'
import { useRef } from 'react';
import PropTypes from 'prop-types';

const VidePlayer = ({playState, setPlayState}) => {

    const player = useRef(null)
    const closePlayer = (e)=> {
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video ${playState?'': 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={bus} autoPlay muted controls></video>
      
    </div>
  );
}

VidePlayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayState: PropTypes.func.isRequired,
};


export default VidePlayer;
