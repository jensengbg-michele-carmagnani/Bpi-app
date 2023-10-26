import { Area } from "@qiuz/react-image-map";
export interface AreaType extends Area {
  href?: string;
}
export enum STEPS {
  START = 0,
  LOCATIONPAIN = 1,
  PAINASSESSMENT = 2,
  CAPABILITIESASSESSMENT = 3,
  RESULTS = 4,
}
