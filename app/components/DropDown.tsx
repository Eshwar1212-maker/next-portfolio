"use client"

  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {IoIosArrowDropdown, IoIosArrowRoundForward} from "react-icons/io"
  import {MdFamilyRestroom, MdOutlineSportsGymnastics} from 'react-icons/Md'
  import {BiSolidMessageRounded} from 'react-icons/Bi'
  import {CiBasketball} from 'react-icons/Ci'
import { useRouter } from "next/navigation"


  
  export function DropDown() {
    const router = useRouter()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-1" asChild>
          <Button className="text-xl font-light" variant="outline">Work <IoIosArrowDropdown  size={20}/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <div className="flex">
            <DropdownMenuLabel onClick={() => router.push("/work")} className="underline cursor-pointer">Browse My Projects </DropdownMenuLabel>
            <div className=" -rotate-45">
            <IoIosArrowRoundForward  size={28}/>
            </div>
            </div>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="gap-2">
              <MdOutlineSportsGymnastics size={27}/>
              <span>Synced</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <BiSolidMessageRounded size={27}/>
              <span>SwiftChat</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <CiBasketball size={27} />
              <span>BasketballFit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <MdFamilyRestroom size={27}/>
              <span>FamilyGram</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  export function DropTwo() {
    const router = useRouter()

    return (
      <DropdownMenu>
        <div>
          <Button onClick={() => router.push("/about")} className="text-xl font-light" variant="outline">About</Button>
        </div>
       
      </DropdownMenu>
    )
  }
  
  export function DropThree() {
    const router = useRouter()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button onClick={() => router.push("/skills")} className="text-xl font-light" variant="outline">Skills</Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    )
  }
  