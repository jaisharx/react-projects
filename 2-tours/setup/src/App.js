import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    const fetchTours = async () => {
        setLoading(true); // safety-precaution

        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }

        // console.log(tours);
    };

    useEffect(() => {
        fetchTours();
    }, []); // fetching the tours...

    if (loading) {
        return (
            <div className="loading-container">
                <Loading />
            </div>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>No Tours Left</h2>
                    <button className="btn" onClick={fetchTours}>
                        Refresh
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
