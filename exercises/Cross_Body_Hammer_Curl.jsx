import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cross_Body_Hammer_Curl"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze(["forearms"])

export default function ExerciseCrossBodyHammerCurlMuscleMap({ title = "Cross Body Hammer Curl muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
