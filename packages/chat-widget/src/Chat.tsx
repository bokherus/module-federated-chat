import React, { useState } from "react";

interface ChatProps {
  locale: string;
  initialCount?: number;
}

const Chat: React.FC<ChatProps> = (props) => {
  const [count, setCount] = useState(props.initialCount ?? 0);
  const handleClick = () => void setCount(count + 1);

  return (
    <div className="text-4xl font-bold p-5 bg-blue-500 text-white" onClick={handleClick}>
      {`Chat click count = ${count}`}
      <span>{`Locale = ${props.locale}`}</span>
    </div>
  );
};

export default Chat;
