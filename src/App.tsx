import React from "react";
import useHashNavigation from "./hooks/useHashNavigation.tsx";
import Page from "./components/Page.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import {Container} from "react-bootstrap";

const App: React.FC = () => {
    const {page, param} = useHashNavigation()

    return <>
        <NavigationBar />

        <Container>
            <Page page={page} param={param} />
        </Container>
    </>
}

export default App;
