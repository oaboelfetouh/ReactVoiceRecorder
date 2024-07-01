import React from 'react';
function ButtonComponent() {
 
  const handleClick = () => {
    alert('Button was clicked!');
  };


  return (
    <div>
      <button onClick={handleClick}>Record</button>
    </div>
  );
}

export default ButtonComponent;
