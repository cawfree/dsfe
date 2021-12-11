import 'jest';

import {
  FUCKING_EXERCISES,
  fuckingCreateMessage,
  fuckingCreatePrompt,
  FuckingExerciseSickness,
  FuckingExerciseType,
} from '../src';

test('jest::config', () => {
  expect(true).toBeTruthy();
});

test('dsfa:fuckingCreateMessage', () => {
  expect(
    fuckingCreateMessage({
      ...FUCKING_EXERCISES[FuckingExerciseType.PRESSUP],
      value: 1,
    }),
  ).toBe('Do one pressup.');
  expect(
    fuckingCreateMessage({
      ...FUCKING_EXERCISES[FuckingExerciseType.SITUP],
      value: 1,
    }),
  ).toBe('Do one situp.');
  expect(
    fuckingCreateMessage({
      ...FUCKING_EXERCISES[FuckingExerciseType.STAR_JUMPS],
      value: 1,
    }),
  ).toBe('Do one star jump.');
    expect(
      fuckingCreateMessage({
        ...FUCKING_EXERCISES[FuckingExerciseType.PRESSUP],
        value: 10,
      }),
    ).toBe('Do ten pressups.');
    expect(
      fuckingCreateMessage({
        ...FUCKING_EXERCISES[FuckingExerciseType.SITUP],
        value: 10,
      }),
    ).toBe('Do ten situps.');
    expect(
      fuckingCreateMessage({
        ...FUCKING_EXERCISES[FuckingExerciseType.STAR_JUMPS],
        value: 10,
      }),
    ).toBe('Do ten star jumps.');
});

test('dsfa::fuckingCreatePrompt::*', () => {
  const results = Object.values(FuckingExerciseSickness)
    .map((sickness: FuckingExerciseSickness) =>
      Object.values(FuckingExerciseType)
        .map((type: FuckingExerciseType) => {
          const {[type]: exercise} = FUCKING_EXERCISES;
          return fuckingCreatePrompt({
            exercise,
            params: {sickness},
          });
        }),
    );
  expect(Array.isArray(results))
    .toBeTruthy();
});

