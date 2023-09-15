import {FC} from "react";
import Contador from "./Components/Contador";
import "./App.css";

const App: FC<{}> = () => {
	return (
		<>
			<h1>Exercício useState #02</h1>
			
			<div className="layout">
				<Contador valor={1} />
				<Contador valor={5} />
				<Contador valor={10} />
			</div>
		</>
	);
};

export default App;