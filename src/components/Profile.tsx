import * as React from 'react';

type Props = {
	username: string;
	name: string;
}

function Profile({ username, name }: Props) {
	return (
		<div>
			<b>{username}</b>
			<span>{name}</span>
		</div>
	);
}

export default Profile;