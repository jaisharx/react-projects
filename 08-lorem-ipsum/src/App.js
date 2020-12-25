import React, { useState } from 'react';
import data from './data';

export default function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setText(data.slice(0, +count));
    };

    return (
        <section className="section-center">
            <h3>tired of boring lorem ipsum</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">paragraphs:</label>
                <input
                    min="0"
                    max="8"
                    type="number"
                    name="amount"
                    id="amount"
                    value={count}
                    onChange={(e) => setCount(+e.target.value)}
                />
                <button type="submit" className="btn">
                    Generate
                </button>
            </form>
            <article className="lorem-text">
                {text.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}
            </article>
        </section>
    );
}
