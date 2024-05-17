import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://api.adviceslip.com/advice", (req:any, res:any, ctx:any) => {
    return res(
      ctx.status(200),
      ctx.json({ slip: { id: 46, advice: "Mocked" } })
    );
  }),

  rest.get("*", (req:any, res:any, ctx:any) => {
    console.error(`URL: ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "No request hendlers for this URL" })
    );
  })
);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.listHandlers();
});

export {server, rest} 