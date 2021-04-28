import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Chinese (traditional)',
        value: 'zh-TW'
    },
    {
        label: 'Croatian',
        value: 'hr'
    },
    {
        label: 'Czech',
        value: 'cs'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Estonian',
        value: 'et'
    },
    {
        label: 'Finnihs',
        value: 'fi'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Galician',
        value: 'gl'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Greek',
        value: 'el'
    },
    {
        label: 'Haitian Creole',
        value: 'ht'
    },
    {
        label: 'Hawaiian',
        value: 'haw'
    },
    {
        label: 'Hebrew',
        value: 'he'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Hungarian',
        value: 'hu'
    },
    {
        label: 'Icelandic',
        value: 'is'
    },
    {
        label: 'Irish',
        value: 'ga'
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label={"Select a Language"}
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr/>
            <h3 className={"ui header"}>Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;