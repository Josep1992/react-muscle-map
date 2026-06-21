import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Pallof_Press_With_Rotation"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["chest","shoulders","triceps"])

export default function ExercisePallofPressWithRotationMuscleMap({ title = "Pallof Press With Rotation muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
