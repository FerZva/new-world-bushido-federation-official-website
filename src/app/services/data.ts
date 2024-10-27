import benefitIcon1 from "../assets/benefitIcon1.png";
import benefitIcon2 from "../assets/benefitIcon2.png";
import benefitIcon3 from "../assets/benefitIcon3.png";

import Karate from "../assets/Karate.jpg";
import Box from "../assets/Box.jpg";
import Kickboxing from "../assets/Kickboxing.jpg";
import MMA from "../assets/MMA.jpg";
import KravMaga from "../assets/KRAV-MAGA.jpg";
import MuayThai from "../assets/Muay-Thay.jpg";
import JiuJitsuBrazilian from "../assets/Jiu-Jitsu-Brazilian.jpg";
import KeysiFightingMethod from "../assets/Keysi-Fighting-Method.jpg";
import Taekwondo from "../assets/Taekwondo.jpg";
import Judo from "../assets/Judo.jpg";

import Committee1 from "../assets/committee1.png";
import committee2 from "../assets/committee2.jpg";
import committee3 from "../assets/committee3.png";
import committee4 from "../assets/committee4.png";
import committee5 from "../assets/committee5.png";
import committee6 from "../assets/committee6.jpg";
import committee7 from "../assets/committee7.jpg";
import committee8 from "../assets/committee8.jpg";
import committee9 from "../assets/committee9.jpeg";
import committee10 from "../assets/committee10.jpeg";
import committee11 from "../assets/committee11.jpeg";
import committee12 from "../assets/committee12.jpeg";
import committee13 from "../assets/committee13.jpeg";
import committee14 from "../assets/committee14.png";
import committee15 from "../assets/committee15.jpeg";
import committee16 from "../assets/committee16-2.jpg";
import committee17 from "../assets/committee17.jpg";
import committee18 from "../assets/committee18.jpg";
import committee19 from "../assets/committee19.jpg";
import committee20 from "../assets/committee20.jpg";
import committee21 from "../assets/committee2.jpg";

export const BenefitsData = [
  {
    icon: benefitIcon1,
    title: "BUILD CONFIDENCE",
    description:
      "In World Bushido Federation we are dedicated to empowering you with the confidence and self-steem needed to get yourself out of a dangerous situation.",
  },
  {
    icon: benefitIcon2,
    title: "INSTRUCTION",
    description:
      "Our professional instructors are at your finger tips! Making sure that all classes are unique, fun, and safe is our instructors' priority.",
  },
  {
    icon: benefitIcon3,
    title: "GOALS",
    description:
      "Your goals are our priority. We tailor our programs to help you or your child achieve those. Whether it's confidence & focus or fitness & weight loss, we're here to help.",
  },
];

export const slides = [
  {
    title: "Karate",
    name: "Mǔyáng (牧阳)",
    image: Karate,
  },
  {
    title: "Taekwondo",
    name: "Mǔyáng (牧阳)",
    image: Taekwondo,
  },
  {
    title: "Box",
    name: "Hòuyǐ (浩宇)",
    image: Box,
  },
  {
    title: "Kickboxing",
    name: "Yǔzé (宇泽)",
    image: Kickboxing,
  },
  {
    title: "MMA",
    name: "Yǔzé (宇泽)",
    image: MMA,
  },
  {
    title: "KRAV MAGA",
    name: "Yǔzé (宇泽)",
    image: KravMaga,
  },
  {
    title: "MUAY THAI",
    name: "Yǔzé (宇泽)",
    image: MuayThai,
  },
  {
    title: "Jiu Jitsu Brazilian",
    name: "Yǔzé (宇泽)",
    image: JiuJitsuBrazilian,
  },
  {
    title: "Keysi Fightig Method",
    name: "Yǔzé (宇泽)",
    image: KeysiFightingMethod,
  },
  {
    title: "Judo",
    name: "Mǔyáng (牧阳)",
    image: Judo,
  },
];

interface CommitteeMembers {
  photo: string;
  name: string;
  position: string;
}

export const CommitteeMembers = [
  {
    committeePicture: committee3,
    commiteName: "GM. Jorge A Borjas",
    description: "Founder / President",
  },
  {
    committeePicture: Committee1,
    commiteName: "Dr. Simon Kook",
    description: "Global General Secretary",
  },
  {
    committeePicture: committee21,
    commiteName: "Gilber Sandoval",
    description: "International Director of Jiu-Jitsu",
  },
  {
    committeePicture: committee20,
    commiteName: "Sensei Fernando Velasquez",
    description: "President of World Bushido Federation Honduras",
  },
  {
    committeePicture: committee6,
    commiteName: "GM. TODDY",
    description: "Vice President Bushido Federation Asia",
  },
  {
    committeePicture: committee7,
    commiteName: "Master Ado Adem Dulas",
    description: "President Bushido Federation Europe",
  },
  {
    committeePicture: committee8,
    commiteName: "GM Soke Raúl Gutierrez López",
    description: "Vice-president Bushido Federation in Europe",
  },
  {
    committeePicture: committee10,
    commiteName: "General Petkov",
    description: "General Secretary of World Bushido Federation in Europe",
  },
  {
    committeePicture: committee11,
    commiteName: "GM. Alain Cohen",
    description:
      "General Secretary of World Bushido Federation in the Middle East",
  },
  {
    committeePicture: committee12,
    commiteName: "GM. Zorigor",
    description: "Vice-president World Bushido Federation in the Middle East",
  },
  {
    committeePicture: committee13,
    commiteName: "GM. Antonio Marin",
    description: "Global Vice-president",
  },
  {
    committeePicture: committee14,
    commiteName: "GM Richard Norton",
    description: "Global Vice-president",
  },
  {
    committeePicture: committee15,
    commiteName: "GM Rigan Machado",
    description: "President Global Technical Committee",
  },
  {
    committeePicture: committee19,
    commiteName: "Hanshi GM Ray Torres",
    description: "founder of the Torres Hei Long System",
  },
];
