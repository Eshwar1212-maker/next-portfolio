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
        <Link href="/work">
        <Button className="text-xl font-light" variant="default">Projects </Button>
           </Link> 
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
  