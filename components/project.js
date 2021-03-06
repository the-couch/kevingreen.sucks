
module.exports = ({ name, url, position, tools, image, colorChange, agency, agencyUrl, help, withLink }) => (
  <div className='project'>
    <style jsx>{`
      .project {
        padding: 20px;
        overflow: hidden;
      }
      @media (min-width: 80em) {
        .project {
          padding-bottom: 0;
        }
      }
      .project__image {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0;
        user-select: none;
        visibility: hidden;
      }
      .project__image img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        object-fit: cover;
        width: 100vw;
        height: 100vh;
      }
      .project__details {
        transition: all 0.25s ease-in-out;
      }
      .project__details:hover {
        position: relative;
        z-index: 10;
      }
      .project__details:hover + .project__image {
        opacity: 0.2;
        visibility: visible;
        width: 100vw;
        height: 100vh;
      }

      .project__details h2 a,
      .project__details h4,
      .project__details p {
        transition: all 0.25s ease-in-out;
      }
      .project__details .small a {
        color: currentColor;
        font-size: 0.8rem;
      }
      .project__details .small {
        font-size: 0.8rem;
      }
      .project__details:hover h2 a,
      .project__details:hover h4,
      .project__details:hover p {
        position: relative;
        z-index: 10;
        color: ${colorChange};
      }

      @media (min-width: 55rem) and (min-height: 640px) {
        .project {
          padding-right: 4rem;
          padding-left: 4rem;
        }
      }
      `}</style>
    <div className='project__details'>
      <h2 className='mx0 px0'><a href={url} target='_blank'>{name}</a></h2>
      <h4 className='mx0 px0'>{position}</h4>
      <p className='mx0 px0'>{tools}<br /><i className='small'>While at <a href={agencyUrl} target='_blank'>{agency}</a>{help && (<span> with <a href={withLink} target='_blank'>{help}</a></span>)}</i></p>
    </div>
    {image && (
      <div className='project__image'>
        <div style={{backgroundColor: colorChange}} />
      </div>
    )}
  </div>
)
