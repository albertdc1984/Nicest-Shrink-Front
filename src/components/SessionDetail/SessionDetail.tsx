import { Link } from "react-router-dom";
import styled from "styled-components";
import { SessionShape } from "../Session/Session";
import { DateTime, Settings } from "luxon";

Settings.defaultLocale = "ca";
interface SessionProps {
  session: SessionShape;
}

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 80vw;
  border-style: solid;
  border-radius: 20px;
  border-color: #fa9956;
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  font-weight: inherit;
  margin-bottom: 0;
`;
const MeetContainer = styled.div`
  background-color: #f37370;
  color: white;
  width: 90vw;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }
`;

const SessionDetail = ({ session }: SessionProps): JSX.Element => {
  return session.patient ? (
    <SessionContainer>
      <MeetContainer>
        <p>{DateTime.fromISO(session.when).toRelativeCalendar()}</p>
        <p>{`At: ${session.where}`}</p>
        <p>{`Therapist: ${session.doctor?.name}`}</p>
        <p>{`Patient: ${session.patient.name}`}</p>
      </MeetContainer>{" "}
      <Container>
        <h3>MESSAGE BOARD</h3>
      </Container>
      <StyledLink to={"/sessions"}>ASK FOR CANCELLATION</StyledLink>
    </SessionContainer>
  ) : (
    <SessionContainer>
      <MeetContainer>
        <p>{DateTime.fromISO(session.when).toRelativeCalendar()}</p>
        <p>{`At: ${session.where}`}</p>
        <p>{`Therapist: ${session.doctor?.name}`}</p>
        <p>{`Patient: No longer here`}</p>
      </MeetContainer>
      <Container>
        <h3>MESSAGE BOARD</h3>
      </Container>
      <StyledLink to={"/sessions"}>ASK FOR CANCELLATION</StyledLink>
    </SessionContainer>
  );
};

export default SessionDetail;
