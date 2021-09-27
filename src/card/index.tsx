import React, { memo } from "react";
import { FC } from "react";

interface Props {
  content: string;
  onClick: () => void;
}

const Card: FC<Props> = memo(({ content, onClick }) => {
  console.log("card========");

  return <div onClick={onClick}>{content}</div>;
});

export default Card;
