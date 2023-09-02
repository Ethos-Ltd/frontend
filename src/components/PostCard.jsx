import Image from 'next/image'
import Reaction from './Reaction'
import Comment from './Comment'

const PostCard = ({profilePic, name, relationship, postedAt, photo}) => {
  return (
    <div className={`flex flex-col gap-3 items-center justify-center w-[522px] h-[605px] rounded-md post-card`}>
      <div className='flex flex-row'>
        <Image src={profilePic} width={24} height={24} alt='pro-pic'/>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <h2>{name}</h2>
            <p>{postedAt}</p>
          </div>
          <p>{relationship}</p>
        </div>
        <Image src={option} alt='option' width={23} height={28} className='flex-shrink-0'/>
      </div>
      <div className='flex flex-col rounded-md bg-white w-[481px] h-[499px] flex-shrink-0'>
        <p>
          {message}
        </p>
        <Image src={photo} alt='option' width={430} height={255} className='flex-shrink-0 rounded-sm'/>
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