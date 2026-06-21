import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Medicine_Ball_Full_Twist"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["shoulders"])

export default function ExerciseMedicineBallFullTwistMuscleMap({ title = "Medicine Ball Full Twist muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
