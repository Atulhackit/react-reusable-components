import {useState,useMemo } from "react";
import DataTable from "react-data-table-component"
import "./DataTableElement.scss"
const tableData = [
  {
    id: 1,
    first_name: "Jessamyn",
    last_name: "Espinazo",
    email: "jespinazo0@chicagotribune.com",
    phone: "162-166-0977",
  },
  {
    id: 2,
    first_name: "Isac",
    last_name: "Tooher",
    email: "itooher1@psu.edu",
    phone: "655-567-3619",
  },
  {
    id: 3,
    first_name: "Tabbatha",
    last_name: "Proschke",
    email: "tproschke2@weibo.com",
    phone: "327-612-4850",
  },
  {
    id: 4,
    first_name: "Ninetta",
    last_name: "Mabb",
    email: "nmabb3@canalblog.com",
    phone: "971-296-0911",
  },
  {
    id: 5,
    first_name: "Danni",
    last_name: "Wallentin",
    email: "dwallentin4@comcast.net",
    phone: "983-297-0506",
  },
  {
    id: 6,
    first_name: "Tabbatha",
    last_name: "Proschke",
    email: "tproschke2@weibo.com",
    phone: "327-612-4850",
  },
  {
    id: 7,
    first_name: "Ninetta",
    last_name: "Mabb",
    email: "nmabb3@canalblog.com",
    phone: "971-296-0911",
  },
  {
    id: 8,
    first_name: "Danni",
    last_name: "Wallentin",
    email: "dwallentin4@comcast.net",
    phone: "983-297-0506",
  },
  {
    id: 9,
    first_name: "Tabbatha",
    last_name: "Proschke",
    email: "tproschke2@weibo.com",
    phone: "327-612-4850",
  },
  {
    id: 10,
    first_name: "Ninetta",
    last_name: "Mabb",
    email: "nmabb3@canalblog.com",
    phone: "971-296-0911",
  },
  {
    id: 11,
    first_name: "Danni",
    last_name: "Wallentin",
    email: "dwallentin4@comcast.net",
    phone: "983-297-0506",
  },
];
const columns = [
  {
      name: 'First Name',
      selector: row => row.first_name,
      sortable: true,
  },
  {
      name: 'Last Name',
      selector: row => row.last_name,
      sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
   },
   {
    name: 'Phone',
    selector: row => row.phone,
   },
  //  {
  //   name: 'Action',
  //   cell: (row) => <button>Delete</button>,
  //  },
];

function DataTableElement() {
  const [data, setData] = useState(tableData);
  const [filterText, setFilterText] = useState("");
 
  const filteredItems = data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    return (
      <input
        type="search"
        placeholder="Search"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        className={"searchFilter"}
      />
    );
  }, [filterText]);

  return (
   <DataTable
   columns={columns}
   data={filteredItems}
   pagination
   fixedHeader
   fixedHeaderScrollHeight="500px"
   highlightOnHover
   responsive
   className={"dataTableStyle"}
   striped
   selectableRows
   selectableRowsHighlight
   subHeader
   subHeaderComponent={subHeaderComponent}
   />
  )
}

export default DataTableElement