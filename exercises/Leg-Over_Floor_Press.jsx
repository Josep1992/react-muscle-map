import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Leg-Over_Floor_Press"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["shoulders","triceps"])

export default function ExerciseLegOverFloorPressMuscleMap({ title = "Leg-Over Floor Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
