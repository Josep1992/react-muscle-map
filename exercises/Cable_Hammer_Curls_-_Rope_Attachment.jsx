import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Cable_Hammer_Curls_-_Rope_Attachment"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseCableHammerCurlsRopeAttachmentMuscleMap({ title = "Cable Hammer Curls - Rope Attachment muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
