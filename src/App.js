import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  return (
    <div className="app">
      <h1>the user is ...</h1>
      <Login />
    </div>
  );
}

export default App;
