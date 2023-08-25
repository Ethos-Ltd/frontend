const MenuInput = ({label='', name='', placeholder="", options=[]}) => {
  return (
    <div className='flex flex-col gap-1 rounded-full items-start justify-center'>
        <label>{label}</label>
        <select name={name} placeholder={placeholder}> 
          {options.map((option, i) => {
          <option key={i} value={option}>{option}</option>
        })}
        </select>
    </div>
  )
}

export default MenuInput