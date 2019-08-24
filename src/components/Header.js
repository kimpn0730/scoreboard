import React from 'react';

// 펑션 컴포넌트는 반드시 대문자로 시작
// react elementt를 리턴해야 한다.

export const Header = ({title, totalPlayers}) => {
	return (
		<header className="header">
			<h1 className="h1">{title}</h1>
			<span className="stats">Players : {totalPlayers}</span>
		</header>
	)
};