import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Push_Press_-_Behind_the_Neck"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["calves","quadriceps","triceps"])

export default function ExercisePushPressBehindTheNeckMuscleMap({ title = "Push Press - Behind the Neck muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
