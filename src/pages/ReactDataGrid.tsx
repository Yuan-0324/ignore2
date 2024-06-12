import "react-data-grid/lib/styles.css";

// import DataGrid, { SelectCellFormatter } from "react-data-grid";

// const rows = [
//   { model: "TM363", color: "JO00", 1: "11", 5: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "7", 5: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "9", 10: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "3", 5: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 10: "3", 5: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "3", 5: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 3: "3", 11: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 6: "3", 5: "5", 7: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "3", 13: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 2: "3", 5: "5", 8: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "3", 12: "5", 6: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "3", 5: "5", 11: "12", plant: 1100 },
//   { model: "TM363", color: "KS00", 1: "3", 2: "5", 6: "12", plant: 1100 },
// ];

// // 要根據每個月有幾天產出格數
const columns = [
  { key: "model", name: "MODEL" },
  { key: "color", name: "COLOR" , formatter: function },
  { key: "plant", name: "PLANT" },
  { key: "1", name: "1" },
  { key: "2", name: "2" },
  { key: "3", name: "3" },
  { key: "4", name: "4" },
  { key: "5", name: "5" },
  { key: "6", name: "6" },
  { key: "7", name: "7" },
  { key: "8", name: "8" },
  { key: "9", name: "9" },
  { key: "10", name: "10" },
  { key: "11", name: "11" },
  { key: "12", name: "12" },
  { key: "13", name: "13" },
];

// function ReactDataGrid() {
//   return (
//     <DataGrid rowKeyGetter={(row) => row.model} columns={columns} rows={rows}>
//     </DataGrid>
//   );
// }

// export default ReactDataGrid;

import React, { useState } from "react";
import DataGrid, { SelectCellFormatter, textEditor } from "react-data-grid";
import "./app.css"; // Assuming you have this CSS file for custom styles

// Define the Row interface
interface Row {
  id: number;
  title: string;
  count: number;
  note?: {};
}

// Sample data for the grid
const initialRows: Row[] = [
  { id: 0, title: "Task 1", count: 20, note: { title: "ttttt" } },
  { id: 1, title: "Task 2", count: 40 },
  { id: 2, title: "Task 3", count: 60 },
];

// Function to get the unique key for each row
const rowKeyGetter = (row: Row) => row.id;

// Main grid component
const ReactDataGrid: React.FC = () => {
  const [rows, setRows] = useState(initialRows);
  const [msg, setMsg] = useState("");

  const columns = [
    { key: "id", name: "ID" },
    {
      key: "title",
      name: "Title",
      renderEditCell: textEditor,
      cellClass: cellClasses,
      onmousemove: () => {
        alert("111");
      },
    },
    { key: "count", name: "Count" },
  ];

  function cellClasses(row: Row) {
    const color = row.count > 30 ? "high-count" : "low-count";
    const note = row.note ? "note-visiable" : "";

    return `${color} ${note}`;
  }

  function rightClick(e, event: React.MouseEvent) {
    event.preventDefault();
    if (e.row?.note) {
      const keys = Object.keys(e.row?.note);
      if (keys.includes(e.column.key)) {
        const msg = e.row.note[e.column.key];
        console.log(msg);
        setMsg(msg);
      }
    } else {
        setMsg("");
    }
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowsChange={setRows}
        onCellContextMenu={(e, event) => rightClick(e, event)}
      />
      <div className="custom-box">{msg}</div>
    </div>
  );
};

export default ReactDataGrid;
