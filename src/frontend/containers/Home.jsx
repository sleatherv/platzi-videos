import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
import '../assets/styles/App.scss';
// hooks

const Home = ({ myList, trends, originals, searchResult }) => {
  return (
    //esto es un fragment
    <>
      <Header />
      <Search isHome />
      {searchResult.length > 0 && (
        <Categories title='Results'>
          <Carousel>
            {searchResult.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
              //de esta manera su valor es true
              />
            ))}
          </Carousel>
        </Categories>
      )
      }
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
                isList //de esta manera su valor es true
              />
            ))}
          </Carousel>
        </Categories>
      )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchResult: state.searchResult,
  };
};
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);
