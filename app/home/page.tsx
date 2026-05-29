import { redirect } from "next/navigation";

const HomePage = () => {
  console.log("New Version")
  redirect("/");
};

export default HomePage;
