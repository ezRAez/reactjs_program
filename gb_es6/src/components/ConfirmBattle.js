import React from 'react';

function ConfirmBattle(props) {
  return props.isLoading === true
  ? (<p>LOADING</p>)
  : (<div>CONFIRM BATTLE</div>);
};

export default ConfirmBattle;
