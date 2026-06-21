import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Preacher_Hammer_Dumbbell_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExercisePreacherHammerDumbbellCurlMuscleMap({ title = "Preacher Hammer Dumbbell Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
