import "./App.css";
import "../src/assets/scss/style.scss";
import TheLayout from "./components/MainLayout/TheLayout";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/">
          <TheLayout />
        </Route>
        <Redirect from="/" to="/" />
      </Switch>
    </>
  );
}

export default App;
