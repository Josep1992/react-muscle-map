import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Kneeling_Cable_Crunch_With_Alternating_Oblique_Twists"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseKneelingCableCrunchWithAlternatingObliqueTwistsMuscleMap({ title = "Kneeling Cable Crunch With Alternating Oblique Twists muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
