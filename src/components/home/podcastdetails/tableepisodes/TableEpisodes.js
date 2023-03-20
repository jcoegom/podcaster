import "./TableEpisodes.css";
import {
  convertMsIntoMinSec,
  formatDate,
} from "../../../../common/utils/common";
const TableEpisodes = ({ episodes = [] }) => {
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
              <td>{episode.name}</td>
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
