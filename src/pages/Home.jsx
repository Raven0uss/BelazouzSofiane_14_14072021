import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MagicModal from "@raven0us/magic-react-modal";

import { addEmployee } from "../redux/actions/employees";
import { departmentList, stateList } from "../constants";

import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import Select from "../components/Select";
import SaveButton from "../components/SaveButton";

import { Container, Form, AddressFieldset, SuccessMessage } from "./HomeStyle";

const formValuesInitialState = {
  firstname: "",
  lastname: "",
  birthdate: "",
  startdate: "",
  street: "",
  city: "",
  state: stateList[0],
  zip: "",
  department: departmentList[0],
};

const Home = ({ onAddEmployee }) => {
  const [formValues, setFormValues] = React.useState(formValuesInitialState);
  const [openModal, setOpenModal] = React.useState(false);

  const handleChange =
    (key, isNativeEvent = false) =>
    (event) => {
      const { value } = isNativeEvent ? event.target : { value: event };
      setFormValues((currentState) => ({
        ...currentState,
        [key]: value,
      }));
    };

  const handleSubmit = () => {
    onAddEmployee(formValues);
    setOpenModal(true);
  };

  const saveIsDisabled = (() =>
    Object.keys(formValues).some((key) => formValues[key].length === 0))();
  return (
    <Container>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form>
        <Input
          value={formValues.firstname}
          onChange={handleChange("firstname", true)}
          type="text"
          label="First Name"
        />
        <Input
          value={formValues.lastname}
          onChange={handleChange("lastname", true)}
          type="text"
          label="Last Name"
        />
        <DatePicker
          selected={formValues.birthdate}
          onChange={handleChange("birthdate")}
          label="Date of Birth"
        />
        <DatePicker
          selected={formValues.startdate}
          onChange={handleChange("startdate")}
          label="Start Date"
        />
        <AddressFieldset>
          <legend>Address</legend>
          <Input
            value={formValues.street}
            onChange={handleChange("street", true)}
            type="text"
            label="Street"
          />
          <Input
            value={formValues.city}
            onChange={handleChange("city", true)}
            type="text"
            label="City"
          />
          <Select
            options={stateList}
            value={formValues.state}
            label="State"
            onChange={handleChange("state")}
          />
          <Input
            value={formValues.zip}
            onChange={handleChange("zip", true)}
            type="number"
            label="Zip Code"
          />
        </AddressFieldset>
        <Select
          options={departmentList}
          value={formValues.department}
          label="Department"
          onChange={handleChange("department")}
        />
      </Form>
      <SaveButton
        action={handleSubmit}
        title="Save"
        disabled={saveIsDisabled}
      />
      <MagicModal
        isOpen={openModal}
        setOpen={setOpenModal}
        onClose={() => setFormValues(formValuesInitialState)}
      >
        <SuccessMessage>Employee Created !</SuccessMessage>
      </MagicModal>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddEmployee: async (employee) => {
    employee.department = employee.department.value;
    employee.state = employee.state.value;
    dispatch(addEmployee(employee));
  },
});

Home.propTypes = {
  onAddEmployee: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(Home);
