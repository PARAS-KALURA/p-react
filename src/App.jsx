import React, { useEffect, useState } from 'react'

const App = () => {
 
  const[size, setSize] = useState("small");

 const sizes = {
  small: "w-40 h-40",
  large: "w-80 h-80",
};

useEffect(() => {
  const savedSize = localStorage.getItem("size");
 
  if(savedSize) {
    setSize(savedSize);
  };

},[]);

useEffect(() => {
 localStorage.setItem("size", size);
},[size]);

  return (
    <>
    <div className='min-h-screen bg-gray-900 flex justify-center items-center gap-7'>
      <div
      className={`text-white bg-red-300 ${sizes[size]} 
      transition-all duration-100  `}>Div</div>
      <button
      onClick={() => 
        setSize(size === "small"? "large": "small")
      }
      className='text-white border rounded px-1 py-1 cursor-pointer hover:scale-110 transition-transform'
      >Toggle</button>
    </div>
    </>
  )
}

export default App