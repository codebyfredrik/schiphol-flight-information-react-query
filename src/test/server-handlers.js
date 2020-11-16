import { rest } from 'msw';

const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_BASE_URL}/airlines/KL`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ publicName: 'KLM' }));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API_BASE_URL}/destinations/GVA`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ city: 'Geneva', iata: 'GVA' }));
    }
  ),
];

export { handlers };
