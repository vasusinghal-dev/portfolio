import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const emailDesktop =
  "https://mail.google.com/mail/?view=cm&to=vasu.singhal.work@gmail.com&su=Opportunity%20from%20Your%20Portfolio";

const phoneRequestDesktop =
  "https://mail.google.com/mail/?view=cm&to=vasu.singhal.work@gmail.com&su=Request%20for%20phone%20call";

const emailMobile =
  "mailto:vasu.singhal.work@gmail.com?subject=Opportunity%20from%20Your%20Portfolio";

const phoneRequestMobile =
  "mailto:vasu.singhal.work@gmail.com?subject=Request%20for%20phone%20call";

export const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "vasu.singhal.work@gmail.com",
    link: isMobile ? emailMobile : emailDesktop,
  },
  {
    icon: FaPhone,
    title: "Phone",
    value: "Available on Request",
    link: isMobile ? phoneRequestMobile : phoneRequestDesktop,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Available for Remote Work",
    link: "#",
  },
];
