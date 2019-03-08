import React, { Component } from 'react';
import './Write.css'
import save from './save.png'
//

class Write extends Component{




  render(){

      return (
        <div className="Write">

              <div className="WriteOk" onClick={this.props.write2 }>
                  <img src={save} Style="margin-top:3%;" height="80%" width="40%" />
              </div>

          <div Style="clear:both"></div>
          <div className="descBody1">
            <textarea type="text" onChange={this.props.write1} />

          </div>
        </div>
        )
  }
}




export default Write ;
