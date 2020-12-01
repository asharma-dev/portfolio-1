import React from "react"
import Work from './work'

import { ReactComponent as ReactIcon } from './../assets/icon-svg/006-react.svg'
import { ReactComponent as MysqlIcon } from './../assets/icon-svg/021-mysql.svg'
import { ReactComponent as SassIcon } from './../assets/icon-svg/026-sass.svg'
import { ReactComponent as JavascriptIcon } from './../assets/icon-svg/029-javascript.svg'
import { ReactComponent as HtmlIcon } from './../assets/icon-svg/030-html-5.svg'
import { ReactComponent as CssIcon } from './../assets/icon-svg/031-css.svg'
import { ReactComponent as NodeIcon } from './../assets/icon-svg/032-nodejs.svg'
import { ReactComponent as PhpIcon } from './../assets/icon-svg/027-php.svg'
import { ReactComponent as WordpresIcon } from './../assets/icon-svg/wordpress.svg'


const IndexPage = () => {

  const greetings = () => {
    let d = new Date();
    let time = d.getHours();
    if (time < 4) return ("Hi!")
    if (time > 4 && time < 12) return ("Good Morning!")
    if (time > 12 && time < 17) return ("Good Afternoon!")
    if (time > 17) return ("Good Evening!")
  }

  return (
      <div className="home-page">
        <section className="section-hero">
          <div className="hero-text">
            <h1 className="hero-greetings">{greetings()}</h1>
            <h2 className="hero-intro">I'm Dalbir, <span>&lt;</span>front-end <span>&#47;&gt;</span> web developer</h2>

            <h1 className="hero-welcome">Welcome to my portfolio!</h1>
          </div>
        </section>

        <section className="section-expertise">
          <h1 className="content-heading">My Expertise</h1>
          <div className="expertise-icons">
            <ul>
              <li>
                <WordpresIcon /><p>Wordpress</p>
              </li>
              <li>
                <JavascriptIcon /><p>JavaScript</p>
              </li>
              <li>
                <ReactIcon />
                <p>ReactJS</p>
              </li>
              <li>
                <HtmlIcon /><p>HTML5</p>
              </li>
              <li>
                <CssIcon /><p>CSS3</p>
              </li>
              <li>
                <SassIcon /><p>SASS</p>
              </li>
              <li>
                <PhpIcon /><p>PHP</p>
              </li>
              <li>
                <NodeIcon /><p>NodeJS</p>
              </li>
              <li>
                <MysqlIcon /><p>MySQL</p>
              </li>
            </ul>
          </div>

          <p className="icons-disclaimer">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>

        </section>

        <Work />        

      </div>
  )
}

export default IndexPage
