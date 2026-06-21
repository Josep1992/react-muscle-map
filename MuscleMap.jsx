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
      viewBox="0 0 600 800"
      role="img"
      aria-labelledby={titleId}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>

      <g id={`${resolvedIdPrefix}-body-silhouettes`} className="muscle-map__body">
        <ellipse cx="180" cy="76" rx="28" ry="36" />
        <path d="M165 108 C166 126 161 132 145 139 C117 151 103 174 101 207 C99 245 108 285 101 322 L92 373 C89 392 92 411 101 424 C107 431 113 426 111 417 C108 401 110 385 116 371 L128 333 L132 446 C132 477 135 506 137 529 L143 603 L142 712 L128 746 C125 754 132 758 147 758 L161 758 C166 757 167 752 164 747 L160 720 L180 539 L200 720 L196 747 C193 752 194 757 199 758 L213 758 C228 758 235 754 232 746 L218 712 L217 603 L223 529 C225 506 228 477 228 446 L232 333 L244 371 C250 385 252 401 249 417 C247 426 253 431 259 424 C268 411 271 392 268 373 L259 322 C252 285 261 245 259 207 C257 174 243 151 215 139 C199 132 194 126 195 108 Z" />
        <ellipse cx="420" cy="76" rx="28" ry="36" />
        <path d="M405 108 C406 124 401 132 385 139 C364 145 350 158 345 178 C340 196 341 220 344 244 C347 269 347 293 342 320 L333 371 C330 388 331 405 337 417 C340 424 345 429 349 427 C353 425 353 419 351 412 C348 397 351 381 357 366 L369 333 C370 366 369 405 369 445 C369 476 373 505 376 528 C378 548 380 572 383 603 L382 712 L368 746 C365 754 372 758 387 758 L401 758 C406 757 407 752 404 747 L400 720 L420 539 L440 720 L436 747 C433 752 434 757 439 758 L453 758 C468 758 475 754 472 746 L458 712 L457 603 C460 572 462 548 464 528 C467 505 471 476 471 445 C471 405 470 366 471 333 L483 366 C489 381 492 397 489 412 C487 419 487 425 491 427 C495 429 500 424 503 417 C509 405 510 388 507 371 L498 320 C493 293 493 269 496 244 C499 220 500 196 495 178 C490 158 476 145 455 139 C439 132 434 124 435 108 Z" />
      </g>

      <MuscleGroup muscle="neck" {...groupProps}>
        <path className="muscle-map__anterior-optional" id="muscle-neck-front" d="M165 108 C168 125 163 133 154 138 C162 146 171 150 180 150 C189 150 198 146 206 138 C197 133 192 125 195 108 Z" />
        <path className="muscle-map__posterior-optional" id="muscle-neck-back" d="M405 108 C408 125 403 133 394 138 C402 146 411 150 420 150 C429 150 438 146 446 138 C437 133 432 125 435 108 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="traps" {...groupProps}>
        <path className="muscle-map__posterior-connected" id="muscle-traps-left" d="M386 143 C397 139 407 133 416 127 C417 150 417 174 417 198 C408 198 397 195 389 188 C381 182 376 174 376 165 C376 155 380 147 386 143 Z" />
        <path className="muscle-map__posterior-connected" id="muscle-traps-right" d="M454 143 C443 139 433 133 424 127 C423 150 423 174 423 198 C432 198 443 195 451 188 C459 182 464 174 464 165 C464 155 460 147 454 143 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="shoulders" {...groupProps}>
        <path id="muscle-shoulders-front-left" d="M153 145 C143 142 132 144 123 149 C114 154 109 162 108 171 C107 179 111 186 117 190 C123 193 130 191 135 186 C144 177 150 166 154 155 C155 150 155 147 153 145 Z" />
        <path id="muscle-shoulders-front-right" d="M207 145 C217 142 228 144 237 149 C246 154 251 162 252 171 C253 179 249 186 243 190 C237 193 230 191 225 186 C216 177 210 166 206 155 C205 150 205 147 207 145 Z" />
        <path id="muscle-shoulders-back-left" d="M385 145 C374 142 362 145 353 152 C346 158 343 166 345 173 C347 181 354 186 363 188 C373 185 382 176 387 165 C390 157 389 149 385 145 Z" />
        <path id="muscle-shoulders-back-right" d="M455 145 C466 142 478 145 487 152 C494 158 497 166 495 173 C493 181 486 186 477 188 C467 185 458 176 453 165 C450 157 451 149 455 145 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="chest" {...groupProps}>
        <path id="muscle-chest-left" d="M173 151 C160 149 148 151 141 157 C133 164 130 175 131 187 C132 199 138 207 149 211 C158 214 169 214 176 210 C178 201 178 174 177 160 C177 155 176 153 173 151 Z" />
        <path id="muscle-chest-right" d="M187 151 C200 149 212 151 219 157 C227 164 230 175 229 187 C228 199 222 207 211 211 C202 214 191 214 184 210 C182 201 182 174 183 160 C183 155 184 153 187 151 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="biceps" {...groupProps}>
        <path id="muscle-biceps-left" transform="translate(-5 0)" d="M108 190 C103 200 101 215 102 230 C103 247 107 261 113 270 C120 261 125 245 127 228 C129 213 127 200 124 194 C118 194 113 193 108 190 Z" />
        <path id="muscle-biceps-right" transform="translate(5 0)" d="M252 190 C257 200 259 215 258 230 C257 247 253 261 247 270 C240 261 235 245 233 228 C231 213 233 200 236 194 C242 194 247 193 252 190 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="triceps" {...groupProps}>
        <path id="muscle-triceps-left" transform="translate(-5 0)" d="M347 183 C343 194 341 208 342 224 C343 242 347 258 352 269 C358 262 363 247 365 231 C367 216 366 201 363 190 C357 190 352 188 347 183 Z" />
        <path id="muscle-triceps-right" transform="translate(5 0)" d="M493 183 C497 194 499 208 498 224 C497 242 493 258 488 269 C482 262 477 247 475 231 C473 216 474 201 477 190 C483 190 488 188 493 183 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="forearms" {...groupProps}>
        <path className="muscle-map__anterior-optional" id="muscle-forearms-front-left" transform="translate(-5 0)" d="M105 268 C96 293 96 329 93 362 C99 366 106 366 113 361 L123 277 C117 273 111 270 105 268 Z" />
        <path className="muscle-map__anterior-optional" id="muscle-forearms-front-right" transform="translate(5 0)" d="M255 268 C264 293 264 329 267 362 C261 366 254 366 247 361 L237 277 C243 273 249 270 255 268 Z" />
        <path className="muscle-map__posterior-optional" id="muscle-forearms-back-left" transform="translate(-5 0)" d="M345 268 C336 293 336 329 333 362 C339 366 346 366 353 361 L363 277 C357 273 351 270 345 268 Z" />
        <path className="muscle-map__posterior-optional" id="muscle-forearms-back-right" transform="translate(5 0)" d="M495 268 C504 293 504 329 507 362 C501 366 494 366 487 361 L477 277 C483 273 489 270 495 268 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="abdominals" {...groupProps}>
        <path id="muscle-abdominals" d="M160 221 C164 217 171 216 177 219 C179 224 179 233 177 239 C172 242 164 242 160 239 C157 234 157 226 160 221 Z" />
        <path id="muscle-abdominals-upper-right" d="M183 219 C189 216 196 217 200 221 C203 226 203 234 200 239 C196 242 188 242 183 239 C181 233 181 224 183 219 Z" />
        <path id="muscle-abdominals-middle-left" d="M159 248 C164 244 172 244 177 247 C179 253 179 262 177 268 C172 271 164 271 159 268 C156 262 156 254 159 248 Z" />
        <path id="muscle-abdominals-middle-right" d="M183 247 C188 244 196 244 201 248 C204 254 204 262 201 268 C196 271 188 271 183 268 C181 262 181 253 183 247 Z" />
        <path id="muscle-abdominals-lower-left" d="M159 277 C164 273 172 273 177 276 C179 282 179 291 176 297 C171 300 164 300 159 297 C156 291 156 283 159 277 Z" />
        <path id="muscle-abdominals-lower-right" d="M183 276 C188 273 196 273 201 277 C204 283 204 291 201 297 C196 300 189 300 184 297 C181 291 181 282 183 276 Z" />
        <path id="muscle-abdominals-pelvic-left" d="M160 305 C165 302 172 302 177 305 C179 316 177 334 173 345 C171 350 168 353 165 350 C160 343 157 318 160 305 Z" />
        <path id="muscle-abdominals-pelvic-right" d="M183 305 C188 302 195 302 200 305 C203 318 200 343 195 350 C192 353 189 350 187 345 C183 334 181 316 183 305 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="lats" {...groupProps}>
        <path id="muscle-lats-front-left" d="M137 207 C143 211 149 215 154 219 C153 247 153 285 156 320 C153 326 149 330 145 332 C140 305 136 272 135 244 C134 228 134 215 137 207 Z" />
        <path id="muscle-lats-front-right" d="M223 207 C217 211 211 215 206 219 C207 247 207 285 204 320 C207 326 211 330 215 332 C220 305 224 272 225 244 C226 228 226 215 223 207 Z" />
        <path className="muscle-map__posterior-connected" id="muscle-lats-left" d="M381 181 C390 190 402 195 417 198 L417 324 C417 331 414 335 409 335 C399 335 390 329 384 318 C377 305 373 286 371 265 C369 244 369 224 371 208 C372 195 376 186 381 181 Z" />
        <path className="muscle-map__posterior-connected" id="muscle-lats-right" d="M459 181 C450 190 438 195 423 198 L423 324 C423 331 426 335 431 335 C441 335 450 329 456 318 C463 305 467 286 469 265 C471 244 471 224 469 208 C468 195 464 186 459 181 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="middle back" {...groupProps}>
        <path className="muscle-map__posterior-optional" id="muscle-middle-back-left" d="M397 168 C404 174 411 178 417 180 L417 265 C407 260 400 252 396 240 Z" />
        <path className="muscle-map__posterior-optional" id="muscle-middle-back-right" d="M443 168 C436 174 429 178 423 180 L423 265 C433 260 440 252 444 240 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="lower back" {...groupProps}>
        <path className="muscle-map__posterior-optional" id="muscle-lower-back" d="M397 284 C405 292 412 297 420 300 C428 297 435 292 443 284 L442 354 C434 360 427 363 420 363 C413 363 406 360 398 354 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="glutes" {...groupProps}>
        <path className="muscle-map__posterior-connected" id="muscle-glutes-left" d="M372 377 C383 373 395 372 406 374 C412 375 417 378 420 382 C423 378 428 375 434 374 C445 372 457 373 468 377 C471 389 472 404 469 417 C467 429 456 437 443 439 C433 440 425 436 420 431 C415 436 407 440 397 439 C384 437 373 429 371 417 C368 404 369 389 372 377 Z" />
        <path className="muscle-map__posterior-connected" id="muscle-glutes-right" d="M372 377 C383 373 395 372 406 374 C412 375 417 378 420 382 C423 378 428 375 434 374 C445 372 457 373 468 377 C471 389 472 404 469 417 C467 429 456 437 443 439 C433 440 425 436 420 431 C415 436 407 440 397 439 C384 437 373 429 371 417 C368 404 369 389 372 377 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="adductors" {...groupProps}>
        <path className="muscle-map__anterior-optional" id="muscle-adductors-left" transform="translate(-14 0)" d="M166 377 C171 383 176 388 178 396 L176 500 C165 485 158 463 157 438 Z" />
        <path className="muscle-map__anterior-optional" id="muscle-adductors-right" transform="translate(14 0)" d="M194 377 C189 383 184 388 182 396 L184 500 C195 485 202 463 203 438 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="abductors" {...groupProps}>
        <path className="muscle-map__anterior-optional" id="muscle-abductors-left" transform="translate(-14 0)" d="M135 376 C146 369 157 370 166 379 L157 440 C150 434 142 429 133 427 Z" />
        <path className="muscle-map__anterior-optional" id="muscle-abductors-right" transform="translate(14 0)" d="M225 376 C214 369 203 370 194 379 L203 440 C210 434 218 429 227 427 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="quadriceps" {...groupProps}>
        <path id="muscle-quadriceps-left" transform="translate(-14 0)" d="M136 424 C146 420 157 425 163 437 C167 450 168 473 166 498 C164 524 157 548 147 563 C143 570 138 572 134 566 C127 553 124 532 125 508 C125 480 128 447 136 424 Z" />
        <path id="muscle-quadriceps-right" transform="translate(14 0)" d="M224 424 C214 420 203 425 197 437 C193 450 192 473 194 498 C196 524 203 548 213 563 C217 570 222 572 226 566 C233 553 236 532 235 508 C235 480 232 447 224 424 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="hamstrings" {...groupProps}>
        <path id="muscle-hamstrings-left" transform="translate(-14 0)" d="M376 442 C386 438 399 439 409 446 C414 450 416 456 416 464 C416 487 416 512 412 533 C409 548 401 560 393 566 C388 570 384 567 381 561 C375 547 372 528 372 507 C372 482 373 457 376 442 Z" />
        <path id="muscle-hamstrings-right" transform="translate(14 0)" d="M464 442 C454 438 441 439 431 446 C426 450 424 456 424 464 C424 487 424 512 428 533 C431 548 439 560 447 566 C452 570 456 567 459 561 C465 547 468 528 468 507 C468 482 467 457 464 442 Z" />
      </MuscleGroup>

      <MuscleGroup muscle="calves" {...groupProps}>
        <path id="muscle-calves-front-left" transform="translate(-14 0)" d="M144 571 C151 567 158 573 162 585 C166 600 164 624 162 646 C160 670 157 690 152 699 C149 704 146 705 144 700 C140 685 138 657 138 630 C136 602 138 580 144 571 Z" />
        <path id="muscle-calves-front-right" transform="translate(14 0)" d="M216 571 C209 567 202 573 198 585 C194 600 196 624 198 646 C200 670 203 690 208 699 C211 704 214 705 216 700 C220 685 222 657 222 630 C224 602 222 580 216 571 Z" />
        <path id="muscle-calves-back-left" transform="translate(-14 0)" d="M388 575 C394 569 401 569 407 575 C411 581 413 590 413 601 C413 620 410 649 407 674 C405 687 401 697 396 701 C392 704 389 700 387 692 C384 674 383 650 382 628 C381 605 382 584 388 575 Z" />
        <path id="muscle-calves-back-right" transform="translate(14 0)" d="M452 575 C446 569 439 569 433 575 C429 581 427 590 427 601 C427 620 430 649 433 674 C435 687 439 697 444 701 C448 704 451 700 453 692 C456 674 457 650 458 628 C459 605 458 584 452 575 Z" />
      </MuscleGroup>
    </svg>
  )
}
