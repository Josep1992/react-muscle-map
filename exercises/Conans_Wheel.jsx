import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Conans_Wheel"
export const primaryMuscles = Object.freeze(["quadriceps"])
export const secondaryMuscles = Object.freeze(["abdominals","biceps","calves","forearms","lower back","shoulders","traps"])

export default function ExerciseConansWheelMuscleMap({ title = "Conan's Wheel muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
