import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritesPage from '@containers/FavoritesPage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage />
    }
]

export default routesConfig;