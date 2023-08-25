import React from 'react'

const CountryCodeInput = ({label='', name='', placeholder="", options=[]}) => {
    <div className='flex flex-col gap-1 rounded-full items-start justify-center'>
        <label>{label}</label>
        <select name={name} placeholder={placeholder}> 
          {options.map((option, i) => {
            <option key={i} value={option.code}>
                <span>{option.flag}</span>
                <span>{option.code}</span>
            </option>
        })}
        </select>
    </div>
}

export default CountryCodeInput