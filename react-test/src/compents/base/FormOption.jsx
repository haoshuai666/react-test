import React, { Component } from 'react';
import { Button, Menu, Icon } from 'antd';

class FormOption extends Component{
    constructor(props) {
        super(props)
        this.handleDown = this.handleDown.bind(this);
    }
    handleDown(){
        console.log('下架操作');
    }
    render(){
        return(
    <div>
        <Button type="primary" size="small">上架</Button>
        <Button type="danger" size="small" onClick={this.handleDown}>下架</Button>
    </div>
        )
    }
}

export default FormOption

