import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Advice from "../../components/Advice";
import { server, rest } from "../mock/testServer";

describe("Advice", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render properly without value", () => {
    const { container } = render(<Advice isQuery={false} />);
    const advice = container.querySelector("#advice");
    expect(advice).toBeInTheDocument();
    expect(advice).toBeEmptyDOMElement();
  });

  it("should render properly with value", async () => {
    const { container } = render(<Advice isQuery={true} />);
    const advice = container.querySelector("#advice");
    expect(advice).toBeInTheDocument();
    await waitFor(() => {
      expect(advice).not.toBeEmptyDOMElement();
      expect(advice).toHaveTextContent("Mocked");
    });
  });

  it("should handle properly with null value", async () => {
    server.use(
      rest.get(
        "https://api.adviceslip.com/advice",
        (req: any, res: any, ctx: any) => {
          return res(ctx.status(404));
        }
      )
    );
    const { container } = render(<Advice isQuery={true} />);
    const advice = container.querySelector("#advice");
    expect(advice).toBeInTheDocument();
    await waitFor(() => {
      expect(advice).toBeEmptyDOMElement();
      expect(advice).toThrowError;
    });
  });
});
