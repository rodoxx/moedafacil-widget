import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import consts from '../../config/consts'
import shortid from 'shortid'

class MoedaFacilWidget extends Component {

	state = {
		data: {}
	}

    componentWillMount () {
		let ecommerce = this.props.store
	  
	  	axios.get(`${consts.API_URL}/store/all?user=${ecommerce}`)
	  		.then(resp => {
				this.setState({data:resp.data})
	  		})
	}
	
	renderRatesRows () {
		if (this.state.data.rates){
			let rates = this.state.data.rates

			return rates.map(item => (
				<tr key={shortid.generate()}>
					<td>{item.currency}</td>					
					<td>{item.buy_rate}</td>					
					<td>{item.sell_rate}</td>					
				</tr>
			)) 
		}
	}

    render() {
      console.log('data no render', this.state.data)
      return (
        <div className="App">
			<table>
				<thead>
					<tr>
						<th>Currency</th>
						<th>Buy rate</th>
						<th>Sell rate</th>
					</tr>
				</thead>
				<tbody>
					{this.renderRatesRows()}
				</tbody>
			</table>
          
        </div>
      );
    }
    
}

export default MoedaFacilWidget
