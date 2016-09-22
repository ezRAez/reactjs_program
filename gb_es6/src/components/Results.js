import React, { PropTypes } from 'react';

function puke(obj) {
  return (<pre>{JSON.stringify(obj, 2, ' ')}</pre>);
}

function Results(props) {
  return (
    <div>Results: {puke(props)}</div>
  )
}

Results.propTypes = {
  scores:      PropTypes.array.isRequired,
  isLoading:   PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Results;
