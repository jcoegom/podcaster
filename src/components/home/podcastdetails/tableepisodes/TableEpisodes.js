import "./TableEpisodes.css";
const TableEpisodes = ({ episodes = [] }) => {
  return (
    <div className="tableepisodes-main">
      <table>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        <tr>
          <td>My Example File</td>
          <td>March 20, 2023</td>
          <td>1 hour</td>
        </tr>
        <tr>
          <td>Another Example File</td>
          <td>March 22, 2023</td>
          <td>2 hours</td>
        </tr>
        <tr>
          <td>Yet Another Example File</td>
          <td>March 24, 2023</td>
          <td>30 minutes</td>
        </tr>
      </table>
    </div>
  );
};

export default TableEpisodes;
