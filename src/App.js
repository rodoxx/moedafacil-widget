import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cotacao from './cotacao/components/MoedaFacilWidget'

class App extends Component {

	renderOption = () => {
		if (this.props.type == 'cotacao'){
			return (<Cotacao store={this.props.store} />)
		}
	}

	render() {
		return (
			<div className="App">
				{this.renderOption()}
			</div>
		);
	}
}

export default App
