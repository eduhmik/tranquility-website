import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Tranquility Roofing and Construction Supplies Kenya"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <div className="inner">
              <header className="major">
                <h2>Roofing Sheets</h2>
              </header>
              <p>
                We don't compromise on quality, that's why our products come
                with a 15 years fade free warranty. Take advantage of our
                pocket-friendly prices.
              </p>
            </div>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3 style={{ fontSize: 50 }}>Longtile</h3>
                <p style={{ fontSize: 20 }}>Gauge 28 KES 700</p>
                <p style={{ fontSize: 20 }}>Gauge 30 KES 580</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3 style={{ fontSize: 50 }}>Versatile</h3>
                <p style={{ fontSize: 20 }}>Gauge 28 KES 700</p>
                <p style={{ fontSize: 20 }}>Gauge 30 KES 580</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3 style={{ fontSize: 50 }}>Curved Tile</h3>
                <p style={{ fontSize: 20 }}>Gauge 28 KES 700</p>
                <p style={{ fontSize: 20 }}>Gauge 30 KES 580</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3 style={{ color: 'black', fontSize: 50 }}>Box Profile</h3>
                <p style={{ color: 'black', fontSize: 20 }}>Gauge 28 KES 600</p>
                <p style={{ color: 'black', fontSize: 20 }}>Gauge 30 KES 390</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3 style={{ fontSize: 50 }}>Stone Coated</h3>
                <p style={{ fontSize: 20 }}>1 piece KES 700</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3 style={{ color: 'black', fontSize: 50 }}>Aluzinc</h3>
                <p style={{ color: 'black', fontSize: 20 }}>Gauge 30 KES 250</p>
                <p style={{ color: 'black', fontSize: 20 }}>Gauge 32 KES 230</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
          <section id="two" className="tiles">
            <div className="inner">
              <header className="major">
                <h2>Floor Tiles</h2>
              </header>
              <p>
                Get customer wow experience by using our floor, bathroom and
                kitchen tiles. Value for your money ni guaranteed! Put your
                money where your mouth is.
              </p>
            </div>
            <article style={{ backgroundImage: `url(${pic07})` }}>
              <header className="major">
                <h3 style={{ color: 'black', fontSize: 50 }}>30 by 30</h3>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic08})` }}>
              <header className="major">
                <h3 style={{ color: 'black', fontSize: 50 }}>20 by 30</h3>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic09})` }}>
              <header className="major">
                <h3 style={{ color: 'white', fontSize: 50 }}>60 by 60</h3>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
          <section id="three">
            <div className="inner">
              <header className="major">
                <h2>Other Products</h2>
              </header>
              <p>
                We don't only offer floor and roofing solutions. Get other
                construction materials at the dial of a number. We have your
                problems close at heart.
              </p>
              <ul>Gypsum boards</ul>
              <ul>PVC ceilings</ul>
              <ul>MDF boards</ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
