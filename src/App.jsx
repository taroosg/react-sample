import { ActionButton } from "./components/ActionButton";

const App = () => {
  return (
    <>
      <h1>react app</h1>
      <ActionButton
        text="おみくじをひく"
      />
      <ActionButton
        text="じゃんけんをする"
      />
    </>
  );
};
export default App;