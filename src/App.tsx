import "./App.css";
import { NavbarComponent } from "./components/navbar/navbar-component";
import { TodoComponent } from "./pages/todo/todo-component";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <TodoComponent></TodoComponent>
    </>
  );
}

export default App;
