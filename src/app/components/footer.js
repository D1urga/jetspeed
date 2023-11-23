"use client";
import React from "react";
import Icons from "./icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPagelines,
  FaTwitter,
  FaXbox,
  FaRocket,
} from "react-icons/fa";
import styles from "./styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.main_div}>
        <div className={styles.div1}>
          <div className={styles.title}>
            <Icons Icon={FaRocket} font={40} />
            <h1>JetSpeed</h1>
          </div>
          <p>
            JetSpeed is a digital marketing company focused on growth marketing
            with expertise and a proven track record in every digital growth
            medium.
          </p>
        </div>
        <div className={styles.div2}>
          <h4>Organic marketing</h4>
          <p>Search Engine Optimization</p>
          <p>Social Media Marketing</p>
          <p>Content Marketing</p>
          <p>Email Marketing</p>
          <p>Google Business Listings</p>
        </div>
        <div className={styles.div2}>
          <h4>Paid Marketing</h4>
          <p>Google Ads</p>
          <p>Facebook Ads</p>
          <p>Influencer Marketing</p>
          <p>Public Relations</p>
          <p>Virtual & Gift Vouchers</p>
          <p>Referral Programs</p>
          <p>OEMs</p>
        </div>
        <div className={styles.div4}>
          <h4>Contact us</h4>
          <p>+91 95282 95991</p>
          <h4>Follow Us</h4>
          <div className={styles.icon_list}>
            <Icons Icon={FaInstagram} font={26} />
            <Icons Icon={FaLinkedin} font={26} />
            <Icons Icon={FaFacebook} font={26} />
            <Icons Icon={FaTwitter} font={26} />
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div id="foot" className={styles.intro}>
        <p>This website is developed by Anoop Kumar Chaudhary</p>
      </div>
    </div>
  );
}
