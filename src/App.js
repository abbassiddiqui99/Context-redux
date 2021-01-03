import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [state, dispatch] = useStateValue();

  return (
    <div className="app">
      {state.user ? `the user ${state.user} is loggedIN` : `u r not logged in`}
      <Login />
    </div>
  );
}

export default App;
