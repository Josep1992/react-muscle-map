import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent-Knee_Hip_Raise"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseBentKneeHipRaiseMuscleMap({ title = "Bent-Knee Hip Raise muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
