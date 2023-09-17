import {FC, useState} from "react";

const App: FC<{}> = () => {
	const [tab, setTab] = useState<number>(() => 1);
	
	return (
		<>
			<h1>Exercício useState #08</h1>
			<hr/>
			
			<select onChange={e => setTab(() => parseInt(e.target.value))}>
				<option value="1">Tab 1</option>
				<option value="2">Tab 2</option>
				<option value="3">Tab 3</option>
			</select>
			
			<hr />
			
			{tab == 1 && <p>Tab 1</p>}
			{tab == 2 && <p>Tab 2</p>}
			{tab == 3 && <p>Tab 3</p>}
					</>
	);
};

export default App;