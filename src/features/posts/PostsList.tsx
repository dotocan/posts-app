import Input from "../../components/primitives/inputs/Input.tsx";
import { ChangeEvent, useEffect } from "react";
import { usePosts } from "./postsProvider.tsx";
import PostItem from "./PostItem.tsx";
import { logMessage } from "../../shared/constants.ts";
import { MessageProps } from "../../shared/message.props.ts";
import { withLogger } from "../../shared/loggerHoc.tsx";

export const PostsList = (_: MessageProps) => {
  const postsContext = usePosts();

  useEffect(() => {
    postsContext?.getPostsWithAuthorsAndComments();
  }, []);

  if (!postsContext) return null;

  if (postsContext.loadingPosts) return <div>Loading...</div>;

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    const query = e.target.value;
    postsContext?.filterPostsByUser(query);
  }

  return (
    <div>
      <div className="md:w-1/2 xs:w-3/4 mx-auto mb-10">
        <Input
          message={logMessage}
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {postsContext.filteredPosts?.map((post) => {
          return <PostItem message={logMessage} key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default withLogger(PostsList);
