import React, { Component } from 'react'
import Axios from 'axios';
import BScroll from 'better-scroll'
export default class Address extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      currentPage: 1
    }
  }
  componentDidMount() {
    var bs = new BScroll('.wrapper', {
      pullDownRefresh: true,
      pullUpLoad: true
    });

    bs.on('pullingDown', () => {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, function () {
        Axios.post('/pagination', { count: 20, page: this.state.currentPage }).then(res => {
          this.setState({
            list: res.data.list
          })

        })
      })
      bs.finishPullDown()
    })

    bs.on('pullingUp', () => {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, function () {
        Axios.post('/pagination', { count: 20, page: this.state.currentPage }).then(res => {
          this.setState({
            list: [...res.data.list, ...this.state.list]
          })
        })
      })
      bs.finishPullUp()
    })

    Axios.post('/pagination', { count: 20, page: 1 }).then(res => {
      this.setState({
        list: res.data.list
      })
    })
  }
  // 结合better-scroll创建局部滚动组件 （重点）
  render() {
    return (
      <div className='wrapper'>
        <div className="content">
          {
            this.state.list.map((item, index) => {
              return (
                <div className='list' key={index}>
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
            })
          }
        </div>

      </div>
    )
  }
}
