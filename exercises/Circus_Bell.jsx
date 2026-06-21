import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Circus_Bell"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["forearms","glutes","hamstrings","lower back","traps","triceps"])

export default function ExerciseCircusBellMuscleMap({ title = "Circus Bell muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
