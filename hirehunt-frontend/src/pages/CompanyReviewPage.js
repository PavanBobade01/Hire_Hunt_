import React, { useEffect, useState } from "react";

const CompanyReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/company-reviews")
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching reviews", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div>
      <h2>All Company Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "1rem" }}>
              <strong>{review.companyName}</strong> — {review.rating}⭐
              <br />
              <em>{review.comment}</em>
              <br />
              <small>By {review.reviewerName}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompanyReviewPage;
