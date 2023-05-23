import React from 'react';
import { GoCheck } from "react-icons/go";
import { AiFillCreditCard } from "react-icons/ai";

function IconeContaPaga({ paga }) {
    const check = {
        'color': 'green'
    }
    const pay = {
        'color': 'red'
    }
    return (
        <div>
            {paga ? (
                <GoCheck style={check}/>
            ) : (
                <AiFillCreditCard style={pay}/>
            )}
        </div>
    );
}

export default IconeContaPaga;
