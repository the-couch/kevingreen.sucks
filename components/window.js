import { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const height = window.innerHeight
    const width = window.innerWidth
    const top = (height / 2 * Math.random())
    const left = (width / 1.4 * Math.random())
    const zIndex = 100000 + this.props.id
    return (
      <div className='window' onClick={() => this.props.closeImage(this.props.id)}>
        <style jsx>{`
          .window {
            position: fixed;
            top: ${top}px;
            left: ${left}px;
            z-index: ${zIndex};
          }
        `}</style>
        <img src={this.props.image} />
      </div>
    )
  }
}