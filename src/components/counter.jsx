import React, { Component } from 'react'

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //页面更新之间
    console.log('prevProps-', prevProps)
    console.log('prevState-', prevState)
  } //组件更新
  componentWillUnmount() {
    console.log('Counter-will-unMount')
  }
  render() {
    // console.log('props', this.props)
    console.log('Counter- Rendered')

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.handleIncrement(this.props.counter)
          }}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>

        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id)
          }} //调用父类的delete函数
          className='btn btn-danger btn-sm m-2'>
          Delete
        </button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }
  formatCount() {
    const value = this.props.counter.value
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
