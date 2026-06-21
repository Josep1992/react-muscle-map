import {
  ExerciseMuscleMap,
  getExerciseTargets,
  MuscleMap,
  type ExerciseId,
  type MuscleGroup
} from 'react-muscle-map'
import BarbellFullSquatMuscleMap from 'react-muscle-map/exercises/Barbell_Full_Squat'

const exerciseId: ExerciseId = 'Barbell_Full_Squat'
const primaryMuscles: MuscleGroup[] = ['quadriceps']

getExerciseTargets(exerciseId)

const examples = (
  <>
    <ExerciseMuscleMap exerciseId={exerciseId} className="map" />
    <MuscleMap primaryMuscles={primaryMuscles} secondaryMuscles={['glutes']} />
    <BarbellFullSquatMuscleMap idPrefix="squat" />
  </>
)

// @ts-expect-error Unknown exercise IDs must fail at compile time.
const invalidExercise = <ExerciseMuscleMap exerciseId="Not_An_Exercise" />

export { examples, invalidExercise }
