import styled from "@emotion/styled";
import StarSpan from "./StyledComponents/StarSpan";
import ReviewComment from "./ReviewComment";
import { useState } from "react";

interface TReview {
  username: string;
  title: string;
  text: string;
  stars: number;
  likes: number;
  dislikes: number;
  date: string;
}

const Review = (data: TReview) => {
  const { username, title, text, stars, likes, dislikes, date } = data;
  const [showReviews, setShowReviews] = useState(false);
  const [revTitle, setRevTitle] = useState("Show reviews");

  const handleShowReviews = () => {
    setShowReviews(!showReviews);
    setRevTitle(showReviews ? "Show reviews" : "Hide reviews");
  };
  return (
    <ContentDiv>
      <button onClick={handleShowReviews}>{revTitle}</button>
      {showReviews && (
        <ReviewDiv>
          <ReviewContent>
            <Title>{title}</Title>
            <div>
              {[...Array(5)].map((_star, index) => {
                const currentRating = index + 1;

                return (
                  <StarLabel key={index}>
                    <StarSpan active={currentRating <= stars}>&#9733;</StarSpan>
                  </StarLabel>
                );
              })}
            </div>
          </ReviewContent>
          <p>{text}</p>
          <ReviewInfo>
            <div>
              <div>{username}</div>
              <div>{date}</div>
            </div>
            <LikeInfo>
              <Like onClick={() => console.log('add like')}>Likes: {likes}</Like>
              <Like onClick={() => console.log('add dislike')}>Dislikes: {dislikes}</Like>
            </LikeInfo>
          </ReviewInfo>
          <ReviewComment />
        </ReviewDiv>
      )}
    </ContentDiv>
  );
};

const ContentDiv = styled.div`
  margin-top: 1.5rem;
`;

const ReviewDiv = styled.div`
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  width: 40rem;
`;

const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LikeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  align-items: flex-end;
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Like = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

const StarLabel = styled.label`
  margin-left: 0.3rem;
`;

export default Review;
