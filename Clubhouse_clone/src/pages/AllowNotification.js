import React from 'react'
import style from '../style/PhoneConfirm.module.css'
import { Link } from 'react-router-dom'



export default function AllowNotification(){
	return(
		<div className={style.PhoneConfirmContainer}>
			<div className="text-center">
				<h1 className="mb-4">Last important step</h1>
				<h1 className="mb-3">Enable notifications to know when people are talking</h1>
				<div className={style.NotificationContainer}>
					<div className="p-3">
						<h3>Clubhouse Would Like To Send You Nontifications</h3>
						<p>notifications may include alerts, sounds, and icon badges</p>
					</div>
					<div className={style.action_btn}>
						<Link exact to='/home'>
							Don't Allow
						</Link>
						<Link exact to='/home'>
							Allow
						</Link>
						<img src="/images/handIcon.png" className={style.hand_icon} />
					</div>
				</div>
			</div>
		</div>
		);
}