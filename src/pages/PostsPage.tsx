import { PostsList } from "../features/posts/PostsList";
import { PostsProvider } from "../features/posts/postsProvider";
import { logMessage } from "../shared/constants";
import { withLogger } from "../shared/loggerHoc";
import { MessageProps } from "../shared/message.props";

export const PostsPage = (_: MessageProps) => {
  return (
    <PostsProvider>
      <PostsList message={logMessage} />
    </PostsProvider>
  );
};

export default withLogger(PostsPage);
