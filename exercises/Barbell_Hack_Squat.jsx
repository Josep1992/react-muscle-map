import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Barbell_Hack_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["calves","forearms","hamstrings"])

export default function ExerciseBarbellHackSquatMuscleMap({ title = "Barbell Hack Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
