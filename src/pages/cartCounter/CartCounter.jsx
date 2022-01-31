import React, { useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import CounterCell from '../../components/counterCell';

import './CartCounter.css';

const counters = [1, 2, 3,];
const CartCounter = () => {
    // state
    const [count, setCount] = useState({
        total: 0,
        items: {
            1: {
                isPressed: false,
                count: 0
            },
            2: {
                isPressed: false,
                count: 0
            },
            3: {
                isPressed: false,
                count: 0
            }
        }
    });

    // functions 
    const increment = useCallback((id) => {
        setCount(prev => ({
            ...prev,
            total: count.items[id].isPressed ? prev.total : prev.total + 1,
            items: {
                ...prev.items,
                [id]: {
                    count: prev.items[id].count + 1,
                    isPressed: true
                }
            }
        }))
    }, [count]); // TODO: why useCallback? ,how we can enchant this code without useCallback?

    const decrement = useCallback((id) => {
        console.log("🚀 ~ file: CartCounter.jsx ~ line 45 ~ decrement ~ count.items[id].count", count.items[id].count)
        setCount(prev => ({
            ...prev,
            total: count.items[id].count === 1 ? prev.total - 1 : prev.total,
            items: {
                ...prev.items,
                [id]: {
                    count: prev.items[id].count - 1,
                    isPressed: prev.items[id].count === 1 ? false : true
                }
            }
        }))
    }, [count]); // TODO: why useCallback? ,how we can enchant this code without useCallback?

    // effects
    useEffect(() => {
        console.log("🚀 ~ file: CartCounter.jsx ~ line 58 ~ useEffect ~ count", count)
    }, [count]);

    useEffect(() => {
        console.log("JUST HI");
    }, []);
    
    return (
        <div>
            <h1> Cart Counter {count.total} </h1>
            {counters.map(counter => {
                return (
                    <div key={counter}>
                        <CounterCell
                            count={count.items[counter].count}
                            increment={increment}
                            decrement={decrement}
                            id={counter}
                        />
                    </div>
                )
            })}

        </div>
    )
}

export default CartCounter;
