import { useRouteError } from "react-router-dom";


export default function PageError() {

    const error = useRouteError();
    console.log(error);

    return (
        <>
            <p>Une erreur est survenue !</p>
        </>
    );
}
