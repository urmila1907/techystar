import React from 'react'
import vg from '../assets/5.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Tech deity</h1>
          <p>Solution to all your tech issues</p>
        </main>
      </div>

      <div className="home2" id='about'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            excepturi mollitia, quisquam delectus id saepe. Illum omnis aut
            accusamus fugit? Culpa quo eveniet consequuntur hic fugiat
            blanditiis dolore velit ipsa.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            vero quo alias sit possimus culpa beatae soluta, laboriosam delectus
            pariatur eos natus temporibus laborum porro itaque eius voluptatum
            quisquam deserunt. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Asperiores maxime repellendus dolorem ipsa hic
            unde perspiciatis consequuntur, aliquam iusto molestiae laudantium
            ipsam, quisquam magni? Molestias, consequatur. Suscipit omnis quia
            eius.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home