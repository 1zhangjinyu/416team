import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import React, { Component } from 'react'

const data = [];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    // console.log(files, type, index);
    // console.log(files[0].url)
    fetch('https://www.hmyyz.top:9999/imgs',{
      method:'POST',
      body:files[0].url,
      mode:'cors',
    })
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }

  render() {
    const { files } = this.state;
    return (
      
      <WingBlank style={{marginLeft:'-5px',marginTop:'-10px',height:'450px',width:'450px'}}>
        {/* {console.log(files[0].url)} */}
        <SegmentedControl
          selectedIndex={0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />

      </WingBlank>
    );
  }
}

export default ImagePickerExample