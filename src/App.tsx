import {ChangeEvent, useState} from "react";

export default function App(): JSX.Element
{
	const [text, setText] = useState<string>(() => "");
	const [nomes, setNomes] = useState<string[]>(() => []);
	
	function addNome(): void
	{
		setNomes(nomes => [...nomes, text]);
	}
	
	return (
		<>
			<h1>Exercício useState #12</h1>
			
			<input type="text" value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => setText(() => e.target.value)} />
			
			<button onClick={addNome}>Adicionar</button>
			
			<ul>
				{nomes.map((nome: string, index: number) => (<li key={index}>{nome}</li>))}
			</ul>
		</>
	);
}