import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Spell_Caster"
export const primaryMuscles = Object.freeze(["abdominals"])
export const secondaryMuscles = Object.freeze(["glutes","shoulders"])

export default function ExerciseSpellCasterMuscleMap({ title = "Spell Caster muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
