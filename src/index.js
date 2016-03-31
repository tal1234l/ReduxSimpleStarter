// import react library from the node_modules
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'Youtube-api-search';
import _ from 'lodash';
// import a component we created.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube key
const API_KEY = 'AIzaSyBk_89IMh9lLd1lPy0bFOAEAl4GAh7Fcgk';

// Create a new component class. This componenet should produce some html code
// We used const because we don't expenct this App to change over time.
// Written in JSX style.
// => is equal to using the function keyword, and is takenfrom ES6.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // Ajax call to get list of movies from youtube
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChnage={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated html and put it on the page (in the DOM)
// we pass the instance of the component by wrapping it with tags.
ReactDOM.render(<App />, document.querySelector('.container'));


// redux - state container = a collection of all the data that describes the App
// conatines data and metaData that describes state
// we centrelize all of the applications data in a single object
