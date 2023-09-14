import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";
interface SyncedDialogProps {}
const SyncedDialog: FC<SyncedDialogProps> = ({}) => {
  return (
    <Dialog >
      <DialogTrigger>More Details</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Synced</DialogTitle>
          <DialogDescription className="text-[12px] sm:text-md">
            Synced is an all in one sports/productivity application for athletes
            and teams. It was made to help manage the lives of athletes in one
            platform. Athletes use Whats App to create group chats, Google
            Calender to schedule their events, FitNotes to track their workouts,
            why not do it all in one app?
          </DialogDescription>

          <div className="h-[555px] sm:h-[700px] sm:max-h-full">
            <div>
              <h3 className=" font-semibold pt-4 pb-2">Key Features</h3>
              <ul className=" list-disc text-[12px] sm:text-sm space-y-0 sm:space-y-4 px-4">
                <li>
                  Full Workout log, users can log workouts for calender days
                </li>
                <li>
                  Full progressive overload tracker, personal record
                  notifications, along with consistency and intensity charts
                  logging days you went to the gym each month, and exercises
                  completed each month.
                </li>
                <li>
                  Fully fledged messaging system so teams can create group chats
                  and communicate. With admin features, ability to boot members
                  from a group, and invite other users to their group. Users can
                  also send images.
                </li>
                <li>
                  Full Calender system where athletes can track everything they
                  need regarding their sport, such as practices, meetings,
                  games, etc. Supports a monthly, weekly, and daily view.
                </li>
                <li>
                  Along with a private calender, there is a full team workspace
                  calender. Users can create a private team with as many users
                  as they want, and track events in their respecctive calender.
                </li>
                <li>
                  Full notification system, users will get notifications when
                  another user invites them to a group chat or team, and will
                  have the option to join or decline.
                </li>
                <li>
                  Used Tailwind CSS and Shadcn/ui for a beautiful responsive
                  design accross the whole app, prioritizing accesibility and
                  semantics.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] sm:text-sm py-2 sm:py-4">
                {" "}
                For a more technical description on how I was able to add all of
                the features, please view the github repository, or the README.
              </p>
              <a
                href="https://github.com/Eshwar1212-maker/Sports-Sync"
                target="_blank"
              >
                <Button variant={"secondary"}>Github Repository</Button>
              </a>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SyncedDialog;
