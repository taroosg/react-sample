import { useState } from "react";
import { ActionButton } from "../components/ActionButton.jsx";

export const Omikuji = () => {

  const getOmikuji = () => {
    const result = ['大吉', '中吉', '小吉', '凶', '大凶'][Math.floor(Math.random() * 5)];
    console.log(result)
  }

  return (
    <>
      <p>おみくじの画面</p>
      <ActionButton
        text="おみくじをひく"
        action={getOmikuji}
      />
    </>
  )
}