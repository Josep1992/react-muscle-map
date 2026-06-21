import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Zottman_Preacher_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseZottmanPreacherCurlMuscleMap({ title = "Zottman Preacher Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
