import { Table } from 'antd';
import React, { Component } from 'react';
import { Button, Menu, Icon } from 'antd';
import Model from './HomeFirstEdit.jsx'

const ButtonGroup = Button.Group;
const columns = [{
    title: '序号',
    dataIndex: 'key',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '标题',
    dataIndex: 'age',
}, {
    title: '图片设置',
    dataIndex: 'address',
},{
    title: '内容编号',
    dataIndex: 'age',
},{
    title: '状态',
    dataIndex: 'age',
},{
    title: '位置',
    dataIndex: 'age',
},{
    title: '上架时间',
    dataIndex: 'age',
},{
    title: '操作',
    dataIndex: 'age',
    render(){
        return(
    <div>
    <ButtonGroup>
        <Button type="primary" size="small">上架</Button>
        <Button type="danger" size="small">下架</Button>
    </ButtonGroup> 
        <Model ></Model>
    </div>
        )
    }
},];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Disabled User',
    age: 99,
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

 class BaseTable extends Component {
   constructor(props) {
     super(props)
   }
   state = {
    loading: false,
    iconLoading: false,
    StsteText:'您已经下架'
  }
    handleDown =() => {
        
       this.setState({ StsteText: 'success' })
    //this.setState({ loading: true });
  }
    render(){
            return(
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            )
        }
    }
    
export default BaseTable