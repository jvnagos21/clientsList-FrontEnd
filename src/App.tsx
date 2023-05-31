import "./App.css";
import UserProvider from "./contexts/users.context";
import { RoutesMain } from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );
}

export default App;
