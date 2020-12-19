import React, { useEffect, useState } from "react"
import Axios from 'axios'

import Work from './work'
import AboutMe from './about'

import GithubIcon from '../assets/icon-png/github.png';
import LinkedinIcon from '../assets/icon-png/linkedin.png';

const IndexPage = () => {

  const [userData, setUserData] = useState({
    avatar: '',
    loc: ''
  });

  const fetchProfile = () => {
    Axios.get('https://api.github.com/users/dalbirsrana')
    .then(res => {
        setUserData({
            avatar: res.data.avatar_url,
            loc: res.data.location
        })
        console.log(res)
    })
    .catch(err => console.log(err))
}


useEffect(() => {
  
  document.title = window.location.hostname + ": Portfolio";

  let isUnMount = false;
  if (!isUnMount) {
      fetchProfile();
  }
  return () => {
      isUnMount = true;
  }
}, []);


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

          <div className="user-intro">
            <div className="user-avatar">
                <img src={userData.avatar} alt="dalbir singh" />
            </div>                 

            <ul className="user-social">
                <li>
                    <a href="https://github.com/dalbirsrana">
                        <img src={GithubIcon} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dalbirsrana/">
                        <img src={LinkedinIcon} alt="Linkedin" />
                    </a>
                </li>
            </ul>
          </div>

            <h1 className="hero-greetings">{greetings()}, My name is Dalbir.</h1>
            {/* <h2 className="hero-intro">.</h2>  */}
            <h2 className="hero-intro">I am a <span>&lt;</span>FrontEnd <span>&#47;&gt;</span> <span>{"{"}</span>Developer<span>{"}"}</span> living in {userData.loc}, CA.</h2>

            <h1 className="hero-welcome">Welcome to my portfolio!</h1>
          </div>
        </section>

        <AboutMe />

        <Work />  

        <section className="section-hire">

          <h2>I am open for jobs as Web Application developer</h2>

          <h1>Get in touch!</h1>

          <ul>
            <li><a href="mailto:dalbirsrana@gmail.com">dalbirsrana@gmail.com</a></li>
            <li>+1.236.987.8514</li>
            <li><a href="https://www.linkedin.com/in/dalbirsrana/">linkedin.com/in/dalbirsrana/</a></li>
          </ul>

        </section>

      </div>
  )
}

export default IndexPage
