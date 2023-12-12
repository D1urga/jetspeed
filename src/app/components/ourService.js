"use client";
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
import { Backdrop } from "@mui/material";

export default function OurService() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleClose6 = () => {
    setOpen6(false);
  };
  const handleClose7 = () => {
    setOpen7(false);
  };
  const handleClose8 = () => {
    setOpen8(false);
  };
  const handleClose9 = () => {
    setOpen9(false);
  };
  const handleClose10 = () => {
    setOpen10(false);
  };
  const handleClose11 = () => {
    setOpen11(false);
  };
  const handleClose12 = () => {
    setOpen12(false);
  };

  return (
    <div className={styles.outer_div}>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open1}
        onClick={handleClose1}
        className={styles.bd}
      >
        <div className={styles.bd_main}>
          <div className={styles.bd_head}>
            <h3>Search Engine Optimization</h3>
          </div>
          <div className={styles.bd_left}>
            <div className={styles.bd1}>
              <FaGlobe className={styles.bd_icon} />
            </div>
            <div className={styles.bd2}>
              <p>
                Build your presence on the web’s most powerful search engines
                with our state-of-the-art search engine optimization strategies.
                Our experienced team of search experts will help you optimize
                your content, titles, meta descriptions, and keywords to
                increase the volume of traffic from organic search. This enables
                you to gain higher rankings on the search engines, ultimately
                increasing user traction and growth.
              </p>
            </div>
          </div>
        </div>
      </Backdrop>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open2}
        onClick={handleClose2}
        className={styles.bd}
      >
        <div className={styles.bd_main}>
          <div className={styles.bd_head}>
            <h3>App Search Optimization (ASO)</h3>
          </div>
          <div className={styles.bd_left}>
            <div className={styles.bd1}>
              <FaSearchDollar className={styles.bd_icon} />
            </div>
            <div className={styles.bd2}>
              <p>
                App Store Optimization or App Search Optimization, or ASO for
                short, is the process of making your app appear on the first
                page of App Store searches. This process gets your app in front
                of the right people at the right time. Our experts onboarded 30+
                million users on Applications. We are trending on #1 across all
                the categories for multiple Apps using our ASO techniques.
              </p>
            </div>
          </div>
        </div>
      </Backdrop>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open3}
        onClick={handleClose3}
        className={styles.bd}
      >
        <div className={styles.bd_main}>
          <div className={styles.bd_head}>
            <h3>Social Media Marketing(ASO)</h3>
          </div>
          <div className={styles.bd_left}>
            <div className={styles.bd1}>
              <FaLaptop className={styles.bd_icon} />
            </div>
            <div className={styles.bd2}>
              <p>
                We can help you build your social media following and generate
                more organic engagement. We will help you set up and optimize
                your social media accounts to increase your brand awareness and
                generate more leads. Our social media marketing services will
                help you build a strong social media presence and increase your
                online presence. We will help you improve the amount of organic
                traffic to your website from social media.
              </p>
            </div>
          </div>
        </div>
      </Backdrop>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open4}
        onClick={handleClose4}
        className={styles.bd}
      >
        <div className={styles.bd_main}>
          <div className={styles.bd_head}>
            <h3>Content Marketing</h3>
          </div>
          <div className={styles.bd_left}>
            <div className={styles.bd1}>
              <FaEdit className={styles.bd_icon} />
            </div>
            <div className={styles.bd2}>
              <p>
                Our content writers are a diverse group of indivisuals from all
                walks of life and regions from across the world. helps us
                understand and meet the needs of our varied clientele. Our
                content writers can complete the clients requirements and assist
                you in building a robust online presence. Our content writers
                are a talented group of individuals from different part of the
                world who can complate the clients requirement
              </p>
            </div>
          </div>
        </div>
      </Backdrop>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open5}
        onClick={handleClose5}
        className={styles.bd}
      >
        <div className={styles.bd_main}>
          <div className={styles.bd_head}>
            <h3>Email Marketing</h3>
          </div>
          <div className={styles.bd_left}>
            <div className={styles.bd1}>
              <FaEnvelope className={styles.bd_icon} />
            </div>
            <div className={styles.bd2}>
              <p>
                Our email marketing services include sending out emails to our
                database, creating email sequences, and automating the workflow.
                Our email marketing services effectively capture the email
                addresses of our database and create email sequences that engage
                our users. Our email campaigns are thoroughly tested and proven
                to work, ensuring high open rates and maximum response rates. We
                use the most advanced email marketing services, which allow us
                to send emails to a large audience at minimal costs.
              </p>
            </div>
          </div>
        </div>
      </Backdrop>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open6}
        onClick={handleClose6}
        className={styles.bd}
      >
        <div className={styles.bd_main}>
          <div className={styles.bd_head}>
            <h3>Google Business Listings</h3>
          </div>
          <div className={styles.bd_left}>
            <div className={styles.bd1}>
              <FaGoogle className={styles.bd_icon} />
            </div>
            <div className={styles.bd2}>
              <p>
                When a local business is looking for a service nearby, Google
                can be of great help. Your business can get the maximum possible
                exposure from your nearby places, through Local SEO. This works
                best for Offline outlets.
              </p>
            </div>
          </div>
        </div>
      </Backdrop>

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
          click={() => {
            setOpen1(true);
          }}
        />
        <ServiceCard
          Icon={FaSearchDollar}
          title="App Search
Optimization"
          click={() => {
            setOpen2(true);
          }}
        />

        <ServiceCard
          Icon={FaLaptop}
          title="Social Media
Marketing
"
          click={() => {
            setOpen3(true);
          }}
        />
        <ServiceCard
          Icon={FaEdit}
          title="Content Marketing
"
          click={() => {
            setOpen4(true);
          }}
        />
        <ServiceCard
          Icon={FaEnvelope}
          title="Email
Marketing
"
          click={() => {
            setOpen5(true);
          }}
        />
        <ServiceCard
          Icon={FaGoogle}
          title="Google
Business Listings
"
          click={() => {
            setOpen6(true);
          }}
        />
      </div>
      <h2>Paid Marketing</h2>
      <div className={styles.divider}>
        <div className={styles.divi}></div>
      </div>
      <div className={styles.cards_div}>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open7}
          onClick={handleClose7}
          className={styles.bd}
        >
          <div className={styles.bd_main}>
            <div className={styles.bd_head}>
              <h3>Google Ads</h3>
            </div>
            <div className={styles.bd_left}>
              <div className={styles.bd1}>
                <FaGooglePlus className={styles.bd_icon} />
              </div>
              <div className={styles.bd2}>
                <p>
                  We have a team of professionals who have a track record of
                  delivering the best results in Google App Installs. We have a
                  team of professionals who are good with every aspect of
                  Google. We will increase web traffic and get more sales or App
                  Installs as per requirement. We have a team of professionals
                  who have a track record of delivering the best results in
                  terms of Google App Installs.
                </p>
              </div>
            </div>
          </div>
        </Backdrop>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open8}
          onClick={handleClose8}
          className={styles.bd}
        >
          <div className={styles.bd_main}>
            <div className={styles.bd_head}>
              <h3>Influencer Marketing</h3>
            </div>
            <div className={styles.bd_left}>
              <div className={styles.bd1}>
                <FaChartLine className={styles.bd_icon} />
              </div>
              <div className={styles.bd2}>
                <p>
                  Influencer marketing is the fastest-growing mode of marketing
                  with the emergence of Instagram, Youtube, and other social
                  media applications. We have more than 20,000 influencers
                  working with Sharara and can be used as per the client’s
                  demand. Our influencers are engaged, and they work with us to
                  create engaging and shareable content. We do research before
                  working with an influencer and only engage with those who have
                  many followers and are high-quality content creators.
                </p>
              </div>
            </div>
          </div>
        </Backdrop>
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open9}
          onClick={handleClose9}
          className={styles.bd}
        >
          <div className={styles.bd_main}>
            <div className={styles.bd_head}>
              <h3>Public Relations</h3>
            </div>
            <div className={styles.bd_left}>
              <div className={styles.bd1}>
                <FaUsers className={styles.bd_icon} />
              </div>
              <div className={styles.bd2}>
                <p>
                  We work with the best magazines, newspapers and TV channels in
                  India to provide maximum reach possible.
                </p>
              </div>
            </div>
          </div>
        </Backdrop>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open10}
          onClick={handleClose10}
          className={styles.bd}
        >
          <div className={styles.bd_main}>
            <div className={styles.bd_head}>
              <h3>Virtual Gifts & Vouchers</h3>
            </div>
            <div className={styles.bd_left}>
              <div className={styles.bd1}>
                <FaGifts className={styles.bd_icon} />
              </div>
              <div className={styles.bd2}>
                <p>
                  Sharara offers a wide range of merchandising and virtual gifts
                  using AR, VR, and XR technologies. This helps in engaging your
                  community and building a relationship. The following are the
                  major benefits of using virtual gifts and gift vouchers:
                  Sharara offers a wide range of merchandising and virtual gifts
                  using AR, VR, and XR technologies. This helps in engaging your
                  community and building a relationship.
                </p>
              </div>
            </div>
          </div>
        </Backdrop>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open11}
          onClick={handleClose11}
          className={styles.bd}
        >
          <div className={styles.bd_main}>
            <div className={styles.bd_head}>
              <h3>Referral Programs</h3>
            </div>
            <div className={styles.bd_left}>
              <div className={styles.bd1}>
                <FaUserFriends className={styles.bd_icon} />
              </div>
              <div className={styles.bd2}>
                <p>
                  We run referral programs where users refer your brand to other
                  users for discounts, cash, or gifts. We have technologies
                  built to track every part of this process. This helps you
                  build a relationship with your users and increase the lifetime
                  value of your users. In addition, users are encouraged to
                  refer your brand to their friends and family.
                </p>
              </div>
            </div>
          </div>
        </Backdrop>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open12}
          onClick={handleClose12}
          className={styles.bd}
        >
          <div className={styles.bd_main}>
            <div className={styles.bd_head}>
              <h3>Original Equipment Manufacturer</h3>
            </div>
            <div className={styles.bd_left}>
              <div className={styles.bd1}>
                <FaCogs className={styles.bd_icon} />
              </div>
              <div className={styles.bd2}>
                <p>
                  We have partnered with brands like Realme, Transson Holdings
                  (ITEL, Infinix), and Vivo to run our user acquisition programs
                  directly with the mobile providers. This helps to get many
                  users on our platform in a short period. In addition, we have
                  a strong sales team, and they are well-versed with the latest
                  technologies and can help you execute your marketing
                  strategies in this space. We also have industry experts
                  working with our sales team to provide you with the best
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </Backdrop>

        <ServiceCard
          Icon={FaGooglePlusG}
          title="Google
Ads"
          click={() => {
            setOpen7(true);
          }}
        />
        <ServiceCard
          Icon={FaChartLine}
          title="Influencer
Marketing"
          click={() => {
            setOpen8(true);
          }}
        />

        <ServiceCard
          Icon={FaUsers}
          title="Public
Relations
"
          click={() => {
            setOpen9(true);
          }}
        />
        <ServiceCard
          Icon={FaGifts}
          title="Virtual Gifts &
Vouchers"
          click={() => {
            setOpen10(true);
          }}
        />
        <ServiceCard
          Icon={FaUserFriends}
          title="Referral
Programs
"
          click={() => {
            setOpen11(true);
          }}
        />
        <ServiceCard
          Icon={FaCogs}
          title="OEMs
"
          click={() => {
            setOpen12(true);
          }}
        />
      </div>
    </div>
  );
}
