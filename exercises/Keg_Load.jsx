import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Keg_Load"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["abdominals","biceps","calves","forearms","glutes","hamstrings","middle back","quadriceps","shoulders","traps"])

export default function ExerciseKegLoadMuscleMap({ title = "Keg Load muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
