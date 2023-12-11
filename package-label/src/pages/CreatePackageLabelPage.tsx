// 在 pages/CreatePackageLabelPage.tsx
import React, { useState } from "react";

interface TableRow {
  id: number;
  upc: string;
  sn: string;
  qty: number;
  scanTime: string;
}

const CreatePackageLabelPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [showQtyInput, setShowQtyInput] = useState<boolean>(false);
  const [qtyValue, setQtyValue] = useState<number>();
  const [showSNInput, setShowSNInput] = useState<boolean>(false);
  const [snValue, setSnValue] = useState<number>();
  const mockTableData = [
    {
      id: 1,
      upc: "123456789012",
      sn: "SN0001",
      qty: 10,
      scanTime: "2023-04-01 10:00:00",
    },
    {
      id: 2,
      upc: "987654321098",
      sn: "SN0002",
      qty: 15,
      scanTime: "2023-04-01 10:15:00",
    },
    {
      id: 3,
      upc: "456789123456",
      sn: "SN0003",
      qty: 5,
      scanTime: "2023-04-01 10:30:00",
    },
    // 更多行数据...
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    //setTableData((prevData) => [...prevData, inputValue]);

    // Update showQtyInput based on the condition
    if (e.target.value === "1") {
      setShowQtyInput(true);
    } else if (e.target.value === "2") {
      setShowSNInput(true);
    } else {
      setShowQtyInput(false);
      setShowSNInput(false);
    }
  };

  const handleQtySNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQtyValue(value);
  };

  return (
    <div className="create-page-container">
      <div className="upc-qty-save-container">
        <div className="upc-qty-input-container">
          <div className="upc-input-container">
            <label htmlFor="inputText" className="create-page-form-label">
              UPC :
            </label>
            <input
              type="text"
              className="create-page-input"
              id="inputText"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          {/* Conditionally render the Qty input based on showQtyInput */}
          {showQtyInput && (
            <div className="qty-input-container">
              <label htmlFor="qtyInput" className="create-page-form-label">
                Qty :
              </label>
              <input
                type="number"
                className="qty-input"
                id="qtyInput"
                value={qtyValue}
                onChange={handleQtySNChange}
              />
            </div>
          )}

          {showSNInput && (
            <div className="sn-input-container">
              <label htmlFor="snInput" className="create-page-form-label">
                SN :
              </label>
              <input
                type="number"
                className="sn-input"
                id="snInput"
                value={snValue}
                onChange={handleQtySNChange}
              />
            </div>
          )}
        </div>

        <div className="save-button-container">
          <button
            type="button"
            className="btn btn-primary btn-lg bootstrap-save-button"
          >
            Save
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UPC</th>
            <th scope="col">SN</th>
            <th scope="col">Qty</th>
            <th scope="col">Scan Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <th scope="row">{row.id}</th>
              <td>{row.upc}</td>
              <td>{row.sn}</td>
              <td>{row.qty}</td>
              <td>{row.scanTime}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatePackageLabelPage;
