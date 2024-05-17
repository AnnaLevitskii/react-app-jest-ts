import { cleanup, render, screen } from "@testing-library/react";
import Button from "../../components/Button";
import { useEffect, act } from "react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render proprly", () => {
    render(
      <Button
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        children={""}
      />
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("should run onClick function by click", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick} children={""} />);
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    expect(onClick).toBeCalled();
  });

  it("should matches snapshot", () => {
    const { asFragment } = render(<Button onClick={() => {}} children={""} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
