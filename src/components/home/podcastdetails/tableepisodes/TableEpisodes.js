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
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes &&
            episodes.map((episode) => (
              <tr key={episode.episodeId}>
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
        </tbody>
      </table>
    </div>
  );
};

export default TableEpisodes;
