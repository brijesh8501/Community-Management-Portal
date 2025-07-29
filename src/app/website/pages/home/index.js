import { useGlobalContext } from "../../../../state/globalContext";
import Header from '../../layout/header';
import Footer from '../../layout/footer';

const Home = () => {

    // State
    const { state, dispatch } = useGlobalContext();

    return (
        <div className="min-vh-100 peacock-gradient-bg">
        <Header/>
        <div>Website Home</div>
        <Footer/>
        </div>
    )

}

export default Home;