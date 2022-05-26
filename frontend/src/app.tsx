import {Greet} from "../wailsjs/go/main/App";
import {useState} from "preact/hooks";
import { Layout } from "./layout/layout";

export function App() {
    const [resultText, setResultText] = useState<string>("Please enter your name below 👇");
    const [name, setName] = useState<string>('');
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <Layout>
            <div id="App">
                <h1 id="result" class="title has-text-white">{resultText}</h1>
                <div class="field">
                    <div class="box">
                        <label class="label has-text-white">Your Name</label>
                        <div class="control">
                            <input class="input is-large" onChange={(e) => setName(e.currentTarget.value)} autoComplete="off" name="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button" onClick={greet}>Greet</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
