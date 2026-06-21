import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Chair_Upper_Body_Stretch"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["biceps","chest"])

export default function ExerciseChairUpperBodyStretchMuscleMap({ title = "Chair Upper Body Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
