import "./CardEpisode.css";

const CardEpisode = ({ title = "", description = "", url = "" }) => {
  return (
    <div className="cardepisode-main">
      <div className="cardepisode-title">{title}</div>
      <div className="cardepisode-description">{description}</div>
      <div>
        <audio style={{ width: "100%" }} controls>
          <source src={url} type="audio/mpeg" />
          <source src={url} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default CardEpisode;
