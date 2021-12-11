import pluralize from 'pluralize';
import {toWords} from 'number-to-words';
import {FuckingExerciseUnits, FuckingPromptCallbackProps} from '../@types';

export default function fuckingCreateMessage({
  displayName,
  value,
  units,
}: FuckingPromptCallbackProps & {
  readonly displayName: string;
}): string {
  if (units === FuckingExerciseUnits.DURATION_MINUTES) {
    return `${displayName} for ${toWords(value)} ${pluralize('minute', value)}.`;
  } else if (units === FuckingExerciseUnits.DURATION_SECONDS) {
    return `${displayName} for ${toWords(value)} ${pluralize('seconds', value)}.`;
  } else if (units === FuckingExerciseUnits.QUANTITY) {
    return `Do ${toWords(value)} ${pluralize(displayName, value)}.`;
  }
  throw new Error(`Encountered unexpected units, "${String(units)}".`);
}
