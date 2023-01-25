import Registration from "../UI/Pages/Registration";
import Login from "../UI/Pages/Login";
import Home from "../UI/Pages/Home";

interface IRoutes {
    path: string,
    page: () => JSX.Element;
}
export const Routes: IRoutes[] = [
    {
        path: "/registration",
        page: Registration
    },
    {
        path: "/login",
        page: Login
    },
    {
        path: "",
        page: Home
    }
]