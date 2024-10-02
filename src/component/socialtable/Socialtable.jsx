import React from "react";

const TableComponent = ({ tableData }) => {
  return (
    <table
      border="0"
      style={{
        width: "100%",
        textAlign: "left",
        borderCollapse: "separate",
        borderSpacing: "0 10px",
      }}
    >
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td style={{ padding: " 12px 0" }}>{item.date}</td>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 0",
              }}
            >
              <img
                src={item.image}
                alt={item.customer}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              />
              {item.customer}
            </td>
            <td style={{ padding: "12px 0" }}>
              <button
                style={{
                  backgroundColor:
                    item.status === "Success" ? "#E1F4CB" : "#FFE3E6",
                  color: item.status === "Success" ? "#62912C" : "#ED4D5C",
                  border: "none",
                  borderRadius: "15px",
                  padding: "5px 10px",
                }}
              >
                {item.status}
              </button>
            </td>
            <td style={{ padding: "12px 0" }}>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
