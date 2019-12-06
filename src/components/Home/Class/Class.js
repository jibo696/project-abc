import React, { Component } from 'react'
import 'antd/dist/antd.css'
import Axios from 'axios';
import {Drawer,Button,Radio} from 'antd';
import { connect } from 'react-redux';
import {collect_action} from '../../../store/store'
 class Class extends Component {
  constructor(){
    super();
    this.state={
      list:[],
      visible:false,
      placement:'top'
    }
  }
  //请求接口，根据筛选条件完成数据渲染
  componentDidMount() {
    Axios.get('/list').then(res => {
      this.setState({
        list: res.data.list
      })
    })
  }
  onChange=(value)=>{
    console.log(value);
    
  }
  showDrawer=()=>{
    this.setState({
      visible:true,
    })
  }
  onClose=()=>{
    this.setState({
      visible:false
    })
  }
  onChange=e=>{
    this.setState({
      placement:e.target.value
    })
  }
  render() {
    const RadioGroup=Radio.Group;
    const lists=[
      {
        value:'不限'
      },{
        value:'1居'
      },{
        value:'2居'
      },{
        value:'3居'
      },{
        value:'4居'
      },{
        value:'5居'
      },
      {
        value:'5居+'
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
          <Button type='primary' onClick={this.showDrawer}>户型筛选</Button>
          <Drawer
            title='Basic Drawer'
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            

            <div className="navs">
              {
                this.state.list.map((item, index) => {
                  return (
                   <div className='nav-item' key={index}>
                    <div className="pic">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="text">
                    <p>面积:{item.id}</p>
                    <p>类型:{item.name}</p>
                    <p>特色:{item.title}</p>
                    <p>价格:{item.price}</p>
                  </div>
                  <div className='btn' onClick={()=>{
                    this.props.sure(item)
                  }}>确定</div>
                   </div>
                  )
                })
              }

            </div>

          </Drawer>
          </div>
          <div>

          {
            lists.filter((item,i)=>{
            return item.value===i.value
          })
          }
         
          </div>
         
      </div>
    )
  }
}
export default connect(
  (state)=>{
    return{
    list:state
    }
  },
  (dispatch)=>{
    return{
      sure(item){
        dispatch(collect_action(item))
      }
    }
  }
)(Class)