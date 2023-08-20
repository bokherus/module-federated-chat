import React from "react";

const BrokenChat: React.FC = () => {
    throw new Error('Unable to render');
}

export default BrokenChat;
