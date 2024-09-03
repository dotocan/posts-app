import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BlogPostComment } from "../posts/PostItem";
import { CommentsPreview } from "./CommentsPreview";
import { BrowserRouter } from "react-router-dom";
import { logMessage } from "../../shared/constants";

describe("CommentsPreview.tsx", () => {
  test("Displays the correct number of comments", async () => {
    const blogComments: BlogPostComment[] = [
      {
        id: "1",
        username: "george",
        body: "Hello from George",
      },
      {
        id: "2",
        username: "bob",
        body: "Hello from Bob",
      },
    ];

    render(<CommentsPreview comments={blogComments} message={logMessage} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toHaveTextContent("2 comments");
  });

  test("Handles missing prop without crashing", async () => {
    

    render(<CommentsPreview comments={null} message={logMessage} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
  });
});
