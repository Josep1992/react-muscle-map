import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Flexor_Incline_Dumbbell_Curls"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseFlexorInclineDumbbellCurlsMuscleMap({ title = "Flexor Incline Dumbbell Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
