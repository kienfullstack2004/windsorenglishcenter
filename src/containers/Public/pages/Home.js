import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import loading from "../../../assets/img/loading.jpg"
import Footer from "../components/Footer";
import Model from "../components/Model";

function Home() {
    return (<div>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer/>
    </div>);
}

export default Home;