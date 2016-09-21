import React          from 'react';
import       { Link } from 'react-router';

function Home() {
  return (
    <div className="jumbotron col-sm-12 text-center transparentBg">
      <h1>Github Battle</h1>
      <p className='lead'>Some fancy motto</p>
      <Link to='playerOne'>
        <button type="button" className="btn btn-lg btn-success">Get Started</button>
      </Link>
    </div>
  )
}


export default Home;
