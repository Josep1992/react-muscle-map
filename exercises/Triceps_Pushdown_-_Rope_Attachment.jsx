import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Triceps_Pushdown_-_Rope_Attachment"
export const primaryMuscles = Object.freeze(["triceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseTricepsPushdownRopeAttachmentMuscleMap({ title = "Triceps Pushdown - Rope Attachment muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
