import React, { useState, useEffect } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [colorList, setColorList] = useState([]);

    const generateColors = (val) => {
        try {
            setError(false);
            let colors = new Values(val).all(10);
            setColorList(colors);
        } catch (err) {
            setError(true);
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generateColors(color);
    };

    useEffect(() => {
        generateColors('#03a9f4');
    }, []);

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        placeholder="#03a9f4"
                        className={error ? 'error' : null}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <button type="submit" className="btn">
                        Generate
                    </button>
                </form>
            </section>
            <section className="colors">
                {colorList.map((color, index) => (
                    <SingleColor
                        key={index}
                        index={index}
                        hexColor={color.hex}
                        {...color}
                    />
                ))}
            </section>
        </>
    );
}

export default App;
