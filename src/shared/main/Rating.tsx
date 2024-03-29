const Rating = ({ rating }:  { rating: number }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="fas fa-star"></span>
        ))}
        {halfStar && <span className="fas fa-star-half-alt"></span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="far fa-star"></span> // Módosítottam az üres csillagok osztályát
        ))}
      </div>
    );
  };
  
  export default Rating;