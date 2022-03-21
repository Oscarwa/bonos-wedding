import { FC } from "react";
import { Table } from "react-bootstrap";
import { useSortBy, useTable } from "react-table";

interface TableProps {
  data: any[] | null;
  columns: any;
}

const BonoTable: FC<TableProps> = ({ columns, data }) => {
  const table = useTable({ columns, data: data ?? [] }, useSortBy);

  const { headerGroups, getTableBodyProps, rows, prepareRow } = table;

  return (
    <Table striped bordered hover variant="dark" className="fs-08">
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column: any) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className="d-flex justify-content-between">
                      {
                        // Render the header
                        column.render("Header")
                      }
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ▽"
                            : " △"
                          : ""}
                      </span>
                    </div>
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
};

export default BonoTable;
