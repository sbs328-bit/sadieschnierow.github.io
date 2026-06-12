import { useState } from 'react';

export default function Project({ title, description, image }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((current) => !current);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`project-card ${flipped ? 'flipped' : ''}`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      aria-pressed={flipped}
    >
      <div className="project-card-inner">
        <div
          className="project-card-front"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="project-card-back">
          <div className="project-card-content">
            <h4>{title}</h4>
            <p>{description}</p>
            <button
              type="button"
              className="project-card-btn"
              onClick={(event) => event.stopPropagation()}
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
