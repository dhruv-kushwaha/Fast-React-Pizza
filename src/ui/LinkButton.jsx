import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {to === "-1" ? (
        <button onClick={() => navigate(-1)}>{children}</button>
      ) : (
        children
      )}
    </Link>
  );
}

export default LinkButton;
