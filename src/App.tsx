import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Body from './components/Body'
import AuthPage from './pages/AuthPage'
import BrowsePage from './pages/BrowsePage'
import store from './store'

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
				{
					path: '/browse',
					element: <BrowsePage />,
				},
			],
		},
	])

	return (
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	)
}

export default App
