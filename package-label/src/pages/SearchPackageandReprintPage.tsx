// 在 pages/CreatePackageLabelPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface SnListItem {
  sn: string;
  qty: number;
}

interface TableData {
  packageid: string;
  upc: string;
  snlist: SnListItem[];
  scanTime: string;
  createUser: string;
  status: string;
  qtySum: number;
}

const SearchPackageandReprintPage: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [tableData, setTableData] = useState<TableData[]>([]);
  const handlePackageIdClick = (packageid: string) => {
    navigate(`/package-details/` + packageid);
  };

  const mockTableData = [
    {
      packageid: "000001",
      upc: "00000000001",
      snlist: [
        {
          sn: "",
          qty: 10,
        },
      ],
      status: "Inbound",
      scanTime: "2023-04-01 10:00:00",
      createUser: "Qi Zheng",
      qtySum: 10,
    },
    {
      packageid: "000002",
      upc: "00000000002",
      snlist: [
        {
          sn: "",
          qty: 25,
        },
      ],
      status: "Inbound",
      scanTime: "2023-04-01 10:15:00",
      createUser: "Qi Zheng",
      qtySum: 25,
    },
    {
      packageid: "000003",
      upc: "00000000003",
      snlist: [
        {
          sn: "SN001",
          qty: 1,
        },
        {
          sn: "SN002",
          qty: 1,
        },
        {
          sn: "SN003",
          qty: 1,
        },
        {
          sn: "SN004",
          qty: 1,
        },
      ],
      status: "Not Inbound",
      scanTime: "2023-04-01 10:15:00",
      createUser: "Qi Zheng",
      qtySum: 4,
    },
    {
      packageid: "000004",
      upc: "00000000003",
      snlist: [
        {
          sn: "SN005",
          qty: 1,
        },
        {
          sn: "SN006",
          qty: 1,
        },
        {
          sn: "SN007",
          qty: 1,
        },
      ],
      status: "Not Inbound",
      scanTime: "2023-04-01 10:15:00",
      createUser: "Qi Zheng",
      qtySum: 3,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleSearchButton = () => {
    let foundData: TableData[] = [];

    // 检查是否是 packageid
    if (["000001", "000002", "000003", "000004"].includes(inputValue)) {
      foundData = mockTableData.filter((data) => data.packageid === inputValue);
    }
    // 检查是否是 UPC
    else if (
      ["00000000001", "00000000002", "00000000003"].includes(inputValue)
    ) {
      foundData = mockTableData.filter((data) => data.upc === inputValue);
    }
    // 检查是否是 SN
    else if (inputValue.startsWith("SN")) {
      foundData = mockTableData.filter((data) =>
        data.snlist.some((snItem) => snItem.sn === inputValue)
      );
    }

    // 如果找到了对应的数据，就设置为 tableData 的值
    setTableData(foundData.length > 0 ? foundData : []);
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
          <div
            className="form-outline search-input-container"
            data-mdb-input-init
          >
            <input
              type="text"
              className="form-control search-page-input"
              id="form12"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Input Package ID or UPC or SN to search"
            ></input>
          </div>

          <div className="search-button-container">
            <button
              type="button"
              className="btn btn-primary btn-lg bootstrap-search-button"
              onClick={() => handleSearchButton()}
            >
              Search
            </button>
          </div>
        </div>

        <table className="table create-page-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Package ID</th>
              <th scope="col">UPC</th>

              <th scope="col">Qty</th>
              <th scope="col">Scan Time</th>
              <th scope="col">Create User</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => handlePackageIdClick(row.packageid)}
                >
                  {row.packageid}
                </td>
                <td>{row.upc}</td>
                <td>{row.qtySum}</td>
                <td>{row.scanTime}</td>
                <td>{row.createUser}</td>
                <td>{row.status}</td>
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
