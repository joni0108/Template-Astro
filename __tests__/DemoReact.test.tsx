import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

function DemoComponent() {
  return (
    <div>
      <p>Test</p>
    </div>
  );
}

describe("React Demo Component Test", () => {
  test("Component mounts correctly", () => {
    //? React Component Testing
    const wrapper = render(<DemoComponent />);
    expect(wrapper).toBeTruthy();

    //Get the p tag element
    const pTag = wrapper.container.querySelector("p");
    expect(pTag?.textContent).toBe("Test");

    // Get by text using react testing library
    const text = screen.getByText("Test");
    expect(text).toBeTruthy();
  });
});
