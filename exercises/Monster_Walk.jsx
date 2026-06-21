import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Monster_Walk"
export const primaryMuscles = Object.freeze(["abductors"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseMonsterWalkMuscleMap({ title = "Monster Walk muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
