import { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import ReactGA from 'react-ga'
import Project from '../components/project'

import API from '../api/projects'

const initGA = () => {
  ReactGA.initialize('UA-112036702-1')
}
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeQuote: 3
    }
  }
  componentDidMount () {
    initGA()
    logPageView()
  }
  render () {
    console.info("%c Co-Founder of The Couch: https://thecouch.nyc", 'background: #021993; color: #fff')
    return (
      <Layout>
        <Header />
        <style jsx>{`
          .main {
            padding-top: 10px;
          }
          .about__text {
            border-bottom: 5px solid black;
            padding: 20px;
          }
          .side__hustles {
            margin-top: 3rem;
            border-top: 5px solid black;
          }
          .side__hustles .container {
            padding: 20px;
          }
          .side__hustles h2 {
            margin-bottom: 4px;
            padding-bottom: 0px;
          }
          .side__hustles p {
            margin-top: 0;
          }
          .project__details {
            transition: color 0.4s ease-in-out;
          }
          .side__hustles a {
            transition: color 0.25s ease-in-out;
          }
          .side__hustles a:hover {
            color: red;
          }
          .about__link a {
            background: black;
            color: white;
            display: block;
            width: 100%;
            padding: 10px;
            font-weight: 600;
            text-align: center;
            padding: 18px 0 20px;

          }
          .about__text a {
            font-weight: 600;
            color: black;
          }
          .about p {
            padding: 2px 0;
          }
          .projects {
            padding-bottom: 50px;
          }
          .quotes {
            display: none;
          }
          @media (min-width: 80em) {
            .period {
              max-width: 22px;
            }
          }
          @media (min-width: 45rem) and (min-height: 640px) {
            .projects {
              margin-top: 1rem;
              margin-left: 140px;
            }
            .about {
              margin-left: 140px;
            }
          }
          @media (min-width: 55rem) and (min-height: 640px) {
            .projects {
              margin-left: 120px;
              margin-right: 280px;
            }

            .side__hustles .container {
              padding: 2rem 4rem 0;
            }
            .about {
              position: fixed;
              margin-left: 0px;
              bottom: 0;
              max-height: 400px;
              width: 300px;
              right: 0;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: bottom;
              flex-wrap: wrap;
              border-top: 5px solid black;
              border-left: 5px solid black;
              background: white;
              z-index: 5;
              border-right: 5px solid black;
            }
            .about > div {
              width: 100%;
            }
            .quotes {
              position: fixed;
              right: 0;
              width: 300px;
              background-color: white;
              top: 0;
              height: calc(100vh - 240px);
              border-left: 5px solid black;
              border-right: 5px solid black;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
            }
            .quotes__single {
              border-bottom: 5px solid black;
              padding: 14px;
              width: 100%;
              height: 2px;
              text-align: center;
              cursor: pointer;
              overflow: hidden;
            }
            .quotes__single p {
              font-weight: 600;
              font-size: 21px;
            }
            .quotes__single.active {
              height: auto;
            }
          }
          `}</style>
        <div>
          <div className='wrapper main'>
            <div className='about'>
              <div className='about__text'>
                <p>My name is Kevin Green, I'm currently the Lead Engineer and Co-Founder at <a href="https://thecouch.nyc">The Couch</a> living and working in Brooklyn.</p>
                <p>Previously working for <a href="https://redantler.com">Red Antler</a>, <a href="https://swedenunlimited.com">Sweden Unlimited</a>, and <a href="https://barrelny.com">Barrel</a>.</p>
              </div>
              <div className='about__link'>
                <a className='cw caps' href="mailto:kevin@ctrlaltdel.world">Write me a letter</a>
              </div>
            </div>
            <div className='quotes'>
              {API.quotes.map((quote, i) => {
                return (
                  <div onMouseOver={() => this.setState({activeQuote: i})} className={`quotes__single ${i === this.state.activeQuote ? 'active' : null}`} key={i}><p>{quote.quote}</p></div>
                )
              })}
            </div>
            <div className='projects'>
              {API.data.map((project, i) => (
                <Project key={i} {...project} />
              ))}
              <div className='side__hustles'>
                <div className='container'>
                  <h3>Side Hustles</h3>
                  {API.sideHustles.map((project, i) => (
                    <div>
                      <h2><a href={project.url} target='_blank'>{project.name}</a></h2>
                      <p>{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
