import Image from 'next/image'
import Logo from '../assets/logo.png'
import ConstructionImage from '../assets/under_construction.png' 
const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center p-2">
      {/* Logo  */}
      <div className='flex gap-2 my-8 items-center'>
        <Image src={Logo} alt='logo-img' height={40} width={40}/>
        <h1 className='font-bold uppercase text-5xl'>Tech<span className='text-[#007DFC]'>Masih</span></h1>
      </div>
      <h4 className='text-2xl mb-8 font-medium text-center'>The Website Under Construction</h4>
      <Image src={ConstructionImage} alt='construction-image' className='my-4 mx-2 h-full w-full md:my-8 md:h-[300px] md:w-[550px]' aria-atomic/>
    </main>
  )
}

export default Home;