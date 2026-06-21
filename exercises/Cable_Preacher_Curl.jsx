import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Preacher_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseCablePreacherCurlMuscleMap({ title = "Cable Preacher Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
