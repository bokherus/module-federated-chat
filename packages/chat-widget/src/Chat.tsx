import React, { useState } from "react";

const Chat: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => void setCount(count + 1);

  return (
    <div className="text-4xl font-bold p-5 bg-blue-500 text-white" onClick={handleClick}>
      {`Chat click count = ${count}`}
    </div>
  );
};

export default Chat;
