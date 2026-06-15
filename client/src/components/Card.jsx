import { useState, useRef } from 'react'
import Button from './Button';

function clampColorDarkness(r, g, b, maxLuminance = 0.7) {
  // Calculate relative luminance (perceptual brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance <= maxLuminance) {
    return { r, g, b }; // already dark enough
  }

  // Scale down all channels proportionally to hit the target luminance
  const scale = maxLuminance / luminance;
  return {
    r: Math.round(r * scale),
    g: Math.round(g * scale),
    b: Math.round(b * scale),
  };
}

function getDominantColor(imgEl, maxLuminance = 0.7) {
  const canvas = document.createElement('canvas');
  canvas.width = imgEl.naturalWidth;
  canvas.height = imgEl.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imgEl, 0, 0);

  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let r = 0, g = 0, b = 0, count = 0;

  for (let i = 0; i < data.length; i += 4 * 10) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  const avg = {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
  };

  const clamped = clampColorDarkness(avg.r, avg.g, avg.b, maxLuminance);
  return `rgb(${clamped.r}, ${clamped.g}, ${clamped.b})`;
}

export default function Card({ imgUri, title, description, link }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [bgColor, setBgColor] = useState('#7A93AC');
  const [cardHeight, setCardHeight] = useState(null);
  const cardRef = useRef(null);

  const isTouchDevice = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function handleImageLoad(e) {
    const color = getDominantColor(e.target);
    setBgColor(color);
    setCardHeight(cardRef.current?.offsetHeight);
  }

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
      ref={cardRef}
    >
      {!isFlipped
        ? <img className="card-image" src={imgUri} alt={title} onLoad={handleImageLoad} />
        : <div className="card-content" style={{ height: cardHeight }}>
            <h3>{title}</h3>
            <p>{description}</p>
            {!!link && <Button>Read more</Button>}
          </div>
      }
    </div>
  )
}
