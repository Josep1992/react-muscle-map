import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Triceps_Pushdown_-_V-Bar_Attachment"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseTricepsPushdownVBarAttachmentMuscleMap({ title = "Triceps Pushdown - V-Bar Attachment muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
