import React, { Component } from 'react'

//stateless Functional Component
//只单纯定义渲染函数的组件可以这样做
const NavBar = ({ totalCounters }) => {
  //props结构
  console.log('NavBar- Rendered')
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className='navbar navbar-light bg-light'>
//         <a className='navbar-brand' href='#'>
//           Navbar{' '}
//           <span className='badge badge-pill badge-secondary'>
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     )
//   }
// }

export default NavBar
