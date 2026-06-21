import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Band_Box_Squat"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abductors","adductors","calves","forearms","glutes","hamstrings","lower back"])

export default function ExerciseReverseBandBoxSquatMuscleMap({ title = "Reverse Band Box Squat muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
