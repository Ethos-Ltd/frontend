import Image from 'next/image'

const SignUp = () => {
  return (
    <div className="flex justify-center items-center flex-shrink-0 w-full h-full bg-[url('/assets/login.png')]" >
        <div className='flex-row flex-shrink-0 h-full basis-11/12'>
            <div className='basis-3/5 flex-col'>
                <Image src='/assets/pp.png'/>
                <h2 className='text-center text-3xl not-italic font-medium text-white'>
                    Welcome to your Virtual ancestral home; a place where you can be
                    present and grow together
                </h2>
            </div>
            <div className='basis-2/5 flex-col'>
                <h2 className='text-3xl not-italic font-bold text-white'>
                    Sign Up
                </h2>
                <SignUpForm/>
            </div>
        </div>
    </div>
  )
}

export default SignUp