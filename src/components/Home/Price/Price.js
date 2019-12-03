import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Cascader } from 'antd'
import { Drawer, Button, Radio } from 'antd';
export default class Price extends Component {
  constructor() {
    super();
    this.state = {
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

  // 排序点击事件
  // low=()=>{
  //   this.setState({
  //     list:res.data.list
  //   },function(){
  //     list.sort((a,b)=>{
  //       return a-b
  //     })
  //   })
  // }


  render() {

    const RadioGroup = Radio.Group;
    const options = [
      {
        value: '总价',
        label: '总价',
        children: [
          {
            value: '不限',
            label: '不限',
            children: [
              {
                value: '苏家坨镇',
                label: '苏家坨镇'
              }
            ]
          }, {
            value: '100万以下',
            label: '100万以下',
          }, {
            value: '100-150万',
            label: '100-150万',
          }, {
            value: '150-200万',
            label: '150-200万',
          }, {
            value: '200-250万',
            label: '200-250万',
          }, {
            value: '250-300万',
            label: '250-300万',
          }, {
            value: '300-500万',
            label: '300-500万',
          }
        ]
      },
      {
        value: '均价',
        label: '均价',
        children: [
          {
            value: '20000万/m一下',
            label: '20000万/m一下',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '20000-30000元/m',
            label: '20000-30000元/m',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '30000-40000元/m',
            label: '30000-40000元/m',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '40000-50000元/m',
            label: '40000-50000元/m',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '50000-60000元/m',
            label: '50000-60000元/m',
            children: [
              {
                value: '金沙湾',
                label: '金沙湾'
              }
            ]
          },
          {
            value: '60000-80000元/m',
            label: '60000-80000元/m',
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
          <Button type='primary' onClick={this.showDrawer}>Open</Button>
          <Drawer
            title='Basic Drawer'
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p className='paixu'>默认排序</p>
            <p className='paixu' onClick={() => {
              this.low()
            }}>单价由低到高</p>
            <p className='paixu' onClick={() => {
              this.hide()
            }}>单价由高到低</p>
            <p className='paixu'>开盘时间顺序</p>
            <p className='paixu'>开盘时间倒序</p>
          </Drawer>
        </div>
        <div>


        {/* 完成按总价筛选
        完成按均价筛选 */}
          {/* 用filter进行筛选 */}
          {/* {
            this.option.value.filter((item)=>{
              return item
            })
          } */}


        </div>
        <Cascader options={options} onChange={onchange} placeholder='Please select'></Cascader>
      </div>
    )
  }
}
