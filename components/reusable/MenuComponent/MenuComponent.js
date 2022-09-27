import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React, { forwardRef } from 'react';

const MyLink = forwardRef((props, ref) => {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a ref={ref} {...rest}>
				{children}
			</a>
		</Link>
	);
});

MyLink.displayName = 'MyLink';

function MenuComponent({ button, links }) {
	return (
		<Menu>
			<Menu.Button>{button}</Menu.Button>
			<Menu.Items className='absolute shadow-lg right-0 w-[200px] p-5 z-10 bg-white flex-col flex gap-5'>
				{links?.map((link) => (
					<Menu.Item key={link.href}>
						<MyLink href={link.href}>{link.label}</MyLink>
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	);
}

export default MenuComponent;
