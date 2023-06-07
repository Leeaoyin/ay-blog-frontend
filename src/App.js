import { useRoutes } from 'react-router-dom';
import './App.css';

import "@arco-design/web-react/dist/css/arco.css";

import { routers } from './routers';




function App() {
  return (
    <div className="App">
      {useRoutes(routers)}
    </div>
  );
}

export default App;
