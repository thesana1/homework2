import React from 'react'

export default function Button({backgroundColor="red", textContent="Click me", width="100px",height="50px",color='black'}) {
  return (
    <div>
        <button style={{
            backgroundColor: backgroundColor,
            width: width,
            height: height,
            color: color
        }}>
            {textContent}
        </button>
    </div>
  )
}
