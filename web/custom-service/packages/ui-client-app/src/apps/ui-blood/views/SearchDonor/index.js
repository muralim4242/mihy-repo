import React from "react";
import {Map} from "mihy-ui-framework/ui-molecules";

class SearchDonor extends React.Component {
  render()
  {
    const zoomLevel=15;
    return (
      <Map
                  // onInfoBoxToggle={handleInfoBoxToggle}
                  // isEntityTypeShown={isEntityTypeShown}
                  // isDirectionShown={false}
                  // entityTypes={entityTypes}
                  // onToggleOpen={updateLabelStatus}
                  // changeBound={changeBound}
                  // waypts={waypts}
                  // defaultCenter={defaultCenter}
                  zoomLevel={zoomLevel}
      />
    )
  }
}

export default SearchDonor;
