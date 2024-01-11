import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

type isPaths = {
    [AppRoutes: string]: string;
}
export const RoutePath: isPaths = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

type isConfig = {
    [AppRoutes: string]: RouteProps;
}
export const routerConfig: isConfig = {
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/> 
    }
}
