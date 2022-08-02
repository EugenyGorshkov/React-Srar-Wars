import { HomePage } from '@containers';
// import { PeoplePage } from '@containers';
// import { PersonPage } from '@containers';
import { NotFoundPage } from '@containers';
import { FavoritesPage } from '@containers';
// import { SearchPage } from '@containers';
import { ErrorMessage } from '@components';
import { LogInPage } from '@containers';


export const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    // {
    //     path: '/people',
    //     element: <PeoplePage />
    // },
    // {
    //     path: '/people/:id',
    //     element: <PersonPage />
    // },
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


