import "./HomeCard.css";

const HomeCard = ({
  title = "NO TITLE",
  author = "No Author",
  imgSrc = "https://placehold.it/200x200",
  onClick = () => {},
}) => {
  return (
    <div onClick={(e) => onClick()} class="card">
      <div className="homecard-img">
        <img src={imgSrc} alt="Card Image" />
      </div>
      <div class="card-content">
        <h2 class="card-title">{title}</h2>
        <p class="card-description">Author: {author}</p>
      </div>
    </div>
  );
};

export default HomeCard;
