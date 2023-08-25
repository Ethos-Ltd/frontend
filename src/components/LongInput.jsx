const LongInput = ({label='', placeholder='', type=''}) => {
  return (
    <div className='flex flex-col gap-1 rounded-full items-start justify-center'>
        <label>{label}</label>
        <input placeholder={placeholder} type={type} required/>
    </div>
  )
}

export default LongInput