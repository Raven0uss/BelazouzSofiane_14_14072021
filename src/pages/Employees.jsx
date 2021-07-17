import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table } from "antd";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";

import Input from "../components/Input";
import { employeeColumns } from "../helpers/employeeTable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const searchFilter = (employee, search) => {
  if (search.length === 0) return true;
  const insensitiveSearch = search.toLowerCase();
  for (const key of Object.keys(employee)) {
    const value = employee[key];
    switch (typeof value) {
      case "string":
        if (value.toLowerCase().includes(insensitiveSearch)) return true;
        break;
      case "object":
        for (const subKey of Object.keys(value)) {
          const subValue = value[subKey];
          if (typeof subValue !== "string") continue;
          if (subValue.toLowerCase().includes(insensitiveSearch)) return true;
        }
        break;
      default:
        break;
    }
  }
  return false;
};

const Employees = ({ employees }) => {
  const [search, setSearch] = React.useState("");

  return (
    <Container>
      <h1>Current Employees</h1>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={"Search..."}
      />
      <Table
        columns={employeeColumns}
        dataSource={employees
          .map((employee, index) => ({
            ...employee,
            birthdate: moment(employee.birthdate).format("MM/DD/YYYY"),
            startdate: moment(employee.startdate).format("MM/DD/YYYY"),
            key: index,
          }))
          .filter((employee) => searchFilter(employee, search))}
        scroll={{ x: 180 }}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "25", "50", "100"],
          position: ["topLeft", "bottomCenter"],
        }}
      />
      <Link to="/">Home</Link>
    </Container>
  );
};

const mapStateToProps = (state) => state;

Employees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      startdate: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.shape({
        name: PropTypes.string.isRequired,
        abbreviation: PropTypes.string.isRequired,
      }).isRequired,
      zip: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default connect(mapStateToProps)(Employees);
