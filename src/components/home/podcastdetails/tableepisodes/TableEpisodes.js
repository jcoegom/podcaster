import "./TableEpisodes.css";
import {
  convertMsIntoMinSec,
  formatDate,
} from "../../../../common/utils/common";
const TableEpisodes = ({ episodes = [], onClick = (e) => {} }) => {
  const handleClick = (e, { podcastId, episodeId }) => {
    e.preventDefault();
    onClick({ podcastId, episodeId });
  };
  return (
    <div className="tableepisodes-main">
      <table>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {episodes &&
          episodes.map((episode) => (
            <tr>
              <td>
                <a
                  href=""
                  onClick={(e) =>
                    handleClick(e, {
                      podcastId: episode.podcastId,
                      episodeId: episode.episodeId,
                    })
                  }
                >
                  {episode.name}
                </a>
              </td>
              <td>{formatDate(episode.date)}</td>
              <td style={{ textAlign: "center" }}>
                {convertMsIntoMinSec(episode.duration)}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default TableEpisodes;
