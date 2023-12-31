/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	0;
	const error: any = useRouteError();
	console.error(error);
	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default ErrorPage;
