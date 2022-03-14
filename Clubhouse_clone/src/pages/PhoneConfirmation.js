import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import style from '../style/PhoneConfirm.module.css'
import PhoneInput from 'react-phone-number-input'



export default function PhoneConfirmation(){
	const [value, setValue] = useState();
	return(
		<div className={style.PhoneConfirmContainer}>
			<Link exact to='/' className={style.backBtn}>
				<img src="/images/backArrow.png" />
			</Link>
			<h1>Enter Your Phone</h1>
			<PhoneInput international
			defaultCountry='US' value={value} onChange={setValue} />
			<p>
				by entering your number you're agreeing to our   
				<span>
					 terms of service and privecy policy.
				</span>
				thanks
			</p>
			<Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center ">
				Next
			</Link>
		</div>
		);
}