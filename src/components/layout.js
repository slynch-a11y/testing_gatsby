import React from "react"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
        <h1 style={{ display: `inline` }}>A11y Issues</h1>
      
    </header>
  
    {children}
    
  </div>
)