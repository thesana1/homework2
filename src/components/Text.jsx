import React from 'react'


export default function Text({ textColor="red", textContent="rame", textSize="16px",}) {
  return (
    <h1 style={{
      color: textColor,
      fontSize: textSize,
    }}>
      {textContent}
    </h1> 
  )
}


