import pluralize from 'pluralize';

import {
  FuckingExercises,
  FuckingExerciseType,
  FuckingExerciseUnits,
  FuckingPromptCallbackProps
} from '../@types';

import {
  fuckingMinMaxSicknessForDurationSeconds,
  fuckingMinMaxSicknessForMeditationDurationMinutes,
  fuckingMinMaxSicknessForQuantity,
} from './FUCKING_MIN_MAX_FOR_SICKNESS';

const FUCKING_EXERCISES: FuckingExercises = {
  [FuckingExerciseType.PRESSUP]: {
    displayName: 'pressup',
    minmax: fuckingMinMaxSicknessForQuantity,
    units: FuckingExerciseUnits.QUANTITY,
    weighting: 1,
  },
  [FuckingExerciseType.SITUP]: {
    displayName: 'situp',
    minmax: fuckingMinMaxSicknessForQuantity,
    units: FuckingExerciseUnits.QUANTITY,
    weighting: 1,
  },
  [FuckingExerciseType.STAR_JUMPS]: {
    displayName: 'star jump',
    minmax: fuckingMinMaxSicknessForQuantity,
    units: FuckingExerciseUnits.QUANTITY,
    weighting: 1,
  },
};

export default FUCKING_EXERCISES;
