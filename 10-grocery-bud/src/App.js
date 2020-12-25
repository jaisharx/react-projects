import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getListFromLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getListFromLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: '',
    });

    const showAlert = (show = false, msg = '', type = '') => {
        setAlert({ show, msg, type });
    };

    const clearList = () => {
        showAlert(true, 'All items deleted', 'danger');
        setList([]);
    };

    const removeItem = (id) => {
        showAlert(true, 'Item removed', 'danger');
        setList(list.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        console.log(specificItem);
        setIsEditing(true);
        setEditId(id);
        setName(specificItem.title);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            // display alert
            showAlert(true, 'Please enter a value', 'danger');
        } else if (name && isEditing) {
            // deal with edit
            setList(
                list.map((item) => {
                    if (item.id === editId) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );
            showAlert(true, 'Updated Item', 'success');
            setName('');
            setEditId('');
            setIsEditing(false);
        } else {
            showAlert(true, 'Item added to the list', 'success');
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItem]);
            setName('');
        }
    };

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show ? (
                    <Alert {...alert} removeAlert={showAlert} />
                ) : null}
                <h3>Grocery Bud</h3>

                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="eg. eggs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 ? (
                <div className="grocery-container">
                    <List
                        items={list}
                        editItem={editItem}
                        removeItem={removeItem}
                    />
                    <button className="clear-btn" onClick={clearList}>
                        Clear Items
                    </button>
                </div>
            ) : null}
        </section>
    );
}

export default App;
