import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Bent_Press"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["glutes","hamstrings","lower back","quadriceps","shoulders","triceps"])

export default function ExerciseBentPressMuscleMap({ title = "Bent Press muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
