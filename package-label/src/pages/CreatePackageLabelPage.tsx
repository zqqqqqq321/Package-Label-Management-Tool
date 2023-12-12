// 在 pages/CreatePackageLabelPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TableRow {
  upc: string;
  sn: string;
  qty: number;
  scanTime: string;
  createUser: string;
}

const CreatePackageLabelPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [showQtyInput, setShowQtyInput] = useState<boolean>(false);
  const [qtyValue, setQtyValue] = useState<number>(0);
  const [showSNInput, setShowSNInput] = useState<boolean>(false);
  const [snValue, setSnValue] = useState<string>();
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSnValue("");
    setQtyValue(0);

    // Update showQtyInput based on the condition
    if (e.target.value === "197528937267") {
      setShowQtyInput(true);
      setShowSNInput(false);
    } else if (e.target.value === "427138848029") {
      setShowSNInput(true);
      setShowQtyInput(false);
    } else {
      setShowQtyInput(false);
      setShowSNInput(false);
    }
  };

  const handleSNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSnValue(e.target.value);
    setQtyValue(1);
  };

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQtyValue(e.target.valueAsNumber);
    setSnValue("");
  };

  const handleDeleteRow = (index: number) => {
    setSnValue("");
    setQtyValue(0);
    // Create a copy of the current tableData
    const updatedTableData = [...tableData];

    // Remove the row at the specified index
    updatedTableData.splice(index, 1);
    // splice 是 JavaScript 数组的一个方法，用于修改数组内容。
    // 具体到 updatedTableData.splice(index, 1)，它的意思是从 updatedTableData 数组中移除一个元素，
    // 移除的起始位置是 index，移除的数量是 1。

    // Update the state with the modified tableData
    setTableData(updatedTableData);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 检查是 Qty 还是 SN 输入框
      if (showQtyInput) {
        const newTableRow: TableRow = {
          upc: inputValue,
          sn: "",
          qty: qtyValue,
          scanTime: new Date().toLocaleString(),
          createUser: "Qi Zheng",
        };

        setTableData((prevData) => [...prevData, newTableRow]);
      }
      if (showSNInput && snValue !== undefined) {
        const newTableRow: TableRow = {
          upc: inputValue,
          sn: snValue,
          qty: 1,
          scanTime: new Date().toLocaleString(),
          createUser: "Qi Zheng",
        };

        setTableData((prevData) => [...prevData, newTableRow]);
      }
    }
  };

  const navigate = useNavigate();

  /*

  研究一下怎么点击屏幕空白处把数据自动加入table的功能？？？
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      // 在这里添加当前输入框的值到表格中
      
      // 获取点击事件的目标元素
      const target = event.target as HTMLElement;

      // 获取包含 delete button 和 save button 的元素
      const deleteButton = document.querySelector(".btn-danger");
      const saveButton = document.querySelector(".bootstrap-save-button");
      const upcInput = document.querySelector(".create-page-input");

      // 检查点击的元素是否是 delete button 或 save button 以外的任何地方
      if (tableData) {
        console.log(!isEqual(target, deleteButton));
        if (qtyValue !== 0) {
          // 创建新的 TableRow 对象
          const newTableRow: TableRow = {
            upc: inputValue,
            sn: "",
            qty: qtyValue,
            scanTime: new Date().toLocaleString(),
            createUser: "Qi Zheng",
          };

          setTableData((prevData) => [...prevData, newTableRow]);
        } else if (snValue !== undefined) {
          // 创建新的 TableRow 对象
          const newTableRow: TableRow = {
            upc: inputValue,
            sn: snValue,
            qty: 1,
            scanTime: new Date().toLocaleString(),
            createUser: "Qi Zheng",
          };

          setTableData((prevData) => [...prevData, newTableRow]);
        }
      }
    };

    // 添加一个全局点击事件监听器，当用户点击页面其他地方时触发
    document.addEventListener("click", handleOutsideClick);

    // 在组件卸载时移除事件监听器
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [qtyValue, snValue]); // 仅在 qtyValue、inputValue 或 snValue 变化时运行 useEffect
  */

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
                  onChange={handleQtyChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}

            {showSNInput && (
              <div className="sn-input-container">
                <label htmlFor="snInput" className="create-page-form-label">
                  SN :
                </label>
                <input
                  type="string"
                  className="sn-input"
                  id="snInput"
                  value={snValue}
                  onChange={handleSNChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}
          </div>

          <div className="save-button-container">
            <button
              type="button"
              className="btn btn-primary btn-lg bootstrap-save-button"
            >
              Create Package
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
                    Delete
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

export default CreatePackageLabelPage;
