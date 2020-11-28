import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'
import {comparefoods} from './actionCreators';
import {connect} from 'react-redux';
class Search1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '食物',
    };
    
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({value: '' });
  };
  onFocus = ()=>{
    this.setState({value: '' });
  }
  //食物对比页搜索
//   comparefoods = (data)=>{
//     return (dispatch)=>{
//         fetch('https://www.liucl.xyz:3745/compare',{
//             method:'POST',
//             body:JSON.stringify('123'),
//             mode:'cors',
//         })
//         .then(function(res){return res.json()})
//         .then(function(res){
//             return dispatch({
//                 type:'RANK',
//                 comparefoods:res,
//             })
//         });
//     }
// }

  render() {
    return (<div>
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={(value)=>this.props.dispatch(comparefoods(value))}
        onClear={this.clear}
        onFocus={this.onFocus}
        onBlur={() => this.props.history.push('/home/com')}
        onCancel={()=>this.props.history.push('/home/com')}
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}
const mapStateToProps = (state) =>({
  comparefoods:state.comparefoods.comparefoods
})
export default connect(mapStateToProps)(Search1)
