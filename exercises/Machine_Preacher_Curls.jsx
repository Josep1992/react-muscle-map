import MuscleMap from '../MuscleMap.jsx'

export const exerciseId = "Machine_Preacher_Curls"
export const primaryMuscles = Object.freeze(["biceps"])
export const secondaryMuscles = Object.freeze([])

export default function ExerciseMachinePreacherCurlsMuscleMap({ title = "Machine Preacher Curls muscle map", ...props }) {
  return (
    <MuscleMap
      {...props}
      title={title}
      primaryMuscles={primaryMuscles}
      secondaryMuscles={secondaryMuscles}
    />
  )
}
