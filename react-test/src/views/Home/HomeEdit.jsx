import { Button, Modal, Radio,  Input, TimePicker, DatePicker} from 'antd';
import React, { Component } from 'react';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const RadioGroup = Radio.Group;
class Model extends Component {
  state = { 
    visible: false 
  }

  showModal = () => {
    this.setState({
      visible: true,
      
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
 onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>编辑</Button>
        <Modal
          title="Basic Modal"
          width="50%"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <p><span>内容ID</span><Input style={{width:240}} placeholder="输入" /></p>
        <p><span>标题</span><Input style={{width:240}} placeholder="输入" /></p>
        <p><span>内容</span><Input style={{width:240}} placeholder="输入" /></p>
        <p><span>类型</span><Input style={{width:240}} placeholder="输入" /></p>
        <p><span>预约上架时间</span>
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        <TimePicker value={this.state.value} onChange={this.onChangeTime} />;</p>
        <p><span>选择帧</span> 
        <RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
          <Radio value={1}>第一帧</Radio>
          <Radio value={2}>第二帧</Radio>
          <Radio value={3}>第三帧</Radio>
          <Radio value={4}>第四帧</Radio>
      </RadioGroup></p>
        </Modal>
      </div>
    );
  }
}

export default Model