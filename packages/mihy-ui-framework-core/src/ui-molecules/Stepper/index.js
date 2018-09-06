import React from "react";

const Stepper=()=>{
  return(
    <ProgressIndicator currentIndex={3}>
      <ProgressStep label="First step" description="Step 1: Getting Started with Node.js" />
      <ProgressStep label="Second step" description="Step 2: Getting Started with Node.js" />
      <ProgressStep label="Third step" description="Step 3: Getting Started with Node.js" />
      <ProgressStep label="Fourth step" description="Step 4: Getting Started with Node.js" />
      <ProgressStep label="Fifth step" description="Step 5: Getting Started with Node.js" />
    </ProgressIndicator>
  )
}
