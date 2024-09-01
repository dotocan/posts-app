import BodyText from "../../components/primitives/typography/BodyText";
import Heading2 from "../../components/primitives/typography/Heading2";
import { logMessage } from "../../shared/constants";
import { withLogger } from "../../shared/loggerHoc";
import { MessageProps } from "../../shared/message.props";
import { BlogAuthor } from "../posts/PostItem";

interface Props extends MessageProps {
  author: BlogAuthor | null;
}

export const Author = ({ author }: Props) => {
  if (!author) return null;

  return (
    <div className="flex justify-center">
      <img
        className="mr-4 w-16 h-16 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
        alt="Jese Leos"
      />
      <div>
        <Heading2 message={logMessage}>{author.name}</Heading2>
        <BodyText message={logMessage} color="faded">
          {author.info}
        </BodyText>
      </div>
    </div>
  );
};

export default withLogger(Author);
