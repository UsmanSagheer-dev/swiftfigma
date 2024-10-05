import React from "react";

const styles = {
  table: {
    width: "100%",
    textAlign: "left",
    borderCollapse: "separate",
    borderSpacing: "0 7px",
  },
  theadRow: {
    backgroundColor: "#EFE6FF",
    height: "48px",
    width: "100%",
  
    borderRadius: "5px", // Add border-radius to the header row
  },
  th: {
    padding: "0 0 0 8px ", // Add padding to individual header cells
 
  },
  tdPadding: {
    padding: "1px 0",
  },
  customerCell: {
    display: "flex",
    alignItems: "center",
    padding: "12px 0",
  },
  customerImage: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "8px",
  },
  statusButton: (status) => ({
    backgroundColor: status === "Success" ? "#E1F4CB" : "#FFE3E6",
    color: status === "Success" ? "#62912C" : "#ED4D5C",
    border: "none",
    borderRadius: "15px",
    padding: "5px 10px",
  }),
};

const TableComponent = ({ tableData }) => {
  return (
    <table border="0" style={styles.table}>
      <thead style={styles.theadRow}>
        <tr>
          <th style={styles.th}>Date</th>
          <th >Customer</th>
          <th>Status</th>
          <th >Total</th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td style={styles.tdPadding}>{item.date}</td>
            <td style={styles.customerCell}>
              <img
                src={item.image}
                alt={item.customer}
                style={styles.customerImage}
              />
              {item.customer}
            </td>
            <td style={styles.tdPadding}>
              <button style={styles.statusButton(item.status)}>
                {item.status}
              </button>
            </td>
            <td style={styles.tdPadding}>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
