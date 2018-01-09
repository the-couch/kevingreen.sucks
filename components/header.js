import { Component } from 'react'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import Window from './window'

const colors = [
  {
    background: 'rgba(255,255,255,1)'
  }
]

const images = [
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_1.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_2.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_3.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_4.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_5.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_7.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_8.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_9.gif'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_1.jpg'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_2.jpg'
  },
  {
    image: 'https://s3.amazonaws.com/couchnyc/spaghetti_1.png'
  }
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let spaghettiInterval

module.exports = class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      background: 'rgba(255,255,255,1)',
      color: 'rgba(0,0,0,1)',
      spaghetti: false,
      open: 0,
      images: [],
      closed: 0,
      start: 1
    }
    this.renderSpaghetti = this.renderSpaghetti.bind(this)
    this.closeImage = this.closeImage.bind(this)
  }
  startSpaghetti () {
    var intervalId = setInterval(this.renderSpaghetti, 1000)
    this.setState({intervalId: intervalId})
  }
  renderSpaghetti () {
    this.setState({
      images: [...this.state.images, {key: this.state.start, image: images[getRandomInt(11)].image}],
      start: this.state.start + 1,
      open: this.state.open + 1
    })
  }
  closeImage (e) {
    let currentImages = this.state.images
    currentImages.splice(e, 1)
    this.setState({
      images: currentImages,
      open: this.state.open - 1,
      closed: this.state.closed + 1
    })
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
            .totalOpen {
              position: fixed;
              top: 80px;
              left: 80px;
              z-index: 10000000000;
            }
            .totalClosed {
              position: fixed;
              top: 80px;
              right: 80px;
              z-index: 10000000000;
            }
          }
          `}</style>

        <div className='totalOpen'>
          {this.state.images.length >= 1 && (
            <h1>open: {this.state.open}</h1>
          )}
        </div>

        <div className='totalClosed'>
          {this.state.images.length >= 1 && (
            <h1>closed: {this.state.closed}</h1>
          )}
        </div>
        <div className='images'>
          {this.state.images.map((image, i) => {
            return <Window key={image.key} id={i} image={image.image} closeImage={(e) => this.closeImage(e)} />
          })}
        </div>
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
          <div className='spaghetti' onClick={() => this.startSpaghetti()}>
            <img src='static/spaghetti.png' />
          </div>
        </div>
      </div>
    )
  }
}
