import {FuckingExercise, FuckingExerciseParams} from '../@types';

import fuckingBetween from './fuckingBetween';
import fuckingCreateMessage from './fuckingCreateMessage';

export default function fuckingCreatePrompt({exercise, params}: {
  readonly exercise: FuckingExercise;
  readonly params: FuckingExerciseParams;
}): string {
  const {sickness} = params;
  const {minmax} = exercise;
  const {[sickness]: between} = minmax;
  const value = fuckingBetween(between);
  if (value > 0) {
    const {displayName, units} = exercise;
    return fuckingCreateMessage({
      displayName,
      units,
      value,
    });
  }
  return 'Rest.';
}
