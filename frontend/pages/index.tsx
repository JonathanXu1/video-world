import Topbar from "../components/Topbar";
import VideoPlayer from "../components/VideoPlayer";
import dayjs from "dayjs";
import { ExploreVideoList } from "../components/ExploreVideoList";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="m-10">
        <ExploreVideoList />
      </div>
    </div>
  );
};

export default App;
