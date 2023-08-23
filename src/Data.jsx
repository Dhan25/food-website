import { BiMap } from "react-icons/bi";
import { GiBowlOfRice } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "./assets/images/recipe1.jpg";
import recipe2 from "./assets/images/recipe2.jpg";
import recipe3 from "./assets/images/recipe3.jpg";
import recipe4 from "./assets/images/recipe4.jpg";
import recipe5 from "./assets/images/recipe5.jpg";
import recipe6 from "./assets/images/recipe6.jpg";

import payment1 from "./assets/images/payment1.png";
import payment2 from "./assets/images/payment2.png";
import payment3 from "./assets/images/payment3.png";
import payment4 from "./assets/images/payment4.png";


export const data = [
  {id: 1, link:"#", title:"Home"},
  {id: 2, link:"#about", title:"About"},
  {id: 3, link:"#recipe", title:"Recipe"},
  {id: 4, link:"#contact", title:"Contact"},
  {id: 5, link:"#footer", title:"Footer"},
];

export const recipes = [
  {
    id: 1,
    image: recipe1,
    name: "Crispy Pig Head",
    price: "₱ 1,500",
  },
  {
    id: 2,
    image: recipe2,
    name: "Adobo",
    price: "₱ 150",
  },
  {
    id: 3,
    image: recipe3,
    name: "Sinigang",
    price: "₱ 120",
  },
  {
    id: 4,
    image: recipe4,
    name: "Lumpiang Shanghia",
    price: "₱ 200",
  },
  {
    id: 5,
    image: recipe5,
    name: "Grilled Liempo",
    price: "₱ 250",
  },
  {
    id: 6,
    image: recipe6,
    name: "Sisig",
    price: "₱ 300",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+912-345-6789",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "pinoyeats123gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "Brgy. Bangco, Cavinti, Laguna",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "recipe",
    text: "Recipe",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contact",
    icon: <MdContactPage />,
  },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];
