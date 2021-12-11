#!/usr/bin/env node
import yargs from 'yargs/yargs';
import notifier from 'node-notifier';

import {
  FuckingExerciseSickness,
  FuckingExercise,
  FuckingExerciseType,
} from '../@types';
import {FUCKING_EXERCISES, fuckingCreatePrompt} from '../constants';

type Argv = {
  s?: FuckingExerciseSickness;
};

const argv = yargs(process.argv).argv as Argv;

const {s} = argv;

const sickness = Object.values(FuckingExerciseSickness).indexOf(s) >= 0
  ? s as FuckingExerciseSickness
  : FuckingExerciseSickness.PLEB;

const fuckingExerciseTypes =
  Object.values(FuckingExerciseType) as readonly FuckingExerciseType[];

const randomFuckingExerciseType: FuckingExerciseType = fuckingExerciseTypes[
  Math.floor(Math.random() * fuckingExerciseTypes.length)
];

const randomFuckingExercise: FuckingExercise = FUCKING_EXERCISES[randomFuckingExerciseType];

notifier.notify({
  title: 'Do some fucking exercise.',
  message: fuckingCreatePrompt({
    exercise: randomFuckingExercise,
    params: {sickness},
  }),
  wait: false,
});
