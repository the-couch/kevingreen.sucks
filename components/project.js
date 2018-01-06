module.exports = ({ name, url, position, tools }) => (
  <div className='project'>
    <style jsx>{`
      .project {
        padding-bottom: 20px;
      }
      @media (min-width: 80em) {
        .project {
          padding-bottom: 0;
        }
      }
      `}</style>
    <h2 className='mx0 px0'><a href={url} target='_blank'>{name}</a></h2>
    <h4 className='mx0 px0'>{position}</h4>
    <p className='mx0 px0'>{tools}</p>
  </div>
)
