import {useRouteError} from "react-router-dom";

const ErrorPage = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-page">
            <h1>Something went wrong!!</h1>
            <h2>{err.statusText}dd{err.useRouteError} </h2>
            <span>
                <h1>err.status : {err.statusText}</h1>
            </span>
        </div>
    );
};
export default ErrorPage;