import { useParams } from "react-router-dom";
import { PostsProvider } from "../features/posts/postsProvider.tsx";
import PostContainer from "../features/posts/PostContainer.tsx";
import { logMessage } from "../shared/constants.ts";
import { MessageProps } from "../shared/message.props.ts";
import { withLogger } from "../shared/loggerHoc.tsx";

export const PostDetailsPage = (_: MessageProps) => {
  const { id } = useParams();

  if (!id) return null;

  return (
    <div className="sm:mx-12 md:mx-24 lg:mx-44 xl:mx-60">
      <PostsProvider>
        <PostContainer message={logMessage} postId={id} />
      </PostsProvider>
    </div>
  );
};

export default withLogger(PostDetailsPage);
