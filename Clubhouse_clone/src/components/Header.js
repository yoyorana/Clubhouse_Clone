import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/header.module.css'




export default function Header(){
	return(
		<div className={style.Header}>
			<Link exact to="/explore">
				<img src="/images/search.png" />
			</Link>
			<div className={style.nav_items}>
				<Link exact to="/friends_invite">
					<img src="/images/invite.png" />
				</Link>

				<Link exact to="/upcoming">
					<img src="/images/cal.png" />
				</Link>

				<Link exact to="/activity">
					<img src="/images/not.png" />
				</Link>

				<Link exact to="/profile">
					<img src="/images/icon.png" />
				</Link>
			</div>
		</div>
		);
}