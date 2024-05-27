import React from 'react';
import ReviewPage from './ReviewPage'


export default function Review({reviews,editFunc,deleteFunc}) {
  return (
    <>
      {reviews.map((review) => (
        <div key={review._id}>
          <ReviewPage 
            content={review} 
            editFunc={editFunc} 
            deleteFunc={deleteFunc} 
          />
        </div>
      ))}
    </>
  )
}

