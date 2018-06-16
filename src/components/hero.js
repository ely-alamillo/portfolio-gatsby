import React from 'react'
import image from '../img/hero.png'
import './hero.scss'

const Hero = () => (
  <section className="hero has-text-centered has-background-white">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
              Ely Alamillo
            </h1>
            <h2 className="subtitle is-size-4-desktop">
              I code beautiful sites and I love what I do.
            </h2>
            <img src="" alt="logo" />
          </div>
        </div>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
        <img className="is-bottom" src={image} alt="Hero Image" />
      </div>
    </div>
  </section>
)

export default Hero
