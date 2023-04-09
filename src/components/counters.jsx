import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
  render() {
    console.log('Counters- Rendered')
    const { onReset, counters, onDelete, onIncrement } = this.props
    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {counters.map((counter) => (
          // 父亲不能获得孩子的state
          <Counter
            key={counter.id}
            counter={counter}
            handleIncrement={onIncrement} //BUBLLING 相当于事件冒泡
            onDelete={onDelete}>
            {/* 父传子 插槽 */}
            {/* <h4>Counter #{counter.id}</h4> */}
            {/* 插槽 */}
          </Counter>
        ))}
      </div>
    )
  }
}

export default Counters
