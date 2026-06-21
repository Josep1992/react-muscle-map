import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Dumbbell_Floor_Press"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["chest","shoulders"])

export default function ExerciseDumbbellFloorPressMuscleMap({ title = "Dumbbell Floor Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
