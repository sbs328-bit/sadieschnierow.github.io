import { useState } from 'react'
import Button from './Button';

function getDominantColor(imgEl) {
  const canvas = document.createElement('canvas');
  canvas.width = imgEl.naturalWidth;
  canvas.height = imgEl.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imgEl, 0, 0);

  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let r = 0, g = 0, b = 0, count = 0;

  for (let i = 0; i < data.length; i += 4 * 10) { // sample every 10th pixel
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  return `rgb(${Math.round(r/count)}, ${Math.round(g/count)}, ${Math.round(b/count)})`;
}

export default function Card({ imgUri, title, description }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [bgColor, setBgColor] = useState('#7A93AC'); // your default

  const isTouchDevice = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function handleImageLoad(e) {
    const color = getDominantColor(e.target);
    setBgColor(color);
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
    >
      {!isFlipped
        ? <img className="card-image" src={imgUri} alt={title} onLoad={handleImageLoad} />
        : <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <Button>Read more</Button>
          </div>
      }
    </div>
  )
}
