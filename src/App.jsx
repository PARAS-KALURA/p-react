import { useState } from "react";

const sizes = {
  small: "w-40 h-40",
  large: "w-72 h-72",
};

const App = () => {
  const [size, setSize] = useState("small");

  return (
    <div className="min-h-screen flex items-center justify-center gap-6  bg-amber-900">
      <div
        className={`bg-blue-600 text-white flex items-center justify-center
          ${sizes[size]} transition-all duration-700`}
      >
        Card
      </div>

      <button
        onClick={() =>
          setSize(size === "small" ? "large" : "small")
        }
        className="px-4 py-2 border"
      >
        Toggle Size
      </button>
    </div>
  );
};

export default App;
