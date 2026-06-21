import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Alternating_Floor_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["abdominals","shoulders","triceps"])

export default function ExerciseAlternatingFloorPressMuscleMap({ title = "Alternating Floor Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
