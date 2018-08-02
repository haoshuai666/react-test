import { Tabs } from 'antd';
import React, { Component } from 'react';
import BaseTable from './BaseTable'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class homeTab extends Component{
    constructor(props) {
     super(props)
   }
    render(){
      return(
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              <BaseTable>11</BaseTable>
            </TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      )
  }
}
