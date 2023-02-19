import React, {useState} from 'react';
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [value, setValue] = useState<number>(0);

    const increment = () => {
        setValue(prevState => prevState += 1);
    }

    return (
        <div className={classes.counter}>
            <span className={classes.value}>{value}</span>
            <button onClick={increment}>increment</button>
        </div>
    );
};

// export default Counter;