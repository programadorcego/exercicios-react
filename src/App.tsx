import {ChangeEvent, useState} from "react";

export default function App(): JSX.Element
{
	const [text, setText] = useState<string>(() => "");
	
	return (
		<>
			<h1>Exercício useState #11</h1>
			
			<p>{text}</p>
			
			<input type="text" value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => setText(() => e.target.value)} />
		</>
	);
}