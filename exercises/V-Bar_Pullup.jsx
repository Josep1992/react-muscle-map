import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "V-Bar_Pullup"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseVBarPullupMuscleMap({ title = "V-Bar Pullup muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
