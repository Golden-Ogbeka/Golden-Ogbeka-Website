import React from 'react';

function LabelInput({
	value = '',
	name = '',
	type = 'text',
	label = '',
	containerClass = '',
	onChange,
	error,
	...rest
}: {
	value: string | number;
	name: string;
	type?: string;
	label: string;
	containerClass?: string;
	error?: string;
	onChange?: (e: React.ChangeEvent) => void;
	// All other props
	[x: string]: any;
}) {
	const inputId = React.useId();
	return (
		<div className={'relative w-full' + ' ' + containerClass}>
			<input
				type={type}
				name={name}
				id={inputId}
				className='block pb-2 pt-4 w-full text-lg outline-none border-b-2 border-b-[#52535240] appearance-none bg-transparent  focus:border-b-[#D2494380] peer'
				placeholder=' '
				value={value}
				onChange={onChange}
				{...rest}
			/>
			<label
				htmlFor={inputId}
				className='absolute text-lg transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:text-[#D2494380] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 '
			>
				{label}
			</label>
			<div className='mt-1 text-xs text-primary' role='alert'>{error}</div>
		</div>
	);
}

export default LabelInput;
