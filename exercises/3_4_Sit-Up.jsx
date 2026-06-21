import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "3_4_Sit-Up"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function Exercise34SitUpMuscleMap({ title = "3/4 Sit-Up muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
