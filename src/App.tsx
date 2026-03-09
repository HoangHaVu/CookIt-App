import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="font-display bg-background-light text-gray-900 min-h-screen">
                <Routes>
                    <Route path="/" element={<div className="p-4 text-primary">CookIt! App Setup Complete</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
