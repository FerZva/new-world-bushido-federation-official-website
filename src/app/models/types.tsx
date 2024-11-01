import { StaticImageData } from "next/image";

export type LandingPageButtonProps = {
  description: string;
  linkTo: string;
};

export type Student = {
  studentPhoto?: StaticImageData;
  studentName?: string;
  dateOfBirth?: string;
  trainingTime: string;
  description?: string;
};
