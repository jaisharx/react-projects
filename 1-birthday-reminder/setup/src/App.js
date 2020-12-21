import React, { useState } from 'react';
import data from './data';
import List from './List';

const makeTitle = (len) => {
    let title = '';

    if (len !== 0) {
        title = <h3>{len} birthdays today.</h3>;
    } else {
        title = <h3>No birthdays left.</h3>;
    }

    return title;
};

function App() {
    const [people, setPeople] = useState(data);

    return (
        <main>
            <section className="container">
                {makeTitle(people.length)}
                <List people={people} />
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default App;
