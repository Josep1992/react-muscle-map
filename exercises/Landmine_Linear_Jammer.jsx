import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Landmine_Linear_Jammer"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","calves","chest","hamstrings","quadriceps","triceps"])

export default function ExerciseLandmineLinearJammerMuscleMap({ title = "Landmine Linear Jammer muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
