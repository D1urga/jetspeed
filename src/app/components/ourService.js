import React from "react";
import ServiceCard from "./serviceCard";
import styles from "./styles/ourService.module.css";
import {
  FaChartLine,
  FaCogs,
  FaEdit,
  FaEnvelope,
  FaGifts,
  FaGlobe,
  FaGoogle,
  FaGooglePlus,
  FaGooglePlusG,
  FaLaptop,
  FaLaptopCode,
  FaLaptopHouse,
  FaLaptopMedical,
  FaListAlt,
  FaListUl,
  FaSearchDollar,
  FaUser,
  FaUserFriends,
  FaUsers,
  FaVoicemail,
} from "react-icons/fa";

export default function OurService() {
  return (
    <div className={styles.outer_div}>
      <h1>Our Service</h1>
      <h2>Organic Marketing</h2>
      <div className={styles.divider}>
        <div className={styles.divi}></div>
      </div>
      <div className={styles.cards_div}>
        <ServiceCard
          Icon={FaGlobe}
          title="Search Engine
Optimization"
        />
        <ServiceCard
          Icon={FaSearchDollar}
          title="App Search
Optimization"
        />

        <ServiceCard
          Icon={FaLaptop}
          title="Social Media
Marketing
"
        />
        <ServiceCard
          Icon={FaEdit}
          title="Content Marketing
"
        />
        <ServiceCard
          Icon={FaEnvelope}
          title="Email
Marketing
"
        />
        <ServiceCard
          Icon={FaGoogle}
          title="Google
Business Listings
"
        />
      </div>
      <h2>Paid Marketing</h2>
      <div className={styles.divider}>
        <div className={styles.divi}></div>
      </div>
      <div className={styles.cards_div}>
        <ServiceCard
          Icon={FaGooglePlusG}
          title="Google
Ads"
        />
        <ServiceCard
          Icon={FaChartLine}
          title="Influencer
Marketing"
        />

        <ServiceCard
          Icon={FaUsers}
          title="Public
Relations
"
        />
        <ServiceCard
          Icon={FaGifts}
          title="Virtual Gifts &
Vouchers"
        />
        <ServiceCard
          Icon={FaUserFriends}
          title="Referral
Programs
"
        />
        <ServiceCard
          Icon={FaCogs}
          title="OEMs
"
        />
      </div>
    </div>
  );
}
