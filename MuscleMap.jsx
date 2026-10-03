import { useId } from 'react'
import { BackArtwork, FrontArtwork } from './BodyArtwork.jsx'
import './muscle-map.css'

export default function MuscleMap({
  primaryMuscles = [],
  secondaryMuscles = [],
  className = '',
  title = 'Muscle map',
  idPrefix,
  ...svgProps
}) {
  const generatedId = useId().replaceAll(':', '')
  const resolvedIdPrefix = idPrefix ?? `muscle-map-${generatedId}`
  const titleId = `${resolvedIdPrefix}-title`
  const artworkProps = { idPrefix: resolvedIdPrefix, primaryMuscles, secondaryMuscles }

  return (
    <svg
      {...svgProps}
      className={`muscle-map ${className}`.trim()}
      viewBox="0 0 1320.92 1206.46"
      fill="none"
      role="img"
      aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>
      <FrontArtwork {...artworkProps} />
      <g transform="translate(660.46 0)">
        <BackArtwork {...artworkProps} />
      </g>
    </svg>
  )
}
