import type { ComponentType } from 'react'

import type { ExerciseId, ExerciseMuscleMapProps, MuscleGroup } from './index.js'

declare const ExerciseComponent: ComponentType<Omit<ExerciseMuscleMapProps, 'exerciseId'>>

export const exerciseId: ExerciseId
export const primaryMuscles: readonly MuscleGroup[]
export const secondaryMuscles: readonly MuscleGroup[]
export default ExerciseComponent
