import { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import ReactGA from 'react-ga'
import Project from '../components/project'

import API from '../api/projects'

const initGA = () => {
  ReactGA.initialize('UA-96992953-1')
}
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      plantOne: false,
      plantTwo: false
    }
  }
  componentDidMount () {
    initGA()
    logPageView()
  }
  toggleOffice () {
    this.setState({
      plantOne: true,
      plantTwo: true
    })
  }
  audio (playing) {
    const audio = document.getElementById('Audio')
    playing ? audio.play() : audio.pause()
  }
  render () {
    const { data } = API
    console.info("%c We're using Next.js for this because we got bored", 'background: #021993; color: #fff')
    console.info("%c The code's up on our git: https://github.com/the-couch/couch-site", 'background: #021993; color: #fff')
    return (
      <Layout>
        <Header />
        <style jsx>{`
          .main {
            padding-top: 10px;
          }
          .about {
            border-bottom: 5px solid black;
            padding: 20px;
          }
          .about a {
            font-weight: 600;
            color: black;
          }
          .about p {
            padding: 2px 0;
          }
          .projects {
            padding: 20px;
          }
          @media (min-width: 80em) {
            .period {
              max-width: 22px;
            }
          }
          `}</style>
        <div>
          <div className='wrapper main'>
            <div className='about'>
              <p>My name is Kevin Green, I'm currently the Lead Engineer and Co-Founder at <a href="https://thecouch.nyc">The Couch</a> living and working in Brooklyn.</p>
              <p>Previously working for <a href="https://redantler.com">Red Antler</a>, <a href="https://swedenunlimited.com">Sweden Unlimited</a>, and <a href="https://barrelny.com">Barrel</a>.</p>
            </div>
            <div className='projects'>
              {API.data.map((project, i) => (
                <Project key={i} {...project} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
