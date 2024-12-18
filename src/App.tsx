import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from './pages/Main/Main.tsx';
import {Login} from './pages/Login/Login.tsx';
import {Favorites} from './pages/Favorites/Favorites.tsx';
import {Offer} from './pages/Offer/Offer.tsx';
import {NotFound} from './pages/NotFoundPage/NotFound.tsx';
import {AppRoute} from './utils/const.ts';
import {PrivateRoute} from './PrivateRoute.tsx';
import {favorites} from './mocks/favorites.ts';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Main/>}/>
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute>
          <Favorites places={favorites}/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<Offer/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);
