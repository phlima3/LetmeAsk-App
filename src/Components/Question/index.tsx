import "../Question/styles.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export function Question({ author, content }: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt="Avatar do usuário" />
          <span>{author.name}</span>
        </div>
      </footer>
    </div>
  );
}
