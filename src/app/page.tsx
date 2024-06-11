// import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "My Financial App",
  description: "Personal Financial Management App",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-black/90">Welcome to My Financial App!</h1>
    </div>
  );
}
