import {
  FuckingExerciseSickness,
  FuckingExerciseType,
  FuckingExerciseUnits,
} from './enums';

export * from './enums';

export type FuckingExerciseParams = {
  readonly sickness: FuckingExerciseSickness;
};

export type FuckingMinMax = {
  readonly max: number;
  readonly min: number;
};

export type FuckingMinMaxForSickness = {
  readonly [key in FuckingExerciseSickness]: FuckingMinMax;
};

export type FuckingPromptCallbackProps = {
  readonly units: FuckingExerciseUnits;
  readonly value: number;
};

export type FuckingExercise = {
  readonly displayName: string;
  readonly minmax: FuckingMinMaxForSickness;
  readonly units: FuckingExerciseUnits;
  readonly weighting: number;
};

export type FuckingExercises = {
  readonly [key in FuckingExerciseType]: FuckingExercise;
};
