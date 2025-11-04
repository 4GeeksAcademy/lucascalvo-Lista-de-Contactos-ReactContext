import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!!</h1>
            <h3>{store.saludo}</h3>
            <h3>{store.saludo}</h3>

            <Link to="/informacion">
                <button className="btn btn-danger">Ir a Info</button>
            </Link>

            <Link to="/agenda-lucas" className="ms-2">
                <button className="btn btn-danger">Ir a agenda Lucas</button>
            </Link>

            <p className="mt-3">
                <img src={rigoImageUrl} alt="Rigo baby" />
            </p>
        </div>
    );
};
