import s from './Users.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import defUserPic from '../../img/ava.png';
let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <div className={s.users} >
		<div>
			{pages.map(p => {
				return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.selected}>{p}</span>
			})}
		</div>
		<h3 className={s.users_title}>Find Users</h3>
		<div>
			{props.users.map(u => <div className={s.user}>
				<div className={s.name}>{u.name}</div>
				<NavLink to={'/profile/' + u.id}> <div className={s.userpic}> <img src={u.photos.small !== null ? u.photos.small : defUserPic} alt='userpic' /> </div> </NavLink>
				{u.followed ?
					<button
						disabled={props.followingInProgress.some(id => id === u.id)}
						className={s.button}
						onClick={() => { props.followDelete(u.id, u.followed) }}>Unfollow</button>
					:
					<button
						disabled={props.followingInProgress.some(id => id === u.id)}
						className={s.button}
						onClick={() => { props.followPost(u.id, u.followed) }}>Follow</button>
				}
			</div>
			)}
		</div>
	</div >
}

export default Users;