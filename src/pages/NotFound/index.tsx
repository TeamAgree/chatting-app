import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>
                없는 페이지입니다.
            </h2>
            <p>
                <Link to="/">home으로 이동</Link>
            </p>
        </div>
    )
}

export default NotFound;