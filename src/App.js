import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/deploy-react/" element={<AllMeetupsPage />} />
        <Route path="/deploy-react/new-meetup" element={<NewMeetupPage />} />
        <Route path="/deploy-react/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
