import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { logMessage } from "../../shared/constants";
import { BlogPost, PostItem } from "./PostItem";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

describe("PostItem.tsx", () => {
  test("Loads and displays PostItem with title and description", async () => {
    const blogPost: BlogPost = {
      id: "1",
      title: "Blog title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: null, // Tested in AuthorPreview
      comments: null, // Tested in CommentsPreview
    };

    render(<PostItem message={logMessage} post={blogPost} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(blogPost.title)).toBeInTheDocument();
    expect(screen.getByText(blogPost.body)).toBeInTheDocument();
  });
});
