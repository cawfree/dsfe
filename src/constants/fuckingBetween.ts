import {FuckingMinMax} from '../@types';

export default function fuckingBetween({min, max}: FuckingMinMax): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
