import React from 'react';

const Coin = ({face}) => { //component will not recognize props if we don't write it in param of functional component
    return(
        <div>
            <img style={{height: '10em'}} src={
                face === '' ? '' : //not necessary to add if else, just to avoid console error at first time 
                `https://tinyurl.com/react-coin-${face}-jpg`
                } alt=""/>
        </div>
    );
}

export default Coin;