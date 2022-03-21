import {
  createNewSessionThunk,
  deleteOneSessionThunk,
  loadSessionsListThunk,
} from "./sessionsThunk";

describe("Given a loadSessionsList thunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadSessionsListThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteOneSession thunk", () => {
  describe("When it's called with an existent id", () => {
    test("Then it should call dispatch with de deleteOneSessionAction as parameter", async () => {
      const id = "6229d6f84197f335af2c3ca9";
      const expectedAction = {
        type: "delete-one-session",
        id: id,
      };
      const dispatch = jest.fn();

      const deleteThunk = deleteOneSessionThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a createNewSession thunk", () => {
  describe("When it's called with an existent id", () => {
    test("Then it should call dispatch", async () => {
      const session = {
        when: "1312-01-12T00:14:44.000Z",
        where: "Can Baró",
        patient: "6230586642f13caa9b0c2252",
        doctor: "6229d8254197f335af2c3cad",
      };
      const expectedAction = {
        type: "create-new-session",
        session: session,
      };
      const dispatch = jest.fn();

      const createThunk = createNewSessionThunk(session);
      await createThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
