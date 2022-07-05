import classes from "./OurFounder.module.css";

import React, { Fragment } from "react";

function OurFounder() {
  return (
    <main className={classes.main}>
      <section className={classes.about}>
        <h2>About Our Founder </h2>
        <p>
          Anuj Kaushik the founder of green store is an engineering student who
          is currently studying in Guru Gobind Singh Indraprastha University
        </p>

        <p>
          {" "}
          All our seeds are of excellent quality and you can join us in our
          movement of GREEN INDIA!
        </p>
      </section>
    </main>
  );
}

export default OurFounder;
