import { IconType } from "react-icons";

export interface Pages {
  id: number;
  pageName: string;
  pageRoute: string;
}

export interface SocialMediaIcon {
  socialMediaIcon: IconType;
  socialMediaLink: string;
  socialMediaName: string;
}
