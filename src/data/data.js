import { AiOutlineHome, AiOutlineCalculator, AiOutlineSetting, AiOutlineShareAlt } from "react-icons/ai"
import { RiUserLine } from "react-icons/ri"
import { FaRegLightbulb, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaShippingFast } from "react-icons/fa"
import { CgCardClubs } from "react-icons/cg"
import { TbMailOpened } from "react-icons/tb"
import { GoMail } from "react-icons/go"
import { GiChart } from "react-icons/gi"
import { FiLayers } from "react-icons/fi"
import { BsPhone } from "react-icons/bs"
import { BsPhoneVibrate, BsVectorPen } from "react-icons/bs"
import { MdShareLocation, MdLocalShipping, MdOutlineLocalShipping } from "react-icons/md"

export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "resume",
    url: "/resume",
    icon: <RiUserLine />,
  },
  {
    id: 3,
    text: "portfolio",
    url: "/portfolio",
    icon: <FaRegLightbulb />,
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
    icon: <CgCardClubs />,
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
    icon: <TbMailOpened />,
  },
]

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    class: "facebook",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    class: "twitter",
  },
  {
    id: 3,
    icon: <FaDribbble />,
    class: "dribbble",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    class: "instagram",
  },
]

export const side = [
  {
    id: 1,
    num: 85,
    text: "Backend Development",
    class: "skill1",
  },
  {
    id: 2,
    num: 92,
    text: "Frontend Development",
    class: "skill2",
  },
  {
    id: 3,
    num: 71,
    text: "Illustration",
    class: "skill3",
  },
]

export const about = [
  {
    deatils: [
      {
        text: "My Name",
        value: "K. Melissa Caroll",
        icon: <RiUserLine />,
      },
      { text: "My Age", value: "32 Years 241 Days", icon: <AiOutlineCalculator /> },
      { text: "Email Address", value: "k.melissa@caroll.me", icon: <GoMail /> },
      { text: "Phone Number", value: "1.800.987.6987", icon: <BsPhoneVibrate /> },
      { text: "Address", value: "Click Here to View Map.", icon: <MdShareLocation /> },
    ],
    bio: [
      {
        para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo. Quis ipsum suspendisse ultrices gravida.",
        para2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        para3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: "./images/bio.png",
      },
    ],

    serives: [
      {
        id: 1,
        icon: <AiOutlineSetting />,
        title: "Web Development",
        text: "from scratch",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 2,
        icon: <BsVectorPen />,
        title: "UX recherche",
        text: "data collection",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 3,
        icon: <FiLayers />,
        title: "UI design",
        text: "creativ design",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 4,
        icon: <BsPhone />,
        title: "Application",
        text: "stand alone",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 5,
        icon: <AiOutlineShareAlt />,
        title: "Social Media",
        text: "digital product",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 6,
        icon: <GiChart />,
        title: "Search Engine",
        text: "page rank",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
    ],

    review: [
      {
        id: 1,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut1.jpg",
      },
      {
        id: 2,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Gork Coder",
        link: "gorkcoder.com",
        cover: "./images/aut2.jpg",
      },
      {
        id: 3,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut3.jpg",
      },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "27.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "47.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "97.00s",
      },
    ],
  },
]
