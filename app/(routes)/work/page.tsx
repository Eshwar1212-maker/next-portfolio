import { FC } from "react";
import ProjectItem from "./components/ProjectItem";
import { ProjectItemTwo } from "./components/ProjectItemTwo";
interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="px-4 bg-black sm:bg-inherit">
      <ProjectItem />
      <ProjectItemTwo />
    </div>
  );
};

export default page;
