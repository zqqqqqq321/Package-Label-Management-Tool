// 在 pages/CreatePackageLabelPage.tsx
import { table } from "console";
import React, { useEffect, useState } from "react";
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

const PackageHistoryandReprintPage: React.FC = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<TableData[]>([]);
  const handleDeleteRow = (index: number) => {};
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
      scanTime: "2023-04-01 10:15:02",
      status: "Inbound",
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
      scanTime: "2023-04-01 10:15:14",
      status: "Inbound",
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
      scanTime: "2023-04-02 10:15:25",
      status: "Not Inbound",
      createUser: "Qi Zheng",
      qtySum: 3,
    },
    {
      packageid: "000005",
      upc: "00000000004",
      snlist: [
        {
          sn: "SN008",
          qty: 1,
        },
        {
          sn: "SN009",
          qty: 1,
        },
      ],
      scanTime: "2023-04-03 10:17:00",
      status: "Not Inbound",
      createUser: "Qi Zheng",
      qtySum: 2,
    },
    {
      packageid: "000006",
      upc: "00000000006",
      snlist: [
        {
          sn: "SN010",
          qty: 1,
        },
        {
          sn: "SN011",
          qty: 1,
        },
      ],
      scanTime: "2023-04-05 10:17:00",
      status: "Not Inbound",
      createUser: "Qi Zheng",
      qtySum: 2,
    },
  ];

  useEffect(() => {
    const sortedData = [...mockTableData];

    sortedData.sort((a, b) => {
      // 将日期转换为时间戳
      const timestampA = new Date(a.scanTime).getTime();
      const timestampB = new Date(b.scanTime).getTime();

      // 比较时间戳进行倒序排序
      return timestampB - timestampA;
    });

    setTableData(sortedData);
  }, []); // 空依赖数组确保这个效果只在组件挂载时运行一次

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
                <td>{row.packageid}</td>
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

export default PackageHistoryandReprintPage;
