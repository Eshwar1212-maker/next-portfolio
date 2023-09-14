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
  import {MdFamilyRestroom, MdOutlineSportsGymnastics} from 'react-icons/md'
  import {BiSolidMessageRounded} from 'react-icons/bi'
  import {CiBasketball} from 'react-icons/ci'
import { useRouter } from "next/navigation"
import Link from "next/link"


  
  export function DropDown() {
    const router = useRouter()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-1" asChild>
          <Button className="text-xl font-light" variant="default">Work <IoIosArrowDropdown  size={20}/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <div className="flex">
           <Link href="/work">
           <DropdownMenuLabel className="underline cursor-pointer">Browse My Projects </DropdownMenuLabel>
           </Link> 
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
        <Link href="/about">
          <Button  className="text-xl font-light" variant="default">About</Button>
        </Link>
       
      </DropdownMenu>
    )
  }
  
  export function DropThree() {
    const router = useRouter()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link href="/skills">
          <Button className="text-xl font-light" variant="default">Skills</Button>
          </Link>
        </DropdownMenuTrigger>
      </DropdownMenu>
    )
  }
  