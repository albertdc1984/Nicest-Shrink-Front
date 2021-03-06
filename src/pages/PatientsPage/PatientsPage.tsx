import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PatientsList from "../../components/PatienstList/PatientsList";
import { RootState } from "../../redux/store";
import { loadPatientssListThunk } from "../../redux/thunks/usersThunk";

const Main = styled.main`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  overflow: auto;
  padding-bottom: 20vh;
`;

const PatientsPage = () => {
  const dispatch = useDispatch();
  const patientsList = useSelector((state: RootState) => state.patients);

  const filteredPatientsList = patientsList.filter((patient) => !patient.admin);
  useEffect(() => {
    dispatch(loadPatientssListThunk);
  }, [dispatch, patientsList?.length]);

  return (
    <Main>
      <h2>MY PATIENTS</h2>
      <PatientsList patientsArray={filteredPatientsList} />
    </Main>
  );
};
export default PatientsPage;
