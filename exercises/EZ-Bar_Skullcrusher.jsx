import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "EZ-Bar_Skullcrusher"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseEZBarSkullcrusherMuscleMap({ title = "EZ-Bar Skullcrusher muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
