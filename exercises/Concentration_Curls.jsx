import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Concentration_Curls"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseConcentrationCurlsMuscleMap({ title = "Concentration Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
