import Link from 'next/link'

const AgreeTC = () => {
  return (
    <div className='flex flex-row'>
    <input type='checkbox' required/>
    <p>
        Agree to <Link href="/">terms and conditions</Link>
    </p>
    </div>
  )
}

export default AgreeTC