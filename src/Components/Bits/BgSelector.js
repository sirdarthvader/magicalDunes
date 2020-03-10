import React, { Component } from 'react'

class BgSelector extends Component {
  render() {
    return (
      <div className='bg-buttons'>
        <div className="box">
          <div className="btn btn-primary mb-2">Snow</div>
          <div className="btn btn-primary mb-2">Star</div>
          <div className="btn btn-primary mb-2">Bubble</div>
        </div>
      </div>
    )
  }
}

export default BgSelector;