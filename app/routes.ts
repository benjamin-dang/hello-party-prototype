import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("Pages/HomePage.tsx"),
    route('account','Pages/AccountPage.tsx'),
    route('about-us', 'Pages/AboutUsPage.tsx'),
    route('order', 'Pages/OrderPage.tsx'),

] satisfies RouteConfig;
