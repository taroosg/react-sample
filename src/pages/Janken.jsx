import { useState } from 'react';
import { ActionButton } from "../components/ActionButton.jsx";

export const Janken = () => {

  const [jankenResult, setJankenResult] = useState({ myHand: '入力待ち', comHand: '待機中', 'result': '未対戦' });

  const getJankenResult = (myHand) => {
    const hand = ["グー", "チョキ", "パー"];
    const myIndex = hand.indexOf(myHand);
    const comIndex = Math.floor(Math.random() * 3);
    const resultSheet = [
      ["Draw", "Win", "Lose"],
      ["Lose", "Draw", "Win"],
      ["Win", "Lose", "Draw"],
    ];
    return {
      myHand: myHand,
      comHand: hand[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  };

  const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
    setJankenResult(result);
  }

  return (
    <>
      <p>じゃんけんの画面</p>
      <ActionButton
        text="グー"
        action={() => getJanken("グー")}
      />
      <ActionButton
        text="チョキ"
        action={() => getJanken("チョキ")}
      />
      <ActionButton
        text="パー"
        action={() => getJanken("パー")}
      />
      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>
    </>
  )
}