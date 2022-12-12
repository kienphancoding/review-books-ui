import clsx from "clsx";
import style from "./PageNotFound.module.scss";

const PageNotFound = () => {
    return ( 
        <div className={clsx(style.wrapper)}>
            <img src="https://i.pinimg.com/564x/f9/f4/6a/f9f46a2484c7bad70ae0e17a732f6082.jpg" alt="Anh page not found"/>
        </div>
     );
}
 
export default PageNotFound;