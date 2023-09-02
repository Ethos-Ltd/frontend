import Image from 'next/image'
import Link from 'next/link'

const Dash = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
        <div className="basis-2/5 h-full sm:mx-auto sm:w-full sm:max-w-sm">
            <div className='flex flex-row'>
                <Image src={profile} width={24} height={24} className='rounded-full'/>
                <div className='flex flex-row rounded-full'>
                    <input type='text' placeholder="What's new?" className='basis-1/2 rounded-full'/>
                    <div className='flex flex-row items-center justify-between'>
                        {icons.map((icon, i) => (
                            <Link key={i} href="">
                                <Image src={icon} width={24} height={24}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <>
            {
                posts.map((post, i) => (
                    <div key={i}>
                        <PostCard/>
                    </div>
                ))
            }
            </>
        </div>
        <div className="basis-3/5">
            <div className='flex flex-col rounded-md'>
                <div className='flex flex-row justify-between'>
                    {treeActions.map((treeAction, i) => (
                        <Link href="" key={i}>
                            <Image src={treeAction} width={24} height={24}/>
                        </Link>
                    ))}
                </div>
                <div>
                    <Image src={tree} width={600} height={450}/>
                </div>
            </div>
            <div>
                <Timeline/>
            </div>
        </div>
    </div>
  )
}

export default Dash