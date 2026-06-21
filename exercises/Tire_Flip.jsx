import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Tire_Flip"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","chest","forearms","glutes","hamstrings","lower back","shoulders","traps","triceps"])

export default function ExerciseTireFlipMuscleMap({ title = "Tire Flip muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
