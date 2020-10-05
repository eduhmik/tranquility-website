import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import nairobi from '../assets/images/nairobi.jpg'
import migori from '../assets/images/migori.jpg'
import syokimau from '../assets/images/syokimau.jpg'
import membley from '../assets/images/membley.jpg'
import meru from '../assets/images/meru.jpg'
import nyeri from '../assets/images/nyeri.jpg'
import machakos from '../assets/images/machakos.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Don't miss out!</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Happy Clients</h2>
          </header>
          <p>
            “Capitalize on charm by continually captivating your customer.” ―
            Ryan Lilly
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="" className="image">
            <img src={nairobi} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Nairobi County</h3>
              </header>
              <p>
                Thank you for your purchase from Tranquility. Please let us know
                if we can do anything else for you.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={machakos} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Machakos County</h3>
              </header>
              <p>
                We at Tranquility roofing and construction supplies know you had
                many options to choose from but, we thank you for choosing us.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={nyeri} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Nyeri County</h3>
              </header>
              <p>
                We esteem the privelege of serving you. Because of loyal
                customers like you, the company name is growing so fast.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={syokimau} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Syokimau Area</h3>
              </header>
              <p>
                Your support means the world to us! Thank you for the business
                support
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={membley} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Membley Area</h3>
              </header>
              <p>Asante sana. You rock!</p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/" className="image">
            <img src={migori} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Migori County</h3>
              </header>
              <p>Tell a friend to tell a friend.</p>
            </div>
          </div>
        </section>
        <section>
          <Link to="" className="image">
            <img src={meru} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Meru County</h3>
              </header>
              <p>
                If you work for money, you'll never make it, but if you love
                what you're doing and you always put the customer first, success
                will be yours.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
