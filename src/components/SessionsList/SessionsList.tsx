import { useDispatch } from "react-redux";
import styled from "styled-components";

import { deleteOneSessionThunk } from "../../redux/thunks/sessionsThunk";
import Session, { SessionShape } from "../Session/Session";

interface SessionsListProps {
  sessionsArray: SessionShape[];
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90vw;
`;

const SessionsList = ({ sessionsArray }: SessionsListProps): JSX.Element => {
  const dispatch = useDispatch();

  const deleteSession = (id: string) => {
    dispatch(deleteOneSessionThunk(id));
  };

  return (
    <ListContainer>
      {sessionsArray.map((session: SessionShape) => {
        return (
          <Session
            key={session._id}
            session={session}
            actionOnClick={() => {
              deleteSession(session._id);
            }}
          />
        );
      })}
    </ListContainer>
  );
};

export default SessionsList;
