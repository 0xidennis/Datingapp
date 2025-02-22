import React from 'react'

const Paperclips = () => {
    const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // Triggers file selection
  };
  return (
    <div>
        
    </div>
  )
}

export default Paperclips