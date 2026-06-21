import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Battling_Ropes"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["chest","forearms"])

export default function ExerciseBattlingRopesMuscleMap({ title = "Battling Ropes muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
