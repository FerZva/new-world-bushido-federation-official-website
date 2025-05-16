import { Student } from "../models/types";
import benefitIcon1 from "../assets/benefitIcon1.png";
import benefitIcon2 from "../assets/benefitIcon2.png";
import benefitIcon3 from "../assets/benefitIcon3.png";
import { SocialMediaIcon } from "../models/interface";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaFacebookSquare, FaTiktok } from "react-icons/fa";

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

import Shield2 from "../assets/2-150x150.png";
import Shield3 from "../assets/3-150x150.png";
import Shield4 from "../assets/4-150x150.png";
import Shield5 from "../assets/5-150x150.png";
import Shield7 from "../assets/7-150x150.png";
import Shield8 from "../assets/8-150x150.png";
import Shield9 from "../assets/9-150x150.png";
import Shield10 from "../assets/10-150x150.png";
import Shield11 from "../assets/11-150x150.png";
import Shield12 from "../assets/12-150x150.png";
import Shield13 from "../assets/13-150x150.png";
import Shield15 from "../assets/15-150x150.png";
import Shield16 from "../assets/16-150x150.png";
import Shield17 from "../assets/17-150x150.png";
import Shield18 from "../assets/18-150x150.png";
import Shield19 from "../assets/19-150x150.png";
import Shield20 from "../assets/20-150x150.png";
import Shield21 from "../assets/21-150x150.png";
import Shield22 from "../assets/24.png";
import Shield23 from "../assets/25.png";
import Shield24 from "../assets/newShield.png";

import Committee1 from "../assets/committee1.png";
import committee3 from "../assets/committee3.png";
import committee6 from "../assets/committee6.jpg";
import committee7 from "../assets/committee7.jpg";
import committee8 from "../assets/committee8.jpg";
import committee10 from "../assets/committee10.jpeg";
import committee11 from "../assets/committee11.jpeg";
import committee12 from "../assets/committee12.jpeg";
import committee13 from "../assets/committee13.jpeg";
import committee14 from "../assets/committee14.png";
import committee15 from "../assets/committee15.jpeg";
import committee19 from "../assets/committee19.jpg";
import committee20 from "../assets/committee20.jpg";
import committe21 from "../assets/committee21.jpg";
import committee22 from "../assets/committee22.jpg";
import committee23 from "../assets/committee23.jpg";
import committee24 from "../assets/committee24.jpg";
import committee25 from "../assets/committee25.jpg";

import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student4 from "../assets/student4.jpg";
import student5 from "../assets/student5.jpg";
import student6 from "../assets/student6.jpg";
import student7 from "../assets/student7.jpg";
import student8 from "../assets/student8.jpg";

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
    commiteName: "Sensei Jorge A Borjas",
    description: "Ph.D Founder / CEO",
  },
  {
    committeePicture: Committee1,
    commiteName: "Dr. Simon Kook",
    description: "Global General Secretary",
  },
  // {
  //   committeePicture: committee21,
  //   commiteName: "Gilber Sandoval",
  //   description: "International Director of Jiu-Jitsu",
  // },
  {
    committeePicture: committee20,
    commiteName: "Sensei Fernando Velasquez",
    description: "President of World Bushido Federation Honduras",
  },
  {
    committeePicture: committe21,
    commiteName: "Sensei Al Urquidez",
    description: "Counselor of Security",
  },
  {
    committeePicture: committee22,
    commiteName: "Sensei Warfus Powell",
    description: "Sensei of World Bushido Federation",
  },
  {
    committeePicture: committee23,
    commiteName: "Si - Gung Angel Alberto Velásquez",
    description: "",
  },
  {
    committeePicture: committee24,
    commiteName: "Sensei Mike Pecina",
    description: "Sensei of World Bushido Federation",
  },
  {
    committeePicture: committee25,
    commiteName: "Sensei Jason W. Walters",
    description: "Sensei of World Bushido Federation",
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

export const students: Student[] = [
  {
    studentPhoto: student1,
    studentName: "Jennifer Montserrat Bustillo Córdova",
    dateOfBirth: "30 de septiembre de 2015",
    trainingTime: "2 años 7 meses O sea  desde febrero 2022",
    description: "",
  },
  {
    studentPhoto: student2,
    studentName: "Hector Santiago Velasquez Gonzalez",
    dateOfBirth: "Nacio 5 de Octubre de 2020 - 4 años",
    trainingTime: "Entrena desde : Enero 2022",
    description:
      "Cinta Morada en el programa de LITTLE HEROES,  equivalencia cinta amarilla kenpo Kids 1er lugar Ranking  Hondureño 2024 categoria 3 años",
  },
  {
    studentPhoto: student8,
    studentName: "Fredy Orlando Almendares Godoy",
    dateOfBirth: "14 de Enero 2010",
    trainingTime: "4 años de entreno",
    description:
      "Cinta negra Junior Kenpo, Campeon Nacional del Ranking Hondureño en combates, y Katas",
  },
  {
    studentPhoto: student4,
    studentName: "Danna Valentina Garay Rubio",
    dateOfBirth: "8 de Enero 2016",
    trainingTime: "4 años",
    description:
      "Cinta negra Little Heroes con equivalencia en Cinta verde Kids Kenpo",
  },
  {
    studentPhoto: student5,
    studentName: "Ivanna Maria Garay Rubio",
    dateOfBirth: "16 de Septiembre de 2018",
    trainingTime: "3 años",
    description:
      "Cinta cafe Little Heroes con equivalencia en Kids Kenpo de cinta. Ah ganado premios en combate de 1er y segundo lugar",
  },
  {
    studentPhoto: student6,
    studentName: "Gabriel Isaac Narvaez Arrazola",
    dateOfBirth: "19 de Febrero de 2015",
    trainingTime: "desde 5 de Enero de 2023",
    description: "",
  },
  {
    studentPhoto: student7,
    studentName: "Sensei Ramses Gonzales",
    dateOfBirth: "1 de Abril 2005",
    trainingTime: "5 años",
    description:
      "Cinta Negra Hawaiian Kenpo, Instructor Kick Boxing, Campeon Centro Americano combate Continuo y puntos, Seleccionado Karate deportivo Honduras, Instructor para PRO MARTIAL ARTS, Campeon Nacional Kick Boxing, curso de Psicoterapia infatil",
  },
];

export const socialMedia: SocialMediaIcon[] = [
  {
    socialMediaIcon: FaYoutube,
    socialMediaLink: "https://youtube.com/@wbf_jb?si=2_WP_QlR8EjExF4t",
    socialMediaName: "YouTube",
  },
  {
    socialMediaIcon: FaFacebookSquare,
    socialMediaLink:
      "https://www.facebook.com/share/9F43K9v56Eb4aqA4/?mibextid=WC7FNe",
    socialMediaName: "Facebook",
  },
  {
    socialMediaIcon: RiInstagramFill,
    socialMediaLink: "https://www.instagram.com/wbf_jb?igsh=OHFpNGdseWg1Y3R0",
    socialMediaName: "Instagram",
  },
  {
    socialMediaIcon: FaTiktok,
    socialMediaLink: "https://www.tiktok.com/@wbf_jb?_t=8kA2RmqeHbB&_r=1",
    socialMediaName: "TikTok",
  },
];

export const ShieldsLogo = [
  {
    shield: Shield2,
  },
  {
    shield: Shield3,
  },
  {
    shield: Shield4,
  },
  {
    shield: Shield5,
  },
  {
    shield: Shield7,
  },
  {
    shield: Shield8,
  },
  {
    shield: Shield9,
  },
  {
    shield: Shield10,
  },
  {
    shield: Shield11,
  },
  {
    shield: Shield12,
  },
  {
    shield: Shield13,
  },
  {
    shield: Shield15,
  },
  {
    shield: Shield16,
  },
  {
    shield: Shield17,
  },
  {
    shield: Shield18,
  },
  {
    shield: Shield19,
  },
  {
    shield: Shield20,
  },
  {
    shield: Shield21,
  },
  {
    shield: Shield22,
  },
  {
    shield: Shield23,
  },
  {
    shield: Shield24,
  },
];
