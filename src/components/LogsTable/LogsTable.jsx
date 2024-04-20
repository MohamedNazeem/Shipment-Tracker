import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dateTimeString } from "../../helpers/helpers";

import "../LogsTable/styles.css";

const LogsTable = ({ shipmentDetails }) => {
  // this filter i created cause am not sure of the business needs if you need to show all the details or these only with hub key
  const filteredArray = shipmentDetails.filter(
    (item) => item.hasOwnProperty("hub") || shipmentDetails
  );

  return (
    <>
      <div className="logs-table">
        <h2>Shipment Details</h2>
        <TableContainer component={Paper}>
          <Table className="table-body">
            <TableHead className="table-header">
              <TableRow>
                <TableCell className="table-cell-header">Branch</TableCell>
                <TableCell className="table-cell-header" align="center">
                  Date
                </TableCell>
                <TableCell className="table-cell-header" align="center">
                  Time
                </TableCell>
                <TableCell className="table-cell-header" align="center">
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredArray.map((row, i) => (
                <TableRow
                  key={i}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="table-cell" component="th" scope="row">
                    {row.hub || ""}
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    {dateTimeString(row.timestamp, false, false) || ""}
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    {dateTimeString(row.timestamp, false, true) || ""}
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    {row.reason || ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default LogsTable;
