import "./App.css";
import ReviewForm from "./components/ReviewForm";
import Review from "./components/Review";

interface TReview {
  username: string;
  title: string;
  text: string;
  stars: number;
  likes: number;
  dislikes: number;
  date: string;
}

const data: TReview = {
  username: "John Doe",
  title: "Great product",
  text: "I really like this product. It is very useful.",
  stars: 4,
  likes: 10,
  dislikes: 2,
  date: "2024-02-14",
};

const App = () => {
  return <><div>{ReviewForm()}</div><div>{Review(data)}</div></>;
};

export default App;
