import React from "react";

import styles from "./hero.module.css";


const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is selam Mezmur bet</h1>
        <p className={styles.description}>
        We have orignal ortodox church materials,any one can come and oreder or use our e-male
        </p>
        <a href="memriasefer@gmail.com" className={styles.contactBtn}>{/*mailto:myemail@email.com* take to ther emal*/}
          Contact us
        </a>
      </div>
      <img
        src='https://uploads-ssl.webflow.com/64f95a226e01da60abcda20f/6501b589a0c1f956c008ceab_Prints%20of%20Ethiopian%20Bible%20and%20rosary%2C%20Jerusalem%2C%20Israel%2C%20Middle%20East.jpg'
        alt="hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;



