// 在 pages/CreatePackageLabelPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PackageHistoryandReprintPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="system-logout">
        <a
          href="#"
          style={{ marginRight: "10px", color: "blue" }}
          onClick={() => navigate(-1)}
        >
          Back
        </a>
        <a href="#" style={{ marginRight: "10px", color: "blue" }}>
          System
        </a>
        <button type="button" className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default PackageHistoryandReprintPage;
