import React from 'react';
import Control from './control/control';
import classes from './Controls.module.css';

const Controls = (props) => {
    return (
        <div className={classes.Controls}>
            <p>Current Price: <strong>{props.totalPrice}</strong></p>
            {
                props.products.map(product => (
                    <Control key={product.id}
                     productname={product.name}
                     details ={() => props.productDetails(product.id)}
                     added={() => props.productAdded(product.id)}
                     removed={() => props.productRemoved(product.id)}
                     disabled ={props.disabled[product.id-1].count}
                     count = {product.count} />
                ))
            }
            
            
        </div>
    );
};

export default Controls;