var React              = require('react');
var PropTypes          = React.PropTypes;
var styles             = require('../styles');
var UserDetails        = require('./user_details');
var UserDetailsWrapper = require('./user_details_wrapper');
var Link               = require('react-router').Link;
var MainContainer      = require('./main_container');
var Loading            = require('./loading');


function StartOver() {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to="/playerOne">
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results(props) {
  if (props.isLoading === true){
    return (
      <Loading speed={200} text="Give it a sec" />
    );
  }
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex  = winningIndex === 1 ? 0 : 1;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]}
                       info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]}
                       info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  );
};

Results.propTypes = {
  isLoading:   PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores:      PropTypes.array.isRequired
}

module.exports = Results;
