import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index("Pages/HomePage.tsx"),
    route('account', 'Pages/AccountPage.tsx'),
    route('about-us', 'Pages/AboutUsPage.tsx'),


    route('order', 'Pages/OrderPage.tsx', [
        route('infos-zum-event', 'OrderPage/InfosZumEvent.tsx'),
        route('deine-box', 'OrderPage/DeineBox.tsx'),
        route('bestellung', 'OrderPage/Bestellung.tsx'),
        route('success', 'OrderPage/SuccessFullOrder.tsx')
    ]),

    route('login', 'Pages/Login.tsx'),
    route('faq', 'Pages/FAQPage.tsx'),


] satisfies RouteConfig;
