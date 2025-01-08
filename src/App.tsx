import "./App.css";
import ReviewForm from "./components/ReviewForm";
import Review from "./components/Review";
import { mockData } from "./components/MockData/mockdata";
import { useState } from "react";

// interface TReview {
//   username: string;
//   title: string;
//   text: string;
//   stars: number;
//   likes: number;
//   dislikes: number;
//   date: string;
// }


interface IFormInput {
  title: string;
  feedback: string;
  rating: number;
}

const App = () => {
  const [reviews, setReviews] = useState(mockData);

  const handleAddReview = (review: IFormInput) => {
    const newReview = {
      comments: [],
      username: 'TestUser',
      date: new Date().toISOString().split('T')[0],
      productId: '1234',
      dislikes: 0,
      likes: 0,
      stars: review.rating,
      title: review.title,
      text: review.feedback,

    }
    setReviews([...reviews, newReview]);
  };
  return (
    <>
      <div><ReviewForm handleAddReview={handleAddReview} /></div>
      <div><Review data={reviews} /></div>
    </>
  );
};

export default App;
