import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home/Home';
import Sobre from './routes/Sobre/Sobre';
import SorteioTimes from './routes/SorteioTimes/SorteioTimes';
import Campeonatos from './routes/Campeonatos/Campeonatos';
import Times from './routes/Campeonatos/Times';
import Jogos from './routes/Campeonatos/Jogos';
import Classificacao from './routes/Campeonatos/Classificação';
import Login from './routes/Login/Login';
import HomeAdmin from './routes/Admin/HomeAdmin';
import DefinirTimes from './routes/Admin/DefinirTimes';
import Campeonato from './routes/Admin/Campeonato';
import DefinirTimesCampeonato from './routes/Admin/DefinirTimesCampeonato';
import DefinirJogos from './routes/Admin/DefinirJogos';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/sorteio-times',
        element: <SorteioTimes/>
      },
      {
        path: '/campeonato',
        element: <Campeonatos/>
      },
      {
        path: '/campeonato/times',
        element: <Times/>
      },
      {
        path: '/campeonato/jogos',
        element: <Jogos/>
      },
      {
        path: '/campeonato/classificacao',
        element: <Classificacao/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/admin',
        element: <HomeAdmin/>
      },
      {
        path: '/admin/gerenciar-times',
        element: <DefinirTimes/>
      },
      {
        path:'/admin/campeonato',
        element: <Campeonato/>
      },
      {
        path:'/admin/definir-times-campeonato',
        element: <DefinirTimesCampeonato/>
      },
      {
        path:'/admin/definir-jogos-campeonato',
        element: <DefinirJogos/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


