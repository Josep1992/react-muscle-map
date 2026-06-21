import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cross_Over_-_With_Bands"
export const primaryMuscles = Object.freeze(["chest"])
export const secondaryMuscles = Object.freeze(["biceps","shoulders"])

export default function ExerciseCrossOverWithBandsMuscleMap({ title = "Cross Over - With Bands muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
