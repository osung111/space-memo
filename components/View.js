import React, { Component } from 'react';
import './View.css'
import eraser from './eraser.png';
import waste from './waste.png';
import check from './check.png'
class View extends Component {

render(){
    const RealData = this.props.data[1]
  return(
    <div className={this.props.data? "view" : "image" }>
  { this.props.data ?

      <div className="littleboy">

            {this.props.change2  ?
              <div className="king2">
                  <div  className="check" onClick={(id2) =>this.props.write2(this.props.data[0])}>
                      <img src={check} Style="margin-top:3%;" height="80%" width="40%" />
                  </div>
                  <div Style="clear:both"></div>
                  <div className="descBody">

                      <textarea  onChange={ this.props.write1} />
                  </div>
              </div>
                      :

              <div className="king">


                <div className="side" onClick={(id)=>this.props.remove(this.props.data[0])}>
                    <img src={waste}  height="80%" width="40%" />
                  </div>

                 <div className="side" onClick={this.props.change}>
                        <img src={eraser}  height="80%" width="40%" />

                  </div>
                  <div Style="clear:both"></div>

                  <div className="sideD">
                      {this.props.data[1]}
                  </div>
              </div>

             }

    </div>


      :
    <h1>메모를 선택해주세요!</h1>

  }

  </div>
  )
}

}


export default View;
