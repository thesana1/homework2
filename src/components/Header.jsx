import React from 'react'

export default function Header({textconent="home page"}) {
  return (
    <header className="header">
      <h1>{textconent}</h1>
    </header>
  );
}

