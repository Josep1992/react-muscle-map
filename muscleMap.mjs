export const MUSCLE_GROUPS = Object.freeze([
  'abdominals',
  'abductors',
  'adductors',
  'biceps',
  'calves',
  'chest',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'lower back',
  'middle back',
  'neck',
  'quadriceps',
  'shoulders',
  'traps',
  'triceps'
])

const MUSCLE_GROUP_SET = new Set(MUSCLE_GROUPS)

export function getMuscleState({ muscle, primaryMuscles = [], secondaryMuscles = [] }) {
  if (primaryMuscles.includes(muscle)) return 'primary'
  if (secondaryMuscles.includes(muscle)) return 'secondary'
  return 'inactive'
}

export function validateMuscleGroups(muscles) {
  return muscles.filter((muscle) => !MUSCLE_GROUP_SET.has(muscle))
}

export function toMuscleId(muscle) {
  return `muscle-${muscle.replaceAll(' ', '-')}`
}
