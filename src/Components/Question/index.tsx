import { ReactNode } from "react";
import classnames from "classnames";
import "../Question/styles.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  author,
  content,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div
      className={classnames(
        "question",
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt="" />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
