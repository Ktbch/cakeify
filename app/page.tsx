import { LandingBanner } from "./_design_system/ui/LandingPage/Landingbanner";
import { AuthProvider } from "./context/AuthContext";

export default function Home() {
  return (
    <div className="">
      <LandingBanner />
    </div>
  );
}
