import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePackageLabelPage from "./pages/CreatePackageLabelPage"; // 引入页面组件
import HomeNavigateButton from "./components/HomeNavigateButton"; // 引入 NavigateButton 组件
import SearchPackageandReprintPage from "./pages/SearchPackageandReprintPage";
import PackageHistoryandReprintPage from "./pages/PackageHistoryandReprintPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-page">
          <div className="col-12 home-title">
            <h1>Package Label Management Tool</h1>
          </div>

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
