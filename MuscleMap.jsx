import { Children, cloneElement, isValidElement, useId } from 'react'
import { getMuscleState, toMuscleId } from './muscleMap.mjs'
import './muscle-map.css'

function MuscleGroup({ idPrefix, muscle, primaryMuscles, secondaryMuscles, children }) {
  const state = getMuscleState({ muscle, primaryMuscles, secondaryMuscles })
  const muscleId = toMuscleId(muscle)
  const groupId = `${idPrefix}-${muscleId}`
  const scopedChildren = Children.map(children, (child) => {
    if (!isValidElement(child) || !child.props.id) return child

    const childId = child.props.id.replace(/^muscle-/, '')
    return cloneElement(child, { id: `${groupId}-${childId}` })
  })

  return (
    <g
      id={groupId}
      className="muscle-map__group"
      data-muscle={muscle}
      data-state={state}
    >
      {scopedChildren}
    </g>
  )
}

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
  const groupProps = { idPrefix: resolvedIdPrefix, primaryMuscles, secondaryMuscles }

  return (
    <svg
      {...svgProps}
      className={`muscle-map ${className}`.trim()}
      viewBox="0 0 800 800"
      role="img"
      aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>

      <g id={`${resolvedIdPrefix}-body-silhouettes`} className="muscle-map__body">
        <circle cx="250" cy="86" r="38" />
        <path d="M218 124 C193 143 178 182 178 229 L183 391 C184 426 192 460 205 490 L218 718 L244 718 L250 510 L256 718 L282 718 L295 490 C308 460 316 426 317 391 L322 229 C322 182 307 143 282 124 Z" />
        <circle cx="550" cy="86" r="38" />
        <path d="M518 124 C493 143 478 182 478 229 L483 391 C484 426 492 460 505 490 L518 718 L544 718 L550 510 L556 718 L582 718 L595 490 C608 460 616 426 617 391 L622 229 C622 182 607 143 582 124 Z" />
      </g>

      <MuscleGroup muscle="neck" {...groupProps}>
        <path id="muscle-neck-front" d="M236 122 L264 122 L270 151 L230 151 Z" />
        <path id="muscle-neck-back" d="M536 122 L564 122 L570 151 L530 151 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="traps" {...groupProps}>
        <path id="muscle-traps-left" d="M500 151 L536 132 L548 160 L533 214 L493 184 Z" />
        <path id="muscle-traps-right" d="M600 151 L564 132 L552 160 L567 214 L607 184 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="shoulders" {...groupProps}>
        <path id="muscle-shoulders-front-left" d="M229 153 C200 147 181 164 180 196 C199 203 215 196 229 181 Z" />
        <path id="muscle-shoulders-front-right" d="M271 153 C300 147 319 164 320 196 C301 203 285 196 271 181 Z" />
        <path id="muscle-shoulders-back-left" d="M529 153 C500 147 481 164 480 196 C499 203 515 196 529 181 Z" />
        <path id="muscle-shoulders-back-right" d="M571 153 C600 147 619 164 620 196 C601 203 585 196 571 181 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="chest" {...groupProps}>
        <path id="muscle-chest-left" d="M231 157 C210 155 196 167 196 194 C198 219 213 231 244 226 L246 163 Z" />
        <path id="muscle-chest-right" d="M269 157 C290 155 304 167 304 194 C302 219 287 231 256 226 L254 163 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="biceps" {...groupProps}>
        <path id="muscle-biceps-left" d="M184 204 C171 217 170 256 181 282 C196 270 202 229 194 207 Z" />
        <path id="muscle-biceps-right" d="M316 204 C329 217 330 256 319 282 C304 270 298 229 306 207 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="triceps" {...groupProps}>
        <path id="muscle-triceps-left" d="M484 204 C471 217 470 256 481 282 C496 270 502 229 494 207 Z" />
        <path id="muscle-triceps-right" d="M616 204 C629 217 630 256 619 282 C604 270 598 229 606 207 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="forearms" {...groupProps}>
        <path id="muscle-forearms-front-left" d="M179 286 C169 311 169 354 180 386 L192 376 L195 287 Z" />
        <path id="muscle-forearms-front-right" d="M321 286 C331 311 331 354 320 386 L308 376 L305 287 Z" />
        <path id="muscle-forearms-back-left" d="M479 286 C469 311 469 354 480 386 L492 376 L495 287 Z" />
        <path id="muscle-forearms-back-right" d="M621 286 C631 311 631 354 620 386 L608 376 L605 287 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="abdominals" {...groupProps}>
        <path id="muscle-abdominals" d="M226 236 Q250 226 274 236 L270 348 Q250 370 230 348 Z" />
        <path className="muscle-map__seam" d="M250 233 V356 M229 267 H271 M228 301 H272 M229 334 H271" />
      </MuscleGroup>

      <MuscleGroup muscle="lats" {...groupProps}>
        <path id="muscle-lats-left" d="M493 198 L538 213 L540 322 L510 359 L495 300 Z" />
        <path id="muscle-lats-right" d="M607 198 L562 213 L560 322 L590 359 L605 300 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="middle back" {...groupProps}>
        <path id="muscle-middle-back-left" d="M539 177 L548 170 L548 315 L515 295 L515 216 Z" />
        <path id="muscle-middle-back-right" d="M561 177 L552 170 L552 315 L585 295 L585 216 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="lower back" {...groupProps}>
        <path id="muscle-lower-back" d="M518 319 L548 306 L552 306 L582 319 L576 373 L524 373 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="glutes" {...groupProps}>
        <path id="muscle-glutes-left" d="M510 376 Q548 360 548 402 Q544 445 512 436 Q496 410 510 376 Z" />
        <path id="muscle-glutes-right" d="M590 376 Q552 360 552 402 Q556 445 588 436 Q604 410 590 376 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="adductors" {...groupProps}>
        <path id="muscle-adductors-left" d="M231 382 L247 390 L245 496 L224 455 Z" />
        <path id="muscle-adductors-right" d="M269 382 L253 390 L255 496 L276 455 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="abductors" {...groupProps}>
        <path id="muscle-abductors-left" d="M207 376 Q224 367 237 386 L221 456 L202 434 Z" />
        <path id="muscle-abductors-right" d="M293 376 Q276 367 263 386 L279 456 L298 434 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="quadriceps" {...groupProps}>
        <path id="muscle-quadriceps-left" d="M202 438 Q222 422 242 449 L240 535 Q223 568 205 538 Z" />
        <path id="muscle-quadriceps-right" d="M298 438 Q278 422 258 449 L260 535 Q277 568 295 538 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="hamstrings" {...groupProps}>
        <path id="muscle-hamstrings-left" d="M506 443 Q525 429 543 449 L540 554 Q522 573 507 542 Z" />
        <path id="muscle-hamstrings-right" d="M594 443 Q575 429 557 449 L560 554 Q578 573 593 542 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="calves" {...groupProps}>
        <path id="muscle-calves-front-left" d="M211 565 Q230 548 239 580 L237 660 L219 678 Z" />
        <path id="muscle-calves-front-right" d="M289 565 Q270 548 261 580 L263 660 L281 678 Z" />
        <path id="muscle-calves-back-left" d="M511 565 Q533 543 542 583 L538 657 L520 679 Z" />
        <path id="muscle-calves-back-right" d="M589 565 Q567 543 558 583 L562 657 L580 679 Z" />
      </MuscleGroup>
    </svg>
  )
}
