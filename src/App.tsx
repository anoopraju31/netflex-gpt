import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import AuthPage from './pages/AuthPage'

const App = () => {
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Body />,
			children: [
				{
					path: '/',
					element: <AuthPage />,
				},
			],
		},
	])

	return <RouterProvider router={appRouter} />
}

export default App
