import { Component } from 'react'
import Head from 'next/head'
import GlobalStyle from '../styles/global'

const colors = [
  {
    background: 'rgba(255,255,255,1)'
  }
]

module.exports = class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      background: 'rgba(255,255,255,1)',
      color: 'rgba(0,0,0,1)'
    }
  }
  render () {
    return (
      <div>
        <Head>
          <title>Kevin Green - Developer</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='description' content="Spaghetti" />
          <meta name='keywords' content='digital studio, development, graphic design, branding, web development, app development, start ups' />
          <meta name='og:url' content='https://kevingreen.sucks/' />
          <meta name='fragment' content='!' />
          <meta http-equiv='Accept-CH' content='DPR, Width, Viewport-Width' />
          <meta name='og:image' content='/static/spaghetti-big.jpg' />
          <meta property='og:locale' content='en_US' />
          <link rel='shortcut icon' href='/static/favicon.gif' />
          <meta property='og:site_name' content='Kevin Green - Developer' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Kevin Green - Developer' />
          <meta name='twitter:description' content="Spaghetti" />
          <meta name='twitter:url' content='https://kevingreen.sucks/' />
          <meta name='twitter:image:src' content='/static/spaghetti-big.jpg' />
        </Head>
        <GlobalStyle />
        <style jsx global>{`
          body, html {
            background-color: ${this.state.background}
          }
          .header {
            border-bottom: 5px solid black;
            padding: 18px 20px 16px;
            position: relative;
          }
          .header h1 {
            padding: 0;
            margin: 0;
          }
          .social__block {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .social {
            border-left: 5px solid black;
            height: 100%;
            display: flex;
            padding: 14px;
            justify-content: center;
            align-items: center;
          }
          .social img {
            width: 30px;
          }
          .spaghetti {
            display: none;
          }
          @media (min-width: 45rem) and (min-height: 800px) {
            .header {
              position: fixed;
              width: 140px;
              height: 100vh;
              border-bottom: none;
              border: 5px solid black;
              background-color: white;
            }
            .header h1 {
              position: absolute;
              top: 260px;
              left: 0px;
              transform: rotate(-90deg);
              width: 100%;
            }
            .social__block {
              height: 100px;
              width: 100%;
              bottom: 200px;
              top: auto;
              border-top: 5px solid black;
              border-bottom: 5px solid black;
            }
            .social:first-child {
              border-left: 0;
            }
            .spaghetti {
              display: block;
              position: absolute;
              bottom: 50px;
            }
          }
          `}</style>
        <div className='header rel'>
          <h1 className='caps'>Kevin&nbsp;Green</h1>
          <div className='social__block'>
            <div className='social'>
              <a href="https://medium.com/@iamkevingreen" target="_blank"><img src='static/medium.png' /></a>
            </div>
            <div className='social'>
              <a href="https://github.com/iamkevingreen" target="_blank"><img src='static/github.png' /></a>
            </div>
          </div>
          <div className='spaghetti'>
            <img src='static/spaghetti.png' />
          </div>
        </div>
      </div>
    )
  }
}
