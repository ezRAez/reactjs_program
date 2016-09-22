import React from 'react';

function MainContainer(props) {
  return (
    <div className="col-md-12 jumbotron text-center transparentBg">
      {props.children}
    </div>
  );
};

export default MainContainer;
