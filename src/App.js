import { Router, Link, Route } from "@reach/router";
import "./App.css";

import Home from "./pages/Home";
import PodcastDetails from "./pages/PodcastDetails";
import EpisodeDetails from "./pages/EpisodeDetails";

function App() {
  return (
    <Router>
      <Home path="/" />
      <PodcastDetails path="/podcast/:podcastId" />
      <EpisodeDetails path="/podcast/:podcastId/episode/:episodeId" />
    </Router>
  );
}

export default App;
