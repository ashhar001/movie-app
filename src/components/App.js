import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, setShowFavourite} from '../actions';


class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('Updated');
      this.forceUpdate();
    });

    //make api call
    //dispatch action
    store.dispatch(addMovies(data));

    console.log('State', this.props.store.getState());
  }

  isMovieFavourite = (movie) =>{

    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourite(val))
  }
  render(){

    const {list, favourites, showFavourites} = this.props.store.getState(); //{list:[], favourite:[]}
    console.log('Render', this.props.store.getState());

    const dispplayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar/>
        <div className="main">

        <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={ () => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={ () => this.onChangeTab(true)} >Favourites</div>
        </div>

          <div className="list">
            {dispplayMovies.map( (movie, index) =>(
              <MovieCard
                movie = {movie}
                key={`movies-${index}`}
                dispatch = {this.props.store.dispatch}
                isFavourite = {this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {dispplayMovies.length === 0 ? <div className="no-movies">Favourites Empty!!</div>: null}
        </div>
      </div>
    );

  }
  
}

export default App;
