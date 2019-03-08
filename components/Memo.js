import React, { Component } from 'react';
import './Memo.css'
import LinesEllipsis from 'react-lines-ellipsis'



class Memo extends Component {



  render(){

    return(
      <div className="memo" onClick={(desc,id) =>{this.props.ViewMemo(this.props.desc,this.props.id)}}>
        <div className="id">
          No.{this.props.id}

        </div>
        <div className="desc">

          <LinesEllipsis
                text=  {this.props.desc}
                maxLine='4'
                ellipsis=' ...'
                trimRight
                basedOn='letters'
                />
        </div>
      </div>
    )
  }


}


export default Memo;
