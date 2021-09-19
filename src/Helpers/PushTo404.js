import { useHistory } from "react-router-dom";

const PushTo404 = () => {
	const history = useHistory();
	return history.push("/404");
};

export default PushTo404;
