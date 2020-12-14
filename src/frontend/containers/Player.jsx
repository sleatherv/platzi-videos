import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions/index';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { match, playing } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => { //usamos useLayout effect para que renderice de forma sincrona en este momento
    props.getVideoSource(id);
  }, []); //si no le pasamos este elemento [] se creara un loop infinito

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <Redirect to='/404/' />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
//creamos la accion
const mapDispathToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispathToProps)(Player);

