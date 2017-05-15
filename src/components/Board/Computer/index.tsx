import * as React from "react";

import Memory from "./Memory";
import Output from "./Output";
import Source from "./Source";

export default () => (
  <div className="column">
    <Output />
    <Source />
    <Memory />
  </div>
);