import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import Message from "../../components/Message";
import userEvent from "@testing-library/user-event";

describe("Message", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render textarea and button properly", () => {
    render(<Message />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "form-textarea");
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });
  it("should display text after entering it and clicking on the button", async () => {
    const { container } = render(<Message />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    const message = container.getElementsByClassName("message")[0];
    userEvent.type(input, "test");

    expect(input).toHaveValue("test");

    userEvent.click(button);

    await waitFor(() => {
      expect(message).toBeInTheDocument(),
        expect(message).toHaveTextContent("test");
    });
  });
});
