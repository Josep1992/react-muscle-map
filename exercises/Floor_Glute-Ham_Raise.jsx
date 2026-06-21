import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Floor_Glute-Ham_Raise"
export const primaryMuscles = Object.freeze(["hamstrings"])
export const secondaryMuscles = Object.freeze(["calves","glutes"])

export default function ExerciseFloorGluteHamRaiseMuscleMap({ title = "Floor Glute-Ham Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
