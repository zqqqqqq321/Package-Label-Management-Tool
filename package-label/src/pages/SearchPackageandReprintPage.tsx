// 在 pages/CreatePackageLabelPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface TableRow {
  upc: string;
  sn: string;
  qty: number;
  scanTime: string;
  createUser: string;
}
const SearchPackageandReprintPage: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [tableData, setTableData] = useState<TableRow[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleDeleteRow = (index: number) => {};

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
        <div className="search-page-input-container">
          <div className="search-input-container">
            <input
              type="text"
              className="form-control search-page-input"
              id="inputText"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Input Package ID or UPC or SN to search"
            ></input>
          </div>

          <div className="search-button-container">
            <button
              type="button"
              className="btn btn-primary btn-lg bootstrap-search-button"
            >
              Search
            </button>
          </div>
        </div>

        <table className="table create-page-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UPC</th>
              <th scope="col">SN</th>
              <th scope="col">Qty</th>
              <th scope="col">Scan Time</th>
              <th scope="col">Create User</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.upc}</td>
                <td>{row.sn}</td>
                <td>{row.qty}</td>
                <td>{row.scanTime}</td>
                <td>{row.createUser}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteRow(index)}
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchPackageandReprintPage;
