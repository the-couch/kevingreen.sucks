module.exports = ({ name, url, position, tools }) => (
  <div className='ppl'>
    <style jsx>{`
      .ppl {
        width: 50%;
        padding-bottom: 20px;
      }
      @media (min-width: 80em) {
        .ppl {
          padding-bottom: 0;
        }
      }
      `}</style>
    <h2><a href={url} target='_blank'>{name}</a></h2>
    <h4>{position}</h4>
    <p>{tools}</p>
  </div>
)
