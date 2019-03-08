import React, { Component } from 'react';

import './App.css';
import Write from './components/Write';
import Memolist from './components/Memolist';
import View from './components/View';


class App extends Component {

   id =2;



  state={
    memo:[
      {id:"0",
        desc:"메모처음"
      },
      {id:"1",
        desc:"메모두번"
      },

    ],



    memo_input:'',

    mode:false,
    view_data:false,
    changeMode:false,


  }

_change =() =>{
  this.setState({
    changeMode:true
  })
}

  _Write_memo1 = (w)=>{

      this.setState({
        memo_input:w.target.value
      })
  }

  _Update =(id2) =>{
    // if(this.state.memo_input ==''){
    //   this._Remove(id2);
    // }
    console.log(this.state.memo_input)
    var memo2 =this.state.memo
      for(var i = 0  ; i<memo2.length;i++){
          if(id2 == memo2[i].id){
            memo2[i].desc = this.state.memo_input;
            this.setState({
              memo:memo2,
              changeMode:false,
              view_data:false
            })
          }
      }
  }





  _Write_memo2 = ()=>{
      const input = this.state.memo_input
     const memo2 = this.state.memo
    this.setState({
    memo_input:'',
    memo:memo2.concat({
      id:this.id++,
      desc:input
    }
  ),
    view_data:false,
    mode:false
    })

  }

  _View_memo = (desc,id) =>{
    this.setState({
      mode:false,
      view_data:[id,desc],
      changeMode:false

    })
  }

_Remove = (id)=>{
  this.setState({
    memo: this.state.memo.filter(memo => memo.id !== id),
    view_data:''
  })
}


_W_mode = () =>{
  this.setState({
    mode:true
  });
};



  render() {
     console.log(this.state.view_data)


    return (
      <div className="App">

        <div className="miniApp">

             <Memolist item = {this.state.memo} change={this._W_mode} ViewMemo={this._View_memo} />


            { this.state.mode? <Write   write1={this._Write_memo1} write2={this._Write_memo2}/> : <View

            write1={this._Write_memo1} write2={this._Update} mode={this.state.mode}
            change={this._change} change2={this.state.changeMode}
             remove={this._Remove} data={this.state.view_data}/>}


          </div>







    </div>
    );
  }
}

export default App;
