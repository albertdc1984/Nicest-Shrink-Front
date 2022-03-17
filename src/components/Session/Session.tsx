import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PatientShape } from "../Patient/Patient";

export interface UserShape {
  name: string;
  lastname: string;
  username: string;
  password: string;
  sessions: string;
  progress: string;
}

export interface SessionShape {
  _id: string;
  when: string;
  where: string;
  patient: PatientShape;
  doctor: PatientShape;
}

interface SessionProps {
  session: SessionShape;
  actionOnClick: (event: React.MouseEvent<SVGSVGElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  width: 400px;
  border-style: solid;
  border-radius: 20px;
  border-color: #fa9956;
  p {
    margin: 0;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  p {
    margin: 0;
  }
  .linked {
    cursor: pointer;
    color: #fa9956;
  }
`;

const IconContainer = styled.div`
  width: 20%;
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
`;

const StyledFA = styled(FontAwesomeIcon)`
  justify-self: flex-end;
  cursor: pointer;
  :hover {
    color: #fa9956;
  }
`;

const Session = ({ session, actionOnClick }: SessionProps): JSX.Element => {
  const navigate = useNavigate();
  const detailedSession = () => {
    navigate(`/sessions/${session._id}`);
  };
  return session.patient ? (
    <Container>
      <InfoContainer>
        <p className={"linked"} onClick={detailedSession}>
          {session.when}
        </p>
        <p
          className={"linked"}
          onClick={detailedSession}
        >{`At: ${session.where}`}</p>
        <p>{`Therapist: ${session.doctor.name}`}</p>
        <p>{`Patient: ${session.patient.name}`}</p>
      </InfoContainer>
      <IconContainer>
        <StyledFA
          icon={faTrashCan}
          onClick={actionOnClick}
          data-testid="deleteIcon"
        />
      </IconContainer>
    </Container>
  ) : (
    <Container>
      <InfoContainer>
        <p onClick={detailedSession}>{session.when}</p>
        <p onClick={detailedSession}>{`At: ${session.where}`}</p>
        <p>{`Therapist: ${session.doctor.name}`}</p>
        <p>{`Patient: No longer here`}</p>
      </InfoContainer>
      <IconContainer>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={actionOnClick}
          data-testid="deleteIcon"
        />
      </IconContainer>
    </Container>
  );
};

export default Session;
