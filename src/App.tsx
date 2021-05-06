import { GlobalStyle } from "./styles/global";
import { Pomodoro } from "./components/Pomodoro";

const App = () => {
  return (
    <>
      <div>
        <Pomodoro />
      </div>

      <GlobalStyle />
    </>
  );
}

export { App };
