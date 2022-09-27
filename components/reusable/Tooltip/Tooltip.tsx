import React from 'react';
import styles from './style.module.css';

function Tooltip({
	hoverText,
	children,
}: {
	hoverText: string;
	children?: React.ReactNode;
}) {
	return (
		<div className={styles.tooltip}>
			{children}
			<span className={styles.tooltipText}>{hoverText}</span>
		</div>
	);
}

export default Tooltip;
