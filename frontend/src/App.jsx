import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome, Login, Signup } from "./pages";
const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
