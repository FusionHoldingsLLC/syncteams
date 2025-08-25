import { Metadata } from "next";
import DashboardClient from "./components/dashboard-client";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  // const session = await getServerSession(authOptions);
  return <DashboardClient />;
};

export default DashboardPage;
