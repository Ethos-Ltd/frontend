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
    <div className="flex flex-row gap-2 items-center">
        <div className="basis-2/5 h-full sm:mx-auto sm:w-full sm:max-w-sm">
            <div className='flex flex-row'>
                <Image src={profile} alt='pro-pic' width={24} height={24} className='rounded-full'/>
                <div className='flex flex-row rounded-full justify-between items-center'>
                    <input type='text' placeholder="What's new?" className='basis-1/2 rounded-full'/>
                    <div className='flex flex-row items-center justify-between basis-1/2'>
                        {icons.map((icon, i) => (
                            <Link key={i} href="">
                                <Image src={icon} width={24} height={24} alt={icon}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <>
            {
                posts.map((post, i) => (
                    <div key={i}>
                        <PostCard profilePic={post.profilePic} name={post.name} relationship={post.relationship} postedAt={post.postedAt} photo={post.photo}/>
                    </div>
                ))
            }
            </>
        </div>
        <div className="basis-3/5 flex-row gap-1">
            <div className={`flex flex-col rounded-md tree`}>
                <div className='flex flex-row justify-between'>
                    {treeActions.map((treeAction, i) => (
                        <Link href="" key={i}>
                            <Image src={treeAction} width={24} height={24} alt={tree-action}/>
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