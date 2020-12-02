import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {addlunch} from './actionCreators';
import {connect} from 'react-redux';
class Search3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '食物',
          };
      };
    
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      onFocus = ()=>{
        this.setState({value: '' });
      }
    render() {
        //console.log(this.props)
        return (
            <div>
                <SearchBar
                  value={this.state.value}
                  placeholder="Search"
                  onSubmit={(value) => this.props.dispatch(addlunch(value))}
                  onClear={this.clear}
                  onFocus={this.onFocus}
                  onBlur={() => this.props.props.history.push('/report')}
   p               onCancel={()=>this.props.props.history.push('/report')}
                  showCancelButton
                  onChange={this.onChange}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    lunchfoods:state.lunchfoods,
})
export default connect(mapStateToProps)(Search3)