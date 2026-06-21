import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Ab_Roller"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseAbRollerMuscleMap({ title = "Ab Roller muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
