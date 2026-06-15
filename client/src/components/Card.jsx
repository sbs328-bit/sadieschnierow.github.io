import { useState } from 'react'
import Button from './Button';


export default function Card({ title, description, imgUri, link, bgColor }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isTouchDevice = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function flipCard() {
    if (isTouchDevice) setIsFlipped(prev => !prev)
  }

  function handleMouseEnter() {
    if (!isTouchDevice) setIsFlipped(true)
  }

  function handleMouseLeave() {
    if (!isTouchDevice) setIsFlipped(false)
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: bgColor }}
      onClick={flipCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isFlipped
        ? <img className="card-image" src={imgUri} alt={title} />
        : <div className="card-content" >
            <h3>{title}</h3>
            <p>{description}</p>
            {!!link && <Button url={link}>See more</Button>}
          </div>
      }
    </div>
  )
}
