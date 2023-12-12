import React from "react";
import styles from "./styles/contact.module.css";
import Link from "next/link";
import Icons from "./icons";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaList,
  FaListAlt,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className={styles.main_div}>
      <h1>Contact Us</h1>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <p>
            Feel free to contact us any time. We will get back to you as soon as
            we can !
          </p>
          <div className={styles.frm}>
            <h2>Please fill the google form</h2>
            <div>
              <Link href="//" className={styles.btn}>
                <FaListAlt className={styles.ic1} />
                Google Form
              </Link>
            </div>
          </div>
          <div className={styles.frm}>
            <h2>Connect with us on Whatsapp</h2>
            <Link href="https://wa.me/6396937375" className={styles.btn}>
              <FaWhatsapp className={styles.ic2} />
              WhatsApp
            </Link>
          </div>
        </div>
        <div className={styles.div2}>
          <h3 className={styles.tit1}>Get in Touch</h3>
          <div className={styles.cont}>
            <FaEnvelope className={styles.icon} />
            <p>ajeet@gmail.com</p>
            <div></div>
          </div>
          <div className={styles.cont}>
            <FaPhone className={styles.icon} />
            <p>9528295991</p>
            <div></div>
          </div>
          <h3 className={styles.tit2}>Follow us on</h3>

          <div className={styles.icon_list}>
            <FaInstagram className={styles.logo} />
            <FaLinkedin className={styles.logo} />
            <FaFacebook className={styles.logo} />
            <FaTwitter className={styles.logo} />
          </div>
        </div>
      </div>
    </div>
  );
}
