import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PagaLoader/PageLoader';


const AppRouter = () => (
    <Suspense fallback={<PageLoader/>}>
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (

                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />

            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
