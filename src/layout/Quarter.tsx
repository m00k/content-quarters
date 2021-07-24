import type { Component } from "solid-js";

import styles from "./Quarter.module.css";

interface QuarterProps {
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
}

const Quarter: Component<QuarterProps> = (props) => {
    const vertical = props.vertical === 'top' ? styles.top : styles.bottom;
    const horizontal = props.horizontal === 'left' ? styles.left : styles.right;
    const cls = `${styles.Quarter} ${horizontal} ${vertical}`;
    return (
        <article class={cls}>
            {props.children}
        </article>
    )
}

export default Quarter;
