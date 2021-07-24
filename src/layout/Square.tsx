import type { Component } from "solid-js";

import styles from "./Square.module.css";

const Square: Component = (props) => 
    <div class={styles.Square}>
        {props.children}
    </div>

export default Square;
