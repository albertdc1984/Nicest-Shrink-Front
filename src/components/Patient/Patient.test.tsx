import { render, screen } from "@testing-library/react";

import Patient, { PatientShape } from "./Patient";

describe("Given a Patient component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a patient card", () => {
      const firstPatient: PatientShape = {
        _id: "11",
        name: "Petri",
        lastname: "Petroli",
        username: "pptroli",
        progress: "Not progressing",
        password: "12345",
        admin: true,
        sessions: [
          {
            _id: "1",
            when: "1312-01-12T00:14:44.000+00:00",
            where: "Where eagles dare",
            patient: {
              _id: "234",
              name: "Teodoro",
              lastname: "Maloso",
              username: "Tmaloso",
              password: "12345",
              admin: false,
              sessions: [],
              progress: "",
            },
            doctor: {
              _id: "234",
              name: "Doctor",
              lastname: "Strange",
              username: "DrStrange",
              password: "12345",
              admin: false,
              sessions: [],
              progress: "",
            },
          },
        ],
      };

      render(<Patient patient={firstPatient} />);

      const paragraph = screen.getByText("Petri Petroli");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
