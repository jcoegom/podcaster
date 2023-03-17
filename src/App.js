import { Router } from "@reach/router";
import StoreProvider from "./common/providers/StoreProvider";
import "./App.css";

import Home from "./pages/Home";
import PodcastDetails from "./pages/PodcastDetails";
import EpisodeDetails from "./pages/EpisodeDetails";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Home path="/" />
        <PodcastDetails path="/podcast/:podcastId" />
        <EpisodeDetails path="/podcast/:podcastId/episode/:episodeId" />
      </Router>
    </StoreProvider>
  );
}

export default App;
