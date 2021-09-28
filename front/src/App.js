import { BrowserRouter as Router } from "react-router-dom";

import PublicRoute from "./lib/PublicRoute.js";
import PrivateRoute from "./lib/PrivateRoute";
import Main from "./pages/Main/index.jsx";
import Header from "./components/Header/index.jsx";
import LogIn from "./pages/LogIn/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import MyPage from "./pages/MyPage/index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <PublicRoute path="/" exact={true} component={Main} />
        <PublicRoute path="/login" exact={true} component={LogIn} />
        <PublicRoute path="/signup" exact={true} component={SignUp} />
        <PublicRoute path="/mypage" exact={true} component={MyPage} />

      </Router>
    </div>
  );
}

export default App;
