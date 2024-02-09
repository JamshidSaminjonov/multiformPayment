import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import { PlansProvider } from "./context/PlansContext";
import { AddOnsProvider } from "./context/AddOnsContext";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <PlansProvider>
      <AddOnsProvider>
        <BrowserRouter>
          <div className="bg-blue-500/100   mt-[500px] mt-[300px] rounded-xl shadow-xl p-4 flex flex-col justify-between">
            <Sidebar />
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/selectplan" element={<SelectPlan />} />
              {/* <Route path="/addons" element={<AddOns />} /> */}
              {/* <Route path="/summary" element={<Summary />} /> */}
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AddOnsProvider>
    </PlansProvider>
  );
};

export default App;
