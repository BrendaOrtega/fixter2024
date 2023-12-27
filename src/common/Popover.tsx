import { useState } from "react";

export default function Popover({ text }: { text: string }) {
  const [showPop, setShowPop] = useState(false);

  const handleHover = () => {
    setShowPop(true);
  };
  return (
    <div>
      <button
        className="bg-blue-500 border-4"
        onMouseEnter={handleHover}
        onMouseLeave={() => setShowPop(false)}
      >
        hola
      </button>
      {showPop && <div>{text}</div>}
    </div>
  );
}
