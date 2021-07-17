const sortTextKey = (a, b, key) => (a[key] > b[key] ? 1 : -1);
const sortState = (a, b) => (a.state.name > b.state.name ? 1 : -1);
const sortDateKey = (a, b, key) => new Date(b[key]) - new Date(a[key]);

const employeeColumns = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
    sorter: (a, b) => sortTextKey(a, b, "firstname"),
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",

    sorter: (a, b) => sortTextKey(a, b, "lastname"),
  },
  {
    title: "Start Date",
    dataIndex: "startdate",
    key: "startdate",

    sorter: (a, b) => sortDateKey(a, b, "startdate"),
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",

    sorter: (a, b) => sortTextKey(a, b, "department"),
  },
  {
    title: "Date of Birth",
    dataIndex: "birthdate",
    key: "birthdate",

    sorter: (a, b) => sortDateKey(a, b, "birthdate"),
  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
    sorter: (a, b) => sortTextKey(a, b, "street"),
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",

    sorter: (a, b) => sortTextKey(a, b, "city"),
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    render: (element) => element.abbreviation,
    sorter: sortState,
  },
  {
    title: "Zip Code",
    dataIndex: "zip",
    key: "zipcode",

    sorter: (a, b) => sortTextKey(a, b, "zip"),
  },
];

export { employeeColumns };
