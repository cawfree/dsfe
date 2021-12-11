import {FuckingExerciseSickness, FuckingMinMax, FuckingMinMaxForSickness} from "../@types";

export const fuckingMinMaxSicknessForQuantity: FuckingMinMaxForSickness = {
  [FuckingExerciseSickness.PLEB]: {min: 1, max: 5},
  [FuckingExerciseSickness.GYM_BRO]: {min: 10, max: 20},
  [FuckingExerciseSickness.EDDIE_HALL]: {min: 1000, max: 10000},
};

export const fuckingMinMaxSicknessForDurationSeconds: FuckingMinMaxForSickness = {
  [FuckingExerciseSickness.PLEB]: {min: 30, max: 60},
  [FuckingExerciseSickness.GYM_BRO]: {min: 120, max: 5 * 60},
  [FuckingExerciseSickness.EDDIE_HALL]: {min: 60 * 60, max: 24 * 60 * 60},
};

const fuckingMeditationMinMax: FuckingMinMax = {
  max: 1,
  min: 5,
};

export const fuckingMinMaxSicknessForMeditationDurationMinutes: FuckingMinMaxForSickness = {
  [FuckingExerciseSickness.PLEB]: fuckingMeditationMinMax,
  [FuckingExerciseSickness.GYM_BRO]: fuckingMeditationMinMax,
  [FuckingExerciseSickness.EDDIE_HALL]: fuckingMeditationMinMax,
};
