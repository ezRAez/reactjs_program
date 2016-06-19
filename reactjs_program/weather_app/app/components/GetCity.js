import React, { Component, PropTypes } from 'react';

function Button(props) {
  return (
    <button type="button"
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
      {props.children}
    </button>
  )
}

function InputField(props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder="San Antonio, Texas"
      type="text"
      value={props.city} />
  )
}

function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

class GetCity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={getStyles(this.props)}>
        <InputField
          onUpdateCity={this.props.onUpdateCity}
          city={this.props.city} />
        <Button
          onSubmitCity={this.props.onSubmitCity}>
          Get Weather!
        </Button>
      </div>
    );
  }
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default GetCity;
