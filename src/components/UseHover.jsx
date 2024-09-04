import { useState } from 'react';

function UseHover() {
  const [hoveredId, setHoveredId] = useState(null);

  const onMouseEnter = (id) => {
    setHoveredId(id);
  };

  const onMouseLeave = () => {
    setHoveredId(null);
  };

  return { hoveredId, onMouseEnter, onMouseLeave };
}

export default UseHover;