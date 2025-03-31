import 'bootstrap/dist/css/bootstrap.min.css'

function Rating({
  rating,
  numReviews,
  caption,
}: {
  rating: number
  numReviews?: number
  caption?: string
}) {
  return (
    <div className="rating d-flex align-items-center">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-warning me-1">
          <i
            className={
              rating >= i + 1
                ? 'fas fa-star'
                : rating >= i + 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
      ))}
      <span className="ms-2">
        {caption || (numReviews ? `${numReviews} reviews` : '')}
      </span>
    </div>
  )
}

export default Rating
