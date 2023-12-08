"use client";
import React from "react";
import styles from "./styles/contact.module.css";
import Link from "next/link";
import Icons from "./icons";
import { useState } from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

export default function ContactUs() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={styles.main_div}>
      <Dialog
        width="900px"
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 4 }}
        open={open}
        onClick={handleClose}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdpMNhqILTaVJc1tv8uZEHccXrtgPxNGEB3kQF507fUwZJfHg/viewform?embedded=true"
          className={styles.google_form}
          width="100%"
        >
          Loading…
        </iframe>
      </Dialog>
      <h1>Contact Us</h1>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <p>
            Feel free to contact us any time. We will get back to you as soon as
            we can !
          </p>
          <div className={styles.frm}>
            <h2>Please fill the google form</h2>
            <button className={styles.btn} onClick={handleOpen}>
              Google Form
            </button>
          </div>
          <div className={styles.frm}>
            <h2>Connect with us on Whatsapp</h2>
            <Link
              href="https://in.pinterest.com/pin/540009811581633201/"
              className={styles.btn}
            >
              WhatsApp
            </Link>
          </div>
        </div>
        <div className={styles.div2}>
          <h3>Info</h3>
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
          <h3>Follow us on</h3>

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
