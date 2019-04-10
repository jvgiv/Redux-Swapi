import React from "react";
import { connect } from "react-redux";
import { getCharacters } from '../actions'
import { CharacterList } from "../components";
import Loader from 'react-loader-spinner'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters()
    // call our action
  }

  render() {
    console.log(this.props.fetching)
    if (this.props.fetching) {
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      // return something here to indicate that you are fetching data
    }

// console.log(this.props.characters)
// console.log(this.props.error)
// console.log(this.props.fetching)

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,  /* mapStateToProps replaces null here */
  { getCharacters }
)(CharacterListView);
