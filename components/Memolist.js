import React, { Component } from 'react';
import Memo from './Memo';
import './Memolist.css'
import pen from "./pen.png";


class Memolist extends Component{





  render(){
    const memos = this.props


    const _item = memos.item.map((memo,index) => {
      return <Memo id={memo.id} desc={memo.desc} key={index} ViewMemo={this.props.ViewMemo}/>
    })

    return (
      <div className="board">


          <div className="writeButton" onClick={this.props.change}>
            <img src={pen}  height="80%" width="40%" />
          </div>

        <div className="memolist2">
            {_item}
        </div>

    </div>
    )
  }


}


export default Memolist;
