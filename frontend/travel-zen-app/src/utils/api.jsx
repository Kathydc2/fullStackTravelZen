export const getReviews = async (setReviews) => {
  try {
    const response = await fetch('http://localhost:3000/reviews');
    const data = await response.json();
    setReviews(data);
  } catch (error) {
    console.error("Error fetching reviews", error);
  }
};

