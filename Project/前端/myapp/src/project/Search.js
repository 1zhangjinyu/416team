import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'
class Search extends React.Component {
  state = {
    value: '食物',
  };
 
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  constructor(props) {
    super(props);
    
  }
  render() {
    return (<div>
      
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={()=>this.props.history.push('/')}
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}

export default Search;