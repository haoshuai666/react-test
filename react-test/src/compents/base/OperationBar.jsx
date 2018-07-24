import React, { Component } from 'react';

import { Select,Input,Button } from 'antd';

const Option = Select.Option;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function formSearch() {
  console.log('搜索');
}
class OperationBar extends Component{
    constructor(props) {
        super(props);
    }
//     handleChange(value) {
//   console.log(`selected ${value}`);
// }


    render(){
        return(
    <div>
        <span>状态</span>
        <Select defaultValue="lucy" size="small" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled">Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Input size="small" placeholder="small size"  style={{ width: 240,marginLeft:30 }}  />
        <Button type="primary" size="small" onClick={formSearch}>搜索</Button>
        <Button size="small">新建</Button>
        <Button type="danger" size="small">删除</Button>
    
  </div>
        )
    }
}



export default OperationBar