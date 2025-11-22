import { Button } from "@/components/ui/button"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PublicLayouts from "@/layouts/PublicLayouts";
import Homepage from "@/routes/home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* public routes */}

          <Route element={<PublicLayouts />}>
          <Route index element={<Homepage />} />
          </Route>
          {/* protacted routes */}
        </Routes>
      </Router>
    </div>
  )
}

export default App