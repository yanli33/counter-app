import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from './components/counters'

class App extends Component {
	state = {
		// 一般在这里写需要传给孩子的参数
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	}

	constructor() {
		//一些初始化操作，不能在这里改变状态
		super();
		console.log('App-Constructor')
	}
	componentDidMount() {//当组件挂在之后执行，相当于Vue中的Mounted
		console.log('App-Mounted')
	}

	handleReset = () => {
		console.log('click')
		const counters = this.state.counters.map((c) => {
			c.value = 0
			return c
		})
		this.setState({ counters })
	}
	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId)
		this.setState({ counters })
		// console.log('Event Handle Called', counterId)
	}
	handleIncrement = (counter) => {
		const counters = [...this.state.counters]
		const index = counters.indexOf(counter)
		counters[index] = { ...counter }
		counters[index].value++
		this.setState({ counters })
		console.log(this.state.counters[index])
	}

	render() {//获得virtual dom
		console.log('App-Rendered') //
		return (
			<React.Fragment>
				< NavBar totalCounters={this.state.counters.filter(c => c.value !== 0).length} />
				<main className="contaniner" >
					<Counters
						counters={this.state.counters} //父亲控制
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete} />
				</main>
			</React.Fragment>
		);
	}
}

export default App;