import React from "react";

import styles from "./foot.module.css";


 const Foot = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="mailto:myemail@email.com">memriasefer@email.com</a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.linkedin.com/myname">0945464475</a >
        </li>
      
      </ul>
    </footer>
  );
};
export default Foot;