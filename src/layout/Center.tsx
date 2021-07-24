import type { Component } from "solid-js";

import styles from "./Center.module.css";

const Center: Component = (props) => 
    <main class={styles.Center}>
        {props.children}
    </main>

export default Center;
