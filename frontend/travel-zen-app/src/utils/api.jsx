import React from "react";
import axios from "axios";
import { useEffect} from 'react';
import { ReviewsContext } from '../App';
import { useContext } from 'react';


export default function Api() {
  const { setReviews} = useContext(ReviewsContext);

  const fetchReviews = async () => {
    const response = await axios.get("http://localhost:3000/reviews");
    const info = await response.data;
    console.log(info);
    setReviews(info.reviews);
    console.log("-Reviews Fetched-");
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
     
    </div>
  )
}

