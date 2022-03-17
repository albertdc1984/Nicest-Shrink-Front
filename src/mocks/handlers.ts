import { rest } from "msw";
export const handlers = [
  rest.get(`${process.env.REACT_APP_API}sessions`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        sessions: [
          {
            _id: "6229d6f84197f335af2c3ca9",
            when: "1312-01-12T00:14:44.000Z",
            where: "Can Baró",
            patient: "6230586642f13caa9b0c2252",
            doctor: "6229d8254197f335af2c3cad",
          },
          {
            _id: "6229d6f84197f335af2c3ca8",
            when: "1311-03-12T00:14:44.000Z",
            where: "El Papiol",
            patient: "6230586642f13caa9b0c2253",
            doctor: "6229d8254197f335af2c3cad",
          },
        ],
      })
    )
  ),
  rest.get(`${process.env.REACT_APP_API}sessions/13`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "6229d6f84197f335af2c3ca9",
        when: "1312-01-12T00:14:44.000Z",
        where: "Can Baró",
        patient: "6230586642f13caa9b0c2252",
        doctor: "6229d8254197f335af2c3cad",
      })
    );
  }),
  rest.delete(
    `${process.env.REACT_APP_API}sessions/6229d6f84197f335af2c3ca9`,
    (req, res, ctx) => res(ctx.status(200))
  ),
];
