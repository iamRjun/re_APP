import {useState} from "react";


export default function State() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick}>Click Me to increase counter</button>
        </>
    )
}