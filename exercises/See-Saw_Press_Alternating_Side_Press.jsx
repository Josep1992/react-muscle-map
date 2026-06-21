import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "See-Saw_Press_Alternating_Side_Press"
export const primaryMuscles = Object.freeze(["shoulders"])
export const secondaryMuscles = Object.freeze(["abdominals","triceps"])

export default function ExerciseSeeSawPressAlternatingSidePressMuscleMap({ title = "See-Saw Press (Alternating Side Press) muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
