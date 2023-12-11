// 在 pages/CreatePackageLabelPage.tsx
import React, { useState } from "react";

const CreatePackageLabelPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tableData, setTableData] = useState<string[]>([]);
  const [showQtyInput, setShowQtyInput] = useState<boolean>(false);
  const [qtyValue, setQtyValue] = useState<number>();
  const [showSNInput, setShowSNInput] = useState<boolean>(false);
  const [snValue, setSnValue] = useState<number>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTableData((prevData) => [...prevData, inputValue]);

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
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <th scope="row">3</th>
            <th scope="row">3</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreatePackageLabelPage;
