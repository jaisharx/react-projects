import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = () => {
    const uniqueCategories = new Set(items.map((item) => item.category));
    const allCategories = ['all', ...uniqueCategories];

    return allCategories;
};

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories());

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const filteredItems = items.filter(
            (item) => item.category === category
        );
        setMenuItems(filteredItems);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
