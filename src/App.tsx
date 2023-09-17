import {FC, useState} from "react";
import ComponenteA from "./Components/ComponenteA";
import ComponenteB from "./Components/ComponenteB";

const App: FC<{}> = (): JSX.Element => {
	const [componente, setComponente] = useState<boolean>(() => true);
	
	return (
		<>
			<h1>Exercício useState #10</h1>
			<hr/>
			
			{componente ? <ComponenteA /> : <ComponenteB />}
			<hr />
			
			<button onClick={() => setComponente(componente_antigo => !componente_antigo)}>Alternar Componente</button>
					</>
	);
};

export default App;