import React from 'react'
import style from '../style/welcome.module.css'
import { Link } from "react-router-dom";


export default function Welcome(){
	return(
		<div className={style.WelcomeContainer} >
			<h1 > Welcome! </h1>
			<div className={style.WelcomeInfo} >
				<p>
					we're working hard to get clubhouse ready for everyone while we wrap up finishing touches we're adding people graually to make sure nothing breaks.
				</p>
				<p>
					Hi there! 👋🏽 Our Community Guidelines are meant to explain what is and isn’t allowed on Clubhouse. The overwhelming majority of rooms on Clubhouse happen without incident, but we want to set clear expectations of what we do not allow on the app. If you see or hear something that breaks these rules please report it to us. We may take a number of steps, including issuing a warning, removing the content, or removing someone’s account.
				</p>
				<p>
					Ram,Shyam and clubhouse team
				</p>
			</div>
			<div className={style.actionBtn} >
				<Link exact to='/invite' className='primaryBtn d-flex align-items-center mb-3'>
					get your username{" "}
				</Link>
				<Link exact to="/get">
					Have an invite text? sign in
				</Link>
			</div>
		</div>

		)
}