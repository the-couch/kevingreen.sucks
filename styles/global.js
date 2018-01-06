module.exports = () => (
  <div>
    <style global jsx>{`
      @font-face {
      	font-family: 'Dia';
      	src: url('https://s3.amazonaws.com/thecouch/Dia-Regular.woff') format('woff');
      	font-weight: 400;
      	font-style: normal;
      }

      @font-face {
      	font-family: 'Dia';
      	src: url('https://s3.amazonaws.com/thecouch/Dia-Bold.woff') format('woff');
      	font-weight: 600;
      }
      @font-face {
      	font-family: 'Dia';
      	src: url('https://s3.amazonaws.com/thecouch/Dia-Black.woff') format('woff');
      	font-weight: 800;
      }

      * {
        box-sizing: border-box;
      }
      body, html {
        font-family: 'Dia', monospace;
        padding: 0;
        margin: 0;
      }
      .border {
        position: fixed;
        z-index: 0;
        width: 100%;
        height: 100%;
        border: 5px solid black;
        left: 0;
        top: 0;
      }
      .layout {
        position: relative;
        z-index: 4;
      }
      h1 {
        font-family: 'Dia', sans-serif;
        font-weight: 800;
        font-size: 32px;
        line-height: 1;
        margin: 14px 0 28px;
      }
      h2, h2 a {
        color: black;
        font-size: 24px;
        font-family: 'Dia', sans-serif;
        font-weight: 800;
      }
      @media (min-width: 45em) {
        h1 {
          font-size: 54px;
          margin: 1rem 0 1.8rem;
          line-height: 1;
        }
      }
      @media (min-width: 70em) {
        h1 {
          margin: 2rem 0 2.6rem;
          font-size: 5vw;
          line-height: .9;
        }
      }
      .ar {
        text-align: right;
      }
      .fit-a {
        top: 0; left: 0; bottom: 0; right: 0;
      }
      .fw {
        flex-wrap: wrap;
      }
      fill-x {
        width: 100%;
      }
      fill-a {
        height: 100%;
        width: 100%;
      }
      .px2 {
        padding: 2rem;
      }
      .pt2 {
        padding-top: 2rem;
      }
      .px1 {
        padding: 1rem;
      }
      .px0 {
        padding: 0;
      }
      .mx0 {
        margin: 0;
      }
      .abs {
        position: absolute;
      }
      .f {
        display: flex;
      }
      .caps {
        text-transform: uppercase;
      }
      .jce {
        justify-content: flex-end;
      }
      .jcs {
        justify-content: flex-start;
      }
      .jcc {
        justify-content: center;
      }
      .aie {
        align-items: flex-end;
      }
      .aic {
        align-items: center;
      }
      .mha {
        margin: 0 auto;
      }
      svg {
        width: calc(100vw - 4rem);
        height: calc((100vw - 4rem) / 3.2);
      }
      .z1 {
        z-index: 10;
      }
      .wrapper {
        max-width: 950px;
      }
      @media (min-width: 70em) {
        .wrapper {
          max-width: 68vw;
        }
      }
      a {
        text-decoration: none;
        transition: all .25s;
      }
      a:hover {

      }
      p, a {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.15;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 1px 0;
      }

      p.small a, p.small {
        font-size: 13px;
      }
      @media (min-width: 30em) {
        p.small, p.small a {
          font-size: 18px;
        }
      }
      `}</style>
  </div>
)
