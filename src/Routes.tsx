import { HashRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Post from './pages/Post/Post';

export default function Routes() {
  return (
    <HashRouter>
      <NavBar />
      <ReactRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </ReactRoutes>
    </HashRouter>
  );
}
