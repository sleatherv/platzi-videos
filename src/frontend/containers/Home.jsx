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
    <>
      <Header key='header' />
      <Search key='search' isHome />
      {searchResult.length > 0 && (
        <Categories key='Results' title='Results'>
          <Carousel key='CResults'>
            {searchResult.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))}
          </Carousel>
        </Categories>
      )
      }
      {myList.length > 0 && (
        <Categories key='MyList' title='Mi Lista'>
          <Carousel key='CMyList'>
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
      <Categories key='Trends' title='Tendencias'>
        <Carousel key='CTrends'>
          {trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories key='Originals' title='Originales de Platzi Video'>
        <Carousel key='COriginals'>
          {originals.map(item => <CarouselItem key={item.id ? item.id : item._id} {...item} />)}
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
