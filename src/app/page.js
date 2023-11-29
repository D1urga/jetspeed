import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import img_1 from "./images/img1.jpg";
import Link from "next/link";
import OurWork from "./components/ourwork";
import OurService from "./components/ourService";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.left_div}>
          <div className={styles.heading}>
            <h3>Grow With</h3>
            <h1>JET SPEED</h1>
          </div>
          <h2>End-to-end Growth & Marketing Services</h2>

          <div className={styles.btn_div}>
            <Link className={styles.btn1} href="">
              Work With Us
            </Link>
            {/* <Link className={styles.btn1} href="">
              Advanced
            </Link> */}
          </div>
        </div>
        <div className={styles.right_div}>
          <Image
            quality={50}
            src={img_1}
            alt="Picture of the author"
            className={styles.pic1}
          />
        </div>
      </div>
      {/* <p className={styles.bottom}>
        JetSpeed is a digital marketing company focused on growth marketing with
        expertise and a proven track record in every digital growth medium. We
        use the latest digital marketing technologies to create scalable,
        effective growth campaigns for our clients. Our in-house team of experts
        can craft a strategy that fits your needs and budget and then execute it
        using the latest technologies and best practices. We help you achieve
        your marketing goals in various channels, including email, social media,
        display advertising, and even mobile apps
      </p> */}
      {/* <OurWork /> */}
      <OurService />
      <Footer />
    </main>
  );
}
