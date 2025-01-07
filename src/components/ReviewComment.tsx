import styled from "@emotion/styled";
import { useState } from "react";

interface IFormInput {
  reviewId: string;
  comment: string;
}

const ReviewComment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openTitle, setOpenTitle] = useState("Comment");

  const handleOpen = () => {
    setOpenTitle(isOpen ? "Comment" : "Close comment");
    setIsOpen(!isOpen);
  };
  const CommentButton = (
    <StyledCommentButton onClick={handleOpen}>{openTitle}</StyledCommentButton>
  );
  const handleComment = () => {
    // Implement comment handling here
    setIsOpen(false);
    setOpenTitle("Comment");
  };

  return (
    <div>
      {CommentButton}
      {isOpen && (
        <div>
          <StyledTextArea placeholder="Write comment here" />
          <button onClick={handleComment}>Send</button>
        </div>
      )}
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
