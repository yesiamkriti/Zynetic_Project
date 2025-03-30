import 'bootstrap/dist/css/bootstrap.min.css';

function Rating(props: { 
  rating: number; 
  numReviews?: number; 
  caption?: string; 
}) {
  const { rating, numReviews, caption } = props;
  return (
    <div className="rating d-flex align-items-center">
      <span className="text-warning me-1">
        <i className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span className="text-warning me-1">
        <i className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span className="text-warning me-1">
        <i className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span className="text-warning me-1">
        <i className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      <span className="text-warning me-1">
        <i className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      </span>
      {caption ? (
        <span className="ms-2">{caption}</span>
      ) : numReviews !== undefined && numReviews > 0 ? (
        <span className="ms-2">{numReviews + ' reviews'}</span>
      ) : (
        ''
      )}
    </div>
  );
}

export default Rating;