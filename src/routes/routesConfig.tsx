import { HomePage } from 'containers/HomePage';
import { PeoplePage } from 'containers/PeoplePage';
import { PersonPage } from 'containers/PersonPage';
import { NotFoundPage } from 'containers/NotFoundPage';
import { FavoritesPage } from 'containers/FavoritesPage';
import { SearchPage } from 'containers/SearchPage';
import { ErrorMessage } from 'components/ErrorMessage';
import { LogInPage } from 'containers/LogInPage';


export const routesConfig = [
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
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    // {
    //     path: '/search',
    //     element: <SearchPage />
    // },
    {
        path: '/login',
        element: <LogInPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]


