import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Childs_Pose"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["glutes","middle back"])

export default function ExerciseChildsPoseMuscleMap({ title = "Child's Pose muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
