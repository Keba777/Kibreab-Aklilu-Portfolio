import { useState, useEffect } from "react";

const ColorModeSwitch = () => {
  const [darkColorMode, setDarkColorMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkColorMode ? "night" : "cupcake"
    );
  }, [darkColorMode]);

  const handleCheck = () => {
    setDarkColorMode((prevColorMode) => !prevColorMode);
  };

  return (
    <span className="flex ">
      <input
        type="checkbox"
        className="toggle toggle-md bg-green-900"
        checked={darkColorMode}
        onChange={handleCheck}
      />
      <p className="pl-1">Dark Mode</p>
    </span>
  );
};

export default ColorModeSwitch;
