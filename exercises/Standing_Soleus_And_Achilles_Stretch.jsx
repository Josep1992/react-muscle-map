import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Standing_Soleus_And_Achilles_Stretch"
export const primaryMuscles = Object.freeze(["calves"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseStandingSoleusAndAchillesStretchMuscleMap({ title = "Standing Soleus And Achilles Stretch muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
