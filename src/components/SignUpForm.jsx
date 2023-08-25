import { countryCodes, flagPlaceHolder, genders, names, nationalities } from "@/dataDump/signupForm"
import LongInput from "./LongInput"
import AgreeTC from "./AgreeTC"
import MenuInput from "./MenuInput"
import CountryCodeInput from "./CountryCodeInput"

const SignUpForm = () => {
  return (
    <>
    <form>
        <div className='grid grid-cols-3 grid-flow-row gap-3'>
          {names.map((name, i) => (
            <div key={i}>
              <LongInput label={name.label} placeholder={name.placeholder} type={name.type}/>
            </div>
          ))}
        </div>
        <div>
          <LongInput label="Email" placeholder="Enter your email" type="email"/>
        </div>
        <div className='grid grid-cols-3 grid-flow-row gap-3'>
          <CountryCodeInput label="Phone" name="country_code" placeholder={`${flagPlaceHolder} +1`} options={countryCodes}/>
          <LongInput type="tel" className='col-span-2'/>
        </div>
        <div className='grid grid-cols-2 grid-flow-row gap-3'>
          <MenuInput label="Nationality" name="nationality" placeholder="Placeholder" options={nationalities}/>
          <MenuInput label="Gender" name="gender" placeholder="Select your gender" options={genders}/>
        </div>
        <div>
          <LongInput label="Password" placeholder="Enter password" type="password"/>
        </div>
        <div>
          <LongInput label="Password" placeholder="Confirm password" type="password"/>
        </div>
        <div>
          <AgreeTC/>
        </div>
        <div>
          <button>Continue</button>
        </div>
    </form>
    <div>
        <span>Already have an account?</span>
        <span><Link href="/login">Sign In</Link></span>
    </div>
    </>
  )
}

export default SignUpForm