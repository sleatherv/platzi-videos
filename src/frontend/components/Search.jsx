import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchVideo } from '../actions/index';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome, searchVideo } = props;
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleSearch = (event) => {
    searchVideo(event.target.value);
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onKeyUp={handleSearch}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
