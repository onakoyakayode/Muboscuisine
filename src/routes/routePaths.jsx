import Allitems from "../Component/AllItems/Allitems";
import Book from "../Component/Book/Book";
import Chops from "../Component/Chops/Chops";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Intercontinental from "../Component/Intercontinental/Intercontinental";
import LocalDish from "../Component/Local Dish/LocalDish";
import Menu from "../Component/Menu/Menu";
import Soups from "../Component/Soups/Soups";





export const pageRoutes = [
    {
        path: '/allitems',
        element: <Allitems />
    },
    {
        path: '/',
        element: <Header/>,
    },
    {
        path: '/intercontinental',
        element: <Intercontinental />
    },
    {
        path: '/soups',
        element: <Soups />
    },
    {
        path: '/localdish',
        element: <LocalDish />
    },
    {
        path: '/chops',
        element: <Chops />
    },
    {
        path: '/menu',
        element: <Menu />
    },
    {
        path: '/footer',
        element: <Footer />
    },
    {
        path: '/book',
        element: <Book />
    }
]