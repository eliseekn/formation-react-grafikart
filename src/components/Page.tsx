import React from "react";
import Home from "../pages/Home.tsx";
import Post from "../pages/Post.tsx";
import Contact from "../pages/Contact.tsx";
import NotFound from "../pages/NotFound.tsx";

type Props = {
    page: string
    param?: number
}

const Page: React.FC<Props> = ({page, param}) => {
    if (param) {
        return <Post param={param} />
    }

    switch (page) {
        case 'home': return <Home />;
        case 'contact': return <Contact />
        default: return <NotFound />
    }
}

export default Page
