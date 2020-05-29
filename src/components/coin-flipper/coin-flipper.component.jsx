import React, {Component} from 'react';
import Coin from '../coin/coin.component';
import {getRandomFace} from './helpers';


class CoinFlipper extends Component{
    constructor(props){
        super(props);

        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            face: ''
        };
    }

    static defaultProps = {
        faces : ['heads', 'tails']
    }

    handleClick = () => {
        let {flips, heads, tails, face} = this.state; //destructuring object
        
        face = getRandomFace(this.props.faces);
        
        ++flips;
        face === 'heads' ? ++heads : ++tails;

        //when key-vaue pairs have same name, we can use just write keys, name will have same name as key
        this.setState({flips, heads, tails, face});
    }

    render(){
        return(
            <div className='coin-flipper'>
                <h1>Let's Flip a coin!</h1>
                {this.state.face && <Coin face={this.state.face} />}
                <h3>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails</h3>
                <button onClick={this.handleClick}>FLIP ME</button>
            </div>
        );
    }
}

export default CoinFlipper;