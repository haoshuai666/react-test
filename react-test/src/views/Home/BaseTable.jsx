import { Table,Button,Select,Input } from 'antd';
import React, { Component } from 'react';
import Model from './HomeEdit'
//import FormOption from './FormOption.jsx'
const columns = [{
    title: '序号',
    dataIndex: 'key',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '标题',
    dataIndex: 'name',
}, {
    title: '图片设置',
    dataIndex: 'picConfig',
},{
    title: '内容编号',
    dataIndex: 'contentNum',
},{
    title: '状态',
    dataIndex: 'state',
},{
    title: '位置',
    dataIndex: 'adress',
},{
    title: '上架时间',
    dataIndex: 'uptime',
},{		
    title: '操作',
    dataIndex: 'option',
    render(){
        return(
            <div>
            <Button type="primary" size="small">上架</Button>
            <Button type="danger" size="small" onClick={handleDown}>下架</Button>
            <Model></Model>
            </div>
        )
    }
},];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    contentNum:8732,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    contentNum:4122,
  
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    contentNum:2232,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    contentNum:4532,
    address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
const Option = Select.Option;

function handleDown() {
  console.log("6666");
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
class BaseTable extends Component {
   constructor(props) {
     super(props)
   }
  
    render(){
            return(
                <div>
                  <div>
                    <label> 状态</label> 
                    <Select defaultValue="全部" size="small" style={{ width: 120 ,marginLeft:10,marginRight:20}} onChange={handleChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled">Disabled</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Input style={{width:240}} placeholder="输入标题，内容编号，类型" />
                    <Button type="primary" >搜索</Button>
                  <Button  onClick={handleDown}>新建</Button>
                  <Button type="danger" onClick={handleDown}>删除</Button>
                  </div>
                  <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </div>
               
            )
        }
    }
    
export default BaseTable