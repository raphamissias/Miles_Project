import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router-dom";
import PageHome from "../../pages/HomePage";
import PageAbout from "../../pages/AboutPage";

describe("React Router DOM", () => {
  it("path '/' should return main page", () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: PageHome,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);
    const homePresentation = screen.getByText("Lorem Ipsum");

    expect(homePresentation).toBeDefined();
  });

  it("path '/about' should return about page", () => {
    const Stub = createRoutesStub([
      {
        path: "/about",
        Component: PageAbout,
      },
    ]);

    render(<Stub initialEntries={["/about"]} />);
    const aboutMessage = screen.getByText("Sobre...");

    expect(aboutMessage).toBeDefined();
  });
});
