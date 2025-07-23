import React, { useState } from 'react';
import LearningForm from './components/LearningForm';
import LearningList from './components/LearningList';
import ProgressChart from './components/ProgressChart';

function App() {
    const [refresh, setRefresh] = useState(false);

    const triggerRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="App">
            <h2>Tech Learning Tracker Dashboard</h2>

            <LearningForm onItemAdded={triggerRefresh} />
            <hr />

            <LearningList refreshTrigger={refresh} />
            <hr />

            <ProgressChart />
        </div>
    );
}

export default App;
