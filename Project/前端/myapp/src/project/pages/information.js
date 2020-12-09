import { Picker, List, WhiteSpace } from 'antd-mobile';
import { InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {sub} from '../actionCreators'
import '../css/style.css'
import { district, provinceLite } from 'antd-mobile-demo-data';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
);

const birth = [
  [
    {label: '1980',value: '1980'},
    {label: '1981',value: '1981'},
    {label: '1982',value: '1982'},
    {label: '1983',value: '1983'},
    {label: '1984',value: '1984'},
    {label: '1985',value: '1985'},
    {label: '1986',value: '1986'},
    {label: '1987',value: '1987'},
    {label: '1988',value: '1988'},
    {label: '1989',value: '1989'},
    {label: '1990',value: '1990'},
    {label: '1991',value: '1991'},
    {label: '1992',value: '1992'},
    {label: '1993',value: '1993'},
    {label: '1994',value: '1994'},
    {label: '1995',value: '1995'},
    {label: '1996',value: '1996'},
    {label: '1997',value: '1997'},
    {label: '1998',value: '1998'},
    {label: '1999',value: '1999'},
    {label: '2000',value: '2000'},
    {label: '2001',value: '2001'},
    {label: '2002',value: '2002'},
    {label: '2003',value: '2003'},
    {label: '2004',value: '2004'},
    {label: '2005',value: '2005'},
    {label: '2006',value: '2006'},
    {label: '2007',value: '2007'},
    {label: '2008',value: '2008'},
    {label: '2009',value: '2009'},
    {label: '2010',value: '2010'},
    {label: '2011',value: '2011'},
    {label: '2012',value: '2012'},
    {label: '2013',value: '2013'},
    {label: '2014',value: '2014'},
    {label: '2015',value: '2015'},
    {label: '2016',value: '2016'},
    {label: '2017',value: '2017'},
    {label: '2018',value: '2018'},
    {label: '2019',value: '2019'},
    {label: '2020',value: '2020'},
  ],
  [
    {label: '1月',value: '1月'},
    {label: '2月',value: '2月'},
    {label: '3月',value: '3月'},
    {label: '4月',value: '4月'},
    {label: '5月',value: '5月'},
    {label: '6月',value: '6月'},
    {label: '7月',value: '7月'},
    {label: '8月',value: '8月'},
    {label: '9月',value: '9月'},
    {label: '10月',value: '10月'},
    {label: '11月',value: '11月'},
    {label: '12月',value: '12月'},
    
  ],
];
const sex = [
  {
    label:
    (<div>
      <span>男</span>
    </div>),
    value: '男',
  },
  {
    label:
    (<div>
      
      <span>女</span>
    </div>),
    value: '女',
  },
  
];
const goal = [
    {
      label:
      (<div>
        <span>增重</span>
      </div>),
      value: '增重',
    },
    {
      label:
      (<div>
        
        <span>减重</span>
      </div>),
      value: '减重',
    },
    {
      label:
      (<div>
        
        <span>保持</span>
      </div>),
      value: '保持',
    },
  ];
class Test extends React.Component {
  state = {
    type: 'money',
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['1990', '1月'],
    visible: false,
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
  onPickerChange = (val) => {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach((i) => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach((j) => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  };
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
    return treeChildren.map(v => v.label).join(',');
  }

  onChangeGoal = (goal) => {
    this.setState({
      goalValue: goal,
    });
  };
  onChangeSex = (sex) => {
    this.setState({
      sexValue: sex,
    });
  };
  render() {
    const { getFieldProps } = this.props.form;
    const { type } = this.state;
    console.log(this.props.infor)
    return (<div>
        <div className='foodrank-header'>基本信息</div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">
      <Picker
          data={sex}
          value={this.state.sexValue}
          cols={1}
          onChange={this.onChangeSex}
        >
          <List.Item arrow="horizontal">性别</List.Item>
        </Picker>
        <Picker
          data={birth}
          title="选择出生年月"
          cascade={false}
          value={this.state.sValue}
          onChange={v => this.setState({ sValue: v })}
          onOk={v => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal">出生年月</List.Item>
        </Picker>
        <InputItem
            type={type}
            placeholder="请输入"
            clear
            onChange={(v) => { console.log('onChange', v); }}
            onBlur={(v) => { console.log('onBlur', v); }}
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >身高(m)</InputItem>
        <InputItem
            type={type}
            placeholder="请输入"
            clear
            onChange={(v) => { console.log('onChange', v); }}
            onBlur={(v) => { console.log('onBlur', v); }}
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >体重(kg)</InputItem>
        <InputItem
            type={type}
            placeholder="请输入"
            clear
            onChange={(v) => { console.log('onChange', v); }}
            onBlur={(v) => { console.log('onBlur', v); }}
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >目标体重</InputItem>
        <Picker
          data={goal}
          value={this.props.infor.type?this.props.infor.type:this.state.goalValue}
          cols={1}
          onChange={this.onChangeGoal}
        >
          <List.Item arrow="horizontal">体重管理计划</List.Item>
        </Picker>
        
      </List>
      <button id="button" onClick={()=>{
                    let data = {sex:this.state.inpSex,weight:this.state.inpWeight,goalweight:this.state.inpNew,height:this.state.inpHeight,type:this.state.inpType,age:this.state.inpAge};
                    this.props.history.push('/home');
                    return this.props.dispatch(sub(data));
                }}>提交</button>
    </div>);
  }
}

const TestWrapper = createForm()(Test);
//export default TestWrapper;
// ReactDOM.render(<TestWrapper />, mountNode);



const mapStateToProps = (state) =>({
    infor:state.inforlist
})
export default connect(mapStateToProps)(TestWrapper)