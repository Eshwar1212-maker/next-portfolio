import { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  const router = useRouter();
  return (
    <Sheet key={"left"}>
      <SheetTrigger>
        <button aria-label="Menu" className="mb-1 lg:hidden">
          <AiOutlineMenu color="white" size={30} />
        </button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Lets Connect</SheetTitle>

          <ul className="py-60 flex flex-col gap-10">
            <SheetClose>
              <li onClick={() => router.push("/")} className="cursor-pointer">
                Home
              </li>
            </SheetClose>
            <SheetClose>
              <li
                onClick={() => router.push("/work")}
                className="cursor-pointer"
              >
                Projects
              </li>
            </SheetClose>
            <SheetClose>
              <li
                onClick={() => router.push("/skills")}
                className="cursor-pointer"
              >
                Skills
              </li>
            </SheetClose>
            <SheetClose>
              <li
                onClick={() => router.push("/about")}
                className="cursor-pointer"
              >
                About
              </li>
            </SheetClose>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
