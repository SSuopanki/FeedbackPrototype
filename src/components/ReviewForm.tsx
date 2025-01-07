import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import StarSpan from "./StyledComponents/StarSpan";
import styled from "@emotion/styled";

interface IFormInput {
  title: string;
  feedback: string;
  rating: number;
}
const reviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [totalStars] = useState(5);

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TitleDiv>
        <GridDiv>
          <label>Title</label>
          <StyledInput {...register("title")} />
        </GridDiv>
        <StarsDiv>
          {[...Array(totalStars)].map((_star, index) => {
            const currentRating = index + 1;

            return (
              <StarLabel key={index}>
                <input
                  {...register("rating")}
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
        <StyledTextArea {...register("feedback")} />
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

export default reviewForm;
