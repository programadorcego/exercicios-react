import {FC, useState} from "react";
import "./App.css";

const App: FC<{}> = () => {
	const [classe, setClasse] = useState<boolean>(() => true);
	
	const classe1 = "classe1";
	const classe2 = "classe2";
	
	return (
		<>
			<h1>Exercício useState #09</h1>
			<hr/>
			
			<p className={`paragrafo ${classe ? classe1 : classe2}`}>Parágrafo</p><hr />
			
			<button onClick={() => setClasse(classe_antiga => !classe_antiga)}>Alternar Classe</button>
					</>
	);
};

export default App;