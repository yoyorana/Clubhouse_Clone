import React,{useState} from 'react'
import style from '../../style/bottomSheet.module.css'
import {FcGlobe} from 'react-icons/fc'


export default function StartRoom(props){
	const [room, setRoom] = useState('open');
	return(
		<>
			<div className={style.switch_line}></div>
			<div className="text-right">
				<button className={style.addTopicBtn}>add a topic</button>
			</div>
			<div className={style.SelectRoom}>
				<button className={room == 'open' ? style.active : '' }
						onClick={() => setRoom("open")}>
					<div>
						<FcGlobe />
					</div>
					Open
				</button>
				<button className={room == "social" ? style.active : ""}
						onClick={() =>setRoom("social")}
				>
					<div>
						<FcGlobe />
					</div>
					social
				</button>
				<button className={room == "closed" ? style.active : ""}
						onClick={() =>setRoom("closed")}
				>
					<div>
						<FcGlobe />
					</div>
					closed
				</button>
			</div>
			<p>Start a room {" "} <span>{
				room == "closed" ? "for people i choose" :
				room == "social" ? "for people i follow" :
				"open to everyone"
			}</span> </p>
			<div className="text-center">
				<button className={style.letGoBtn}
				onClick={() =>{
					props.setSheetCreateRoom(true);
					props.setSheetVisible(true);
				}}>
					let's go
				</button>
			</div>
		</>
		)
}