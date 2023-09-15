import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

createRoot(document.querySelector("#root")!).render(
	<React.Fragment>
		<App />
	</React.Fragment>
);