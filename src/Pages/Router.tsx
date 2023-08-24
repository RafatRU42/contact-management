import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "./Home";
import Contact from "./Contact";
import AddContact from "./AddContact";

export const route = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/contact',element:<Contact></Contact>},
        {path:'/addContact',element:<AddContact></AddContact>},
    ]},
])