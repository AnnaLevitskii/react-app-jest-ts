import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Advice from "../../components/Advice";

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
    });
  });
});
