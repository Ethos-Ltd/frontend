import Image from 'next/image'
import Link from 'next/link'
import profile from '../assets/profile.jpg'
import emoji from "../assets/emoji.png"
import imageBox from "../assets/imageBox.png"
import locationPin from "../assets/locationPin.png"
import poll from "../assets/poll.png"
import video from "../assets/video.png"
import addMember from "../assets/addMember.png"
import setting from "../assets/setting.png"
import tree from "../assets/tree.png"
import PostCard from './PostCard'
import Timeline from './Timeline'
import posts from '@/app/dump/posts'

const icons = [
    imageBox,
    video,
    poll,
    emoji,
    locationPin,
]

const treeActions = [
    addMember,
    setting,
]

const Dash = () => {
  return (
    <div className="flex flex-row gap-32 items-center w-[1429px] h-[605px]">
        <div className="basis-2/5 m-12 h-full sm:mx-auto sm:w-full sm:max-w-sm justify-center items-center">
            <div className='flex flex-row'>
                <img src={profile} alt='pro-pic' className='rounded-full w-6 h-6 mr-8'/>
                <div className='flex flex-row flex-shink-0 rounded-full justify-between items-center p-1 gap-4 w-[488px] h-[62px] bg-[#D9D9D9]'>
                    <input type='text' placeholder="What's new?" className='rounded-full h-12 p-2'/>
                    <div className='flex flex-row items-center justify-between'>
                        {icons.map((icon, i) => (
                            <Link key={i} href="" className='flex gap-2'>
                                <Image src={icon} width={24} height={24} alt={icon}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className=''>
            {
                posts.map((post, i) => (
                    <div key={i}>
                        <PostCard profilePic={post.profilePic} name={post.name} relationship={post.relationship} postedAt={post.postedAt} photo={post.photo} message={post.message}/>
                    </div>
                ))
            }
            </div>
        </div>
        <div className="basis-3/5 flex-row gap-3 justify-end w-[821px] h-[415px]">
            <div className={`flex flex-col rounded-md tree `}>
                <div className='flex flex-row justify-between'>
                    {treeActions.map((treeAction, i) => (
                        <Link href="" key={i}>
                            <Image src={treeAction} width={24} height={24} alt={`tree-action`}/>
                        </Link>
                    ))}
                </div>
                <div>
                    <Image src={tree} width={600} height={450} alt='tree'/>
                </div>
            </div>
            <div className={`flex flex-col rounded-md tree`}>
                <Timeline/>
            </div>
        </div>
    </div>
  )
}

export default Dash