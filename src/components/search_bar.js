//ES6 syntax,import react and from that pull the componenet variable
import React, {Component} from 'react';

// when the state of a componenet changes the render function is run to update the DOM.
// each component has it's own copy of state.
// functional base componenet
// const SearchBar = () => {
//   return <input />;
// };

// Class base componenet
class SearchBar extends Component {
  constructor(props) {
    super(props);
    // create an object with property term and save it to state
    this.state = {term: ''};
  }
  render() {
    return (
      <div className="search-bar">
        <input
          // value makes this component a controled component.
          // a controled component has it's value set by state.
          // When this.state changes, the render function is called to re render, and then the value is set to have the value of the state.
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChnage(term);
  }

}

// make the component available for import
export default SearchBar;
