import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Atlas_Stone_Trainer"
export const primaryMuscles = Object.freeze(["lower back"])
export const secondaryMuscles = Object.freeze(["biceps","forearms","glutes","hamstrings","quadriceps"])

export default function ExerciseAtlasStoneTrainerMuscleMap({ title = "Atlas Stone Trainer muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
