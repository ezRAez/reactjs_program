import React             , { PropTypes } from 'react';
import                     { Link }      from 'react-router';
import UserDetails                       from './UserDetails';
import UserDetailsWrapper                from './UserDetailsWrapper';
import Loading                           from './Loading'

function ConfirmBattle(props) {
  return props.isLoading === true
  ? (<Loading />)
  : (
      <div>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header="Player 1">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
          </div>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12'>
              <button type='button' className='btn btn-lg btn-success space' onClick={props.onInitiateBattle}>Initiate Battle!</button>
            </div>
            <div className='col-sm-12'>
              <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger space'>Reselect Players</button>
              </Link>
            </div>
          </div>
        </div>
      );
};

ConfirmBattle.propTypes = {
  isLoading:        PropTypes.bool.isRequired,
  playersInfo:      PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle;
