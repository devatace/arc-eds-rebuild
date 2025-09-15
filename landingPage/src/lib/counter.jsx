import styles from '../styles/lib/counter.module.css'

import { useEffect, useState } from "react";

function Counter({ target, plus, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16); // ~60fps
        const step = () => {
            start += increment;
            if (start < target) {
                setCount(Math.floor(start));
                requestAnimationFrame(step);
            } else {
                setCount(target); // snap to target
            }
        };
        requestAnimationFrame(step);
    }, [target, duration]);

    return <span className={styles.counter}>{count.toLocaleString()}{plus ? "+" : ""}</span>;
}

export default Counter;
