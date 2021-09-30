import { BrowserRouter as Router } from "react-router-dom";

import PublicRoute from "./lib/PublicRoute.js";
import PrivateRoute from "./lib/PrivateRoute";
import Main from "./pages/Main/index.jsx";
import Header from "./components/Header/index.jsx";
import LogIn from "./pages/LogIn/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";

import MyPage from "./pages/MyPage/index.jsx";

import PreferenceTest from "./pages/PreferenceTest/index.jsx";

import Ranking from "./pages/Ranking/index.jsx";
import EatingHabitsReport from "./pages/EatingHabitsReport/index.jsx";

import Store from "./pages/Store/index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <PrivateRoute path="/" exact={true} component={Main} />
        <PublicRoute path="/login" exact={true} component={LogIn} />
        <PublicRoute path="/signup" exact={true} component={SignUp} />
        <PrivateRoute path="/mypage" exact={true} component={MyPage} />

        <PrivateRoute path="/test" exact={true} component={PreferenceTest} />

        <PrivateRoute path="/ranking" exact={true} component={Ranking} />
        <PrivateRoute
          path="/report"
          exact={true}
          component={EatingHabitsReport}
        />

        <PrivateRoute path="/store" exact={true} component={Store} />
      </Router>
    </div>
  );
}

export default App;
