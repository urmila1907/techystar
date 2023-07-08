import React from 'react'
import vg from '../assets/5.webp'

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Tech deity</h1>
          <p>Solution to all your tech issues</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus excepturi mollitia, quisquam delectus id saepe. Illum omnis aut accusamus fugit? Culpa quo eveniet consequuntur hic fugiat blanditiis dolore velit ipsa.</p>
        </div>
      </div>
    </>
  );
}

export default Home