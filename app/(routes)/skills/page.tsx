import { FC } from 'react'
import { BiLogoMongodb, BiLogoNodejs, BiLogoReact } from 'react-icons/bi'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { SiPrisma, SiTailwindcss} from 'react-icons/si'
interface pageProps {
  
}
const page: FC<pageProps> = ({
  
}) => {
  return (
    <div className='py-20 flex flex-col lg:flex-row mx-auto justify-between px-4 lg:px-0 max-w-[1260px] xl:py-20 pr-4 lg:pr-40 2xl:bg-black rounded-lg text-white'>
      
      <div className='space-y-4 flex flex-col gap-4 max-w-xl mx-auto'>
        <h3 className='text-xl lg:text-2xl font-semibold'>Over the past few years, these are the technical skills I've honed</h3>
        <h4 className='font-semibold text-md lg:text-lg'>Front end</h4>
        <ul className='flex flex-row gap-2 flex-wrap'>
          <li> HTML,</li>
          <li> CSS,</li>
          <li> Javascript,</li>
          <li> Typescript,</li>
          <li> Reactjs,</li>
          <li> Redux,</li>
          <li> React query,</li>
          <li> Nextjs,</li>
          <li> Tailwind CSS,</li>
          <li> UI/UX</li>
        </ul>
        <h4 className='font-semibold text-lg'>Back end</h4>
        <ul className='flex flex-row gap-2 mx-auto flex-wrap'>
          <li> Python,</li>
          <li> Nodejs,</li>
          <li> Expressjs,</li>
          <li> Flask,</li>
          <li>Nestjs,</li>
          <li> Mongodb,</li>
          <li> Sql,</li>
          <li> Prisma,</li>
          <li> Pusher.io,</li>
          <li> Redis,</li>
          <li> Firebase/Firestore</li>
        </ul>
        <h4 className='font-semibold text-lg'>Summary</h4>
        <p className='text-sm'>These are the tools that I love working with to build my apps, I also believe that I can easily pick up any other language or framework, 
          I prefer to specialize and deeply know one, instead of failing to master all of them. I believe certain projects have their own best tool. 
        </p>
      </div>
      <div className='hidden lg:flex flex-col gap-10'>
        <h3 className='text-2xl font-semibold'>My current stack</h3>
        <div className='flex flex-row justify-center gap-6'>
          <div>
          <p>Reactjs</p>
          <BiLogoReact size={80}/>
          </div>

          <div className='flex flex-col justify-center'>
          <p>Nextjs</p>
          <TbBrandNextjs size={80}/>
        </div>
        <div className='flex flex-col justify-center'>
          <p>Typescript</p>
          <TbBrandTypescript size={80}/>
        </div>
        </div>
        <div className='flex flex-row justify-center gap-6'>
          <div>
          <p>Nodejs</p>
          <BiLogoNodejs size={80}/>
          </div>

          <div className='flex flex-col justify-center'>
          <p>Prisma</p>
          <SiPrisma size={80}/>
        </div>
        <div className='flex flex-col justify-center'>
          <p>Mongodb</p>
          <BiLogoMongodb size={80}/>
        </div>
        </div>
        <div className='flex flex-row justify-center gap-6'>
          <div>
          <p>TailwindCSS</p>
          <SiTailwindcss size={80}/>
          </div>

          <div className='flex flex-col justify-center'>
          <p>Reactjs</p>
          <BiLogoReact size={80}/>
        </div>
    
        </div>
      </div>
    </div>
  )
}

export default page