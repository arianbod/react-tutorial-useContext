Context + Custom Hook Tutorial Project
Description
This React application demonstrates the use of React Context along with a custom hook for state management. It's a simple yet powerful example of how to create a global state using React Context and access it across components using a custom hook.

Features
Implementation of React Context for global state management.
Custom hook (useGlobalContext) for seamless access to the global state.
useState for local state management within components.
Installation
Ensure you have Node.js installed on your system before starting.

Follow these steps to set up the project:

Clone the Repository

bash
Copy code
git clone [URL of your repository]](https://github.com/arianbod/react-tutorial-useContext)
cd react-tutorial-useContext
Install Dependencies

bash
Copy code
npm install
Start the Development Server

bash
Copy code
npm run dev
This will typically start the server on http://localhost:5127.

Project Structure
main.jsx: The entry point of the React application.

App.jsx: The main application component.

AppContext.jsx: Defines the React Context and the global state provider.

Context.jsx: Contains the custom hook useGlobalContext.

Example from App.jsx:

jsx
Copy code
import { useState } from 'react';
import AppContext from './Context.jsx';

function App() {
    const [count, setCount] = useState(0);
    // ... rest of the code
}

export default App;
Usage
The application initializes with a default global state value, which is then accessible and modifiable across components via the useGlobalContext hook.

Contributing
Feel free to contribute to the project. Fork the repository and submit pull requests.

License
This project is licensed under the MIT License.

