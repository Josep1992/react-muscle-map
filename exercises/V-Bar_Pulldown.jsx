import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "V-Bar_Pulldown"
export const primaryMuscles = Object.freeze(["lats"])
export const secondaryMuscles = Object.freeze(["biceps","middle back","shoulders"])

export default function ExerciseVBarPulldownMuscleMap({ title = "V-Bar Pulldown muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
