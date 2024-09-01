import { BodyText } from "../../components/primitives/typography/BodyText";
import { Heading2 } from "../../components/primitives/typography/Heading";
import { BlogAuthor } from "../posts/PostItem";

interface Props {
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
        <Heading2>{author.name}</Heading2>
        <BodyText color="faded">{author.info}</BodyText>
      </div>
    </div>
  );
};
