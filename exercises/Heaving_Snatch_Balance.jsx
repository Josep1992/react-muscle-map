import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Heaving_Snatch_Balance"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","forearms","glutes","hamstrings","shoulders","triceps"])

export default function ExerciseHeavingSnatchBalanceMuscleMap({ title = "Heaving Snatch Balance muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
