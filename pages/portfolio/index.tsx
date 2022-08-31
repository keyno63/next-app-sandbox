import {NextPage} from "next";
import Header from "../../components/header/Header";
import Homepage from "./Homepage";
import About from "./About";

const Portfolio: NextPage = () => {
    return (
        <div className="Portfolio">
            <Header></Header>
            <Homepage />
            <About />
        </div>
        )
}

export default Portfolio;