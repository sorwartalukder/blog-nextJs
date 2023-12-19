import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={`/posts`}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            modi animi reiciendis, pariatur alias sed,
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi
          necessitatibus aut illo iste provident? Sunt magni enim saepe dolorem
          accusantium assumenda eveniet quibusdam voluptatibus, illo, facere cum
          vel eius?
        </p>
        <Link href={`/posts`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
