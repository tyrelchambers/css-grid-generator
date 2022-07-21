import React from "react";

const Header = () => {
  return (
    <header className="p-4 px-6 w-full border-[1px] border-gray-200 flex items-center justify-between">
      <div className="flex items-center">
        <h1>CSS Grid Generator</h1>
      </div>

      <div className="flex items-center">
        <button type="button">Get code</button>
      </div>
    </header>
  );
};

export default Header;
