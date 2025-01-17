import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import StarSpan from "./StyledComponents/StarSpan";
import styled from "@emotion/styled";

interface IFormInput {
  title: string;
  feedback: string;
  rating: number;
  likes: number;
  dislikes: number;
  username: string;
  //Placeholder type for easier testing
  date: string;

}
export const ReviewForm = ({
  handleAddReview,
}: {
  handleAddReview: (review: IFormInput) => void;
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [totalStars] = useState(5);
  const [userName] = useState("testUser")

  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      title: "",
      feedback: "",
      rating: 0,
      likes:0,
      dislikes: 0,
      username: userName,
      //Placeholder date, new Date()
      date: "2024-02-14"
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => handleAddReview(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TitleDiv>
        <GridDiv>
          <label>Title</label>
          <StyledInput
            {...(register("title"),
            { required: true, minLength: 5, maxLength: 30 })}
          />
        </GridDiv>
        <StarsDiv>
          {[...Array(totalStars)].map((_star, index) => {
            const currentRating = index + 1;

            return (
              <StarLabel key={index}>
                <input
                  {...(register("rating"), { required: true })}
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                />
                <StarSpan
                  active={currentRating <= (hover || rating)}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(0)}
                >
                  &#9733;
                </StarSpan>
              </StarLabel>
            );
          })}
        </StarsDiv>
      </TitleDiv>
      <GridDiv>
        <label>Feedback</label>
        <StyledTextArea
          {...(register("feedback"),
          { required: true, minLength: 10, maxLength: 500 })}
        />
      </GridDiv>
      <SubmitButton type="submit" children="Submit" />
    </form>
  );
};

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr auto;
  grid-template-rows: auto;
`;

const StyledInput = styled.input`
  width: 15rem;
`;

const StarsDiv = styled.div`
  margin-left: 1rem;
`;

const StarLabel = styled.label`
  margin-left: 0.3rem;
`;

const StyledTextArea = styled.textarea`
  width: 25rem;
  height: 5rem;
`;

const TitleDiv = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const SubmitButton = styled.button`
  background-color: #8a6e19;
  color: white;
  height: 2.25rem;
  margin-top: 2rem;
`;

export default ReviewForm;
