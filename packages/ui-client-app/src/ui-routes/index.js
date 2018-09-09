import React from "react";
import { RenderRoutes } from "mihy-ui-framework/ui-molecules";
import { appRoutes } from "ui-config";
import "./index.css"

const MainRoutes = (childProps) => {
  return (
    <main className="main-route">
      <RenderRoutes routes={appRoutes} childProps={childProps}/>
    </main>
  );
};

export default MainRoutes;
