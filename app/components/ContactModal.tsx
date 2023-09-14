"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { AiFillLinkedin, AiOutlineCopy } from "react-icons/ai";



const ContactButton = ({}) => {


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription className=" space-y-2">
            <div className="pt-4">I am very active on my Linkedin, or email, get in touch!</div>

            <div className="flex gap-2 pt-5">
              <button className="border-white border-[1px] bg-white p-3 text-black rounded-lg hover:bg-slate-200 transition ease-in-out duration-500">
                <a
                  href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
                  target="_blank"
                >
                  <span className="relative text-black text-md flex flex-row gap-1">
                    Linkedin
                    <span className="my-auto">
                      {" "}
                      <AiFillLinkedin />
                    </span>
                  </span>
                </a>
              </button>
              <div
                onClick={() => toast.success("Link Copied!")}
                className="flex gap-2 bg-slate-700 p-3 cursor-pointer"
              >
                <p>eshwartangirala11@gmail.com</p>
                <span>
                  <AiOutlineCopy size={21} />
                </span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;
