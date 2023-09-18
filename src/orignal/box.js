import React, { useState } from "react";

import styles from "./box.module.css";
import { getImageUrl } from "../utils";



const Box = () => {
  const [menuOpen, setMenuOpen] = useState(false);





  return (
    <section className={styles.sectionA} id="about">
    <div className={styles.and}>
        <h1 className={styles.headers}>tix</h1>
        <p className={styles.paragraph}>We offer a variety of tixe, including wood, marvel, and glass tixs..</p>
    </div>
    <div className={styles.hulet}>
        <h1 className={styles.headers}>book</h1>
        <p className={styles.paragraph}>We have big book library, including nearly every type of orthodox preyer books...</p>
    </div>
    <div className={styles.hulet}>
        <h1 className={styles.headers}>Decorations</h1>
        <p className={styles.paragraph}>We offer decorations for weddings, births, and other types of ceremonies.</p>
    </div>
    </section>
  );
};
export default Box;