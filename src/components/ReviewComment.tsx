import styled from "@emotion/styled";
import { useState } from "react";

interface IFormInput {
  comments?: Array<{ comment: string; productId: string }>;
  productId: string;
  saveComment: (comment: { comment: string; productId: string }) => void;
}

export const ReviewComment = ({
  saveComment,
  comments,
  productId,
}: IFormInput) => {
  const [isOpen, setIsOpen] = useState(false);
  const [proComments, setProComments] = useState(comments ?? []);
  const [commentValue, setCommentValue] = useState("");
  const [openTitle, setOpenTitle] = useState("Comment");

  const handleOpen = () => {
    setOpenTitle(isOpen ? "Comment" : "Close comment");
    setIsOpen(!isOpen);
  };
  const CommentButton = (
    <StyledCommentButton onClick={handleOpen}>{openTitle}</StyledCommentButton>
  );
  const handleComment = (comment: string) => {
    // Implement comment handling here
    setProComments((prevComments) => [...prevComments, { comment, productId }]);
    saveComment({ comment, productId });
    setIsOpen(false);
    setOpenTitle("Comment");
  };

  return (
    <div>
      {CommentButton}
      {isOpen && (
        <>
          <div>
            <StyledTextArea
              value={commentValue}
              onChange={(event) => setCommentValue(event.target.value)}
              placeholder="Write comment here"
            />
            <button onClick={() => handleComment(commentValue)}>Send</button>
          </div>
        </>
      )}
      {proComments.map((proCom, index) => (
        <div key={index}>{proCom.comment}</div>
      ))}
    </div>
  );
};

const StyledTextArea = styled.textarea`
  margin-top: 1rem;
  width: 100%;
  height: 5rem;
`;

const StyledCommentButton = styled.button`
  margin-top: 1rem;
`;

export default ReviewComment;
