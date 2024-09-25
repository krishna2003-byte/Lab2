export default function Card({ image, location, hotel, rating, price }) {
  return (
    <div className="card">
      <img src={image} alt="" width="180px" />
      <h3>{location}</h3>
      <p>{hotel}</p>
      {rating < 4 ? (
        <p style={{ color: "red" }}>{rating} ★</p>
      ) : (
        <p style={{ color: "green" }}>{rating} ★</p>
      )}
      <p>{price}</p>
    </div>
  );
}
