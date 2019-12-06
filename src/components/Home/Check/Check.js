import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Cascader } from 'antd'
import { Drawer, Button, Radio } from 'antd';
import {Alert} from 'antd'
import { connect } from 'react-redux';

class Check extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      visible: false,
      placement: 'top'
    }
  }
 
  onChange = (value) => {
    console.log(value);

  }
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  onChange = e => {
    this.setState({
      placement: e.target.value
    })
  }
  render() {
    const RadioGroup = Radio.Group;
    const options = [
      {
        value: '城区',
        label: '城区',
        children: [
          {
            value: '海淀区',
            label: '海淀区',
            children: [
              {
                value: '苏家坨镇',
                label: '苏家坨镇'
              }
            ]
          }, {
            value: '西城区',
            label: '西城区',
          }, {
            value: '东城区',
            label: '东城区',
          }, {
            value: '朝阳区',
            label: '朝阳区',
          }, {
            value: '丰台区',
            label: '丰台区',
          }, {
            value: '石景山',
            label: '石景山',
          }
        ]
      },
      {
        value: '地铁',
        label: '地铁',
        children: [
          {
            value: '1号线',
            label: '1号线',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '2号线',
            label: '2号线',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '3号线',
            label: '3号线',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '4号线大兴线',
            label: '4号线大兴线',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '5号线',
            label: '5号线',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '6号线',
            label: '6号线',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          }
        ]
      }
    ]
    return (
      <div>
        <div>
          <RadioGroup
            style={{ marginRight: 8 }}
            defaultValue={this.state.placement}
            onChange={this.onChange}
          >
          </RadioGroup>
          <Button type='primary' onClick={this.showDrawer}>筛选</Button>
          <Drawer
            title='Basic Drawer'
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
              <Cascader options={options} onChange={onchange} placeholder='Please select'></Cascader>
          </Drawer>
        </div>
        {/* 渲染筛选到页面 */}
        { 
          this.props.list.length>0?
          this.props.list.map((item,index)=>{
            return(
              <div className='nav' key={index}>
              <div className="pic">
              <img src={item.pic} alt="" />
            </div>
            <div className="text">
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
             </div>
            )
          }):
          <div>
          <Alert message='没有满足条件!' type='error'></Alert>
        </div>
        }
      
      </div>
    )
  }
}
export default connect(
  (state) => {
    return {
    list:state
    }
  },
  (dispatch) => {
    return{

    }

  }
)(Check)
