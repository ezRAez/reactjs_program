import React             , { PropTypes } from 'react';
import UserDetailsWrapper                from './UserDetailsWrapper';
import UserDetails                       from './UserDetails';
import                     { Link }      from 'react-router';

function StartOver() {
  return (
    <div className="col-sm-12 space">
      <Link to="/playerOne">
        <button type='button' className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  );
};

function Results(props) {
  if (props.isLoading === true) {
    return (
      <p> LOADING </p>
    );
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <div>
        <h1>It's a tie!</h1>
        <StartOver />
      </div>
    );
  }

  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  let losingIndex  = winningIndex === 0                ? 1 : 0;
  return (
    <div>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </div>
  )
}

Results.propTypes = {
  scores:      PropTypes.array.isRequired,
  isLoading:   PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Results;
