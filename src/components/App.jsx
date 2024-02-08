import "../scss/App.scss"
import ls from '../services/localStorage';

// Fichero src/components/App.jsx

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Routes>
        <Route
          path="/contacto"
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              contacto
            </h2>
          }
        />
      </Routes>

      <nav>
        <ul>
          <li>
            <a href="/#/">Ir al inicio</a>
          </li>
          <li>
            <a href="/#/contacto">Ir a contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
