import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import CreatePackageLabelPage from "./pages/CreatePackageLabelPage"; // 引入页面组件
import HomeNavigateButton from "./components/HomeNavigateButton"; // 引入 NavigateButton 组件
import SearchPackageandReprintPage from "./pages/SearchPackageandReprintPage";
import PackageHistoryandReprintPage from "./pages/PackageHistoryandReprintPage";
import PackageDetailPage from "./pages/PackageDetailPage";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // 在 Router 组件内使用 useLocation
  const showSystemLogout = location.pathname == "/";
  console.log(showSystemLogout);

  return (
    <div className="App">
      <div className="main-page">
        <div className="col-12 home-title">
          <h1>Package Label Management Tool</h1>
        </div>

        {showSystemLogout && (
          <div className="system-logout">
            <a href="#" style={{ marginRight: "10px", color: "blue" }}>
              System
            </a>
            <button type="button" className="btn btn-primary">
              Log Out
            </button>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <div className="home-body">
                <div>
                  <HomeNavigateButton
                    to="/create-package-label"
                    label="Create Package Label"
                  />
                </div>
                <div>
                  <HomeNavigateButton
                    to="/Search-Package-and-Reprint"
                    label="Search Package & Reprint"
                  />
                </div>
                <div>
                  <HomeNavigateButton
                    to="/Package-History-and-Reprint"
                    label="Package History & Reprint"
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/create-package-label"
            element={<CreatePackageLabelPage />}
          />
          <Route
            path="/Search-Package-and-Reprint"
            element={<SearchPackageandReprintPage />}
          />
          <Route
            path="/Package-History-and-Reprint"
            element={<PackageHistoryandReprintPage />}
          />
          <Route
            path="/package-details/:packageid"
            element={<PackageDetailPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
