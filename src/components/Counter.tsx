import React, {useState} from 'react';

export const Counter = () => {
    const [value, setValue] = useState<number>(0);

    const increment = () => {
        setValue(prevState => prevState += 1);
    }

    return (
        <div>
            {value}
            <button onClick={increment}>increment</button>
        </div>
    );
};

// export default Counter;