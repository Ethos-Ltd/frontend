import Image from 'next/image'
import Reaction from './Reaction'
import Comment from './Comment'
import option from "/assets/option.png"

const PostCard = ({profilePic, name, relationship, postedAt, photo, message}) => {
  return (
    <div className={`flex flex-col gap-3 items-center justify-center w-[522px] h-[605px] rounded-md my-5 post-card`}>
      <div className='flex flex-row justify-between items-start gap-2'>
        <Image src={profilePic} width={24} height={24} alt='pro-pic' className='rounded-full'/>
        <div className='flex flex-col justify-center items-start'>
          <div className='flex flex-row justify-center items-start'>
            <h2 className='text-sm not-italic font-semibold text-white mx-3'>{name}</h2>
            <p className='text-sm not-italic font-semibold text-white'>{postedAt}</p>
          </div>
          <p className='text-sm italic font-light text-white mx-2'>{relationship}</p>
        </div>
        <Image src={option} alt='option' width={23} height={28} className='flex-shrink-0 ml-56' style={{color: "white"}}/>
      </div>
      <div className='flex flex-col justify-between rounded-lg bg-white mx-0 flex-shrink-0'>
        <p className='text-gray-800 text-sm not-italic font-normal p-3'>
          {message}
        </p>
        <Image src={photo} alt='photo' width={430} height={255} className='flex-shrink-0 rounded-sm'/>
      </div>
      <div>
        <Reaction/>
      </div>
      <div>
        <Comment/>
      </div>
    </div>
  )
}

export default PostCard