import styles from "./App.module.css";
import Navbar from "./orignal/Navbar.js"
import Hero from "./orignal/hero.js";
import Box from "./orignal/box.js";
import Postr from "./orignal/poster.js"
import Foot from "./orignal/foot";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Box />
      <Postr />
     <Foot />
    </div>
  );
}

export default App;