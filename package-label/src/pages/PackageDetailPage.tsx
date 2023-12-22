import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface SnListItem {
  sn: string;
  qty: number;
}

interface TableData {
  packageid: string;
  upc: string;
  sn: string;
  scanTime: string;
  createUser: string;
  qty: number;
}

const PackageDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<TableData[]>([]);
  const handleDeleteRow = (index: number) => {};
  const params = useParams();
  const packageid = params.packageid;
  const mockTableData = [
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN001",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN002",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN003",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN004",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN005",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN006",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN007",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
    {
      packageid: "000001",
      upc: "00000000001",
      sn: "SN008",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qty: 1,
    },
  ];

  useEffect(() => {
    setTableData(mockTableData);
  }, []); // 空依赖数组确保这个效果只在组件挂载时运行一次

  const handleBackClick = () => {
    navigate("/previous-page", { state: { packageid } });
  };

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

      <div className="create-page-container">
        <div
          className="form-outline history-search-input-container"
          data-mdb-input-init
        >
          <input
            type="text"
            className="form-control search-page-input"
            id="form12"
            placeholder="Search"
          ></input>
        </div>
        <table className="table create-page-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Pallet ID</th>
              <th scope="col">UPC</th>
              <th scope="col">SN</th>
              <th scope="col">Qty</th>
              <th scope="col">Scan Time</th>
              <th scope="col">Create User</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.packageid}</td>
                <td>{row.upc}</td>
                <td>{row.sn}</td>
                <td>{row.qty}</td>
                <td>{row.scanTime}</td>
                <td>{row.createUser}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="package-detail-page-input-container">
          <div className="unpack-button-container">
            <button
              type="button"
              className="btn btn-danger btn-lg bootstrap-Unpack-button"
              onClick={() => handleDeleteRow(1)}
              data-mdb-ripple-init
            >
              Click the button to unpack the package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
