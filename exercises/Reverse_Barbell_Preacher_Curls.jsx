import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Reverse_Barbell_Preacher_Curls"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseReverseBarbellPreacherCurlsMuscleMap({ title = "Reverse Barbell Preacher Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
