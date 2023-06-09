import { useContext } from "react";
import { AuthContext } from "./Auth";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedRoute = ({ children, ...rest }) => {
	const { authUser } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				authUser ? (
					children
				) : (
					<Redirect to={{ pathname: '/', state: { from: location } }} />
				)
			}
		/>
	);
};

export default ProtectedRoute;