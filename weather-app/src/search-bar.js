import React, { Component } from 'react';

// Search Bar component with Submit button

/** **************************************
/ SearchBar class
/
/ @props onSubmit function handles form submission
/ ***************************************/

class SearchBar extends Component {
  /** ************************************
  / constructor
  /
  / @params props - properties to configure the component
  ****************************************/
  constructor(props) {
    super(props);
    // Define state for this component
    this.state = { term: "" }; // holds the current search term
  }

  /** ************************************
  / formSubmit
  /
  / @params e - JS event object for submit event
  ****************************************/
  formSubmit(e) {
    e.preventDefault();                   // prevent the default form behavior
    this.props.onSubmit(this.state.term); // Call onSubmit on our parent.
  }

  /** ************************************
  / formInput
  /
  / @params e - JS event object for submit event
  ****************************************/
  formInput(e) {
    // Handle change in input here...
    this.setState({ term: e.target.value });
  }

  /** ************************************
  / render
  /
  ****************************************/
  // Render this component
  render() {
    return (
      <form onSubmit={(e) => {
        this.formSubmit(e);    /* handle onSumbit from the search bar here */
      }} style={styles.form}>
        <input
          style={styles.input}
          /* Set a placeholder for this component */
          placeholder={this.props.placeholder}
          /* The value displayed in the component is the value stored in state */
          value={this.state.term}
          /* Handle change in input here */
          onChange={(e) => {
            this.formInput(e);  /* Handle change in the input field here */
          }} />
        <button type="submit" style={styles.submit}>Submit</button>
      </form>);
  }
}

export default SearchBar;

const styles = {
  form: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',

    width: 400,
    margin: 'auto',

    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid'
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 18,
    margin: 5,
    marginRight: 0,
    borderRadius: 6,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 3,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  submit: {
    margin: 5,
    marginLeft: 0,
    width: 100,
    padding: 10,
    margin: 5,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#9bf',
    border: 'none',
    fontSize: 18,
    color: '#fff'
  }
}
