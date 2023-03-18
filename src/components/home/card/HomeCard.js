import "./HomeCard.css";

const HomeCard = () => {
  return (
    <div class="card">
      <div className="homecard-img">
        <img src="https://placehold.it/200x200" alt="Card Image" />
      </div>
      <div class="card-content">
        <h2 class="card-title">Card Title</h2>
        <p class="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
