import { RefObject } from 'react'

interface FormFieldProps {
	label: string
	name: string
	type: 'text' | 'email' | 'password'
	placeholder: string
	inputRef: RefObject<HTMLInputElement>
}

const FormField = (props: FormFieldProps) => {
	const { label, name, type, placeholder, inputRef } = props
	return (
		<div className='my-2'>
			<label htmlFor={name} className='sr-only'>
				{label}
			</label>
			<input
				ref={inputRef}
				type={type}
				name={name}
				placeholder={placeholder}
				className='w-full px-4 py-2 bg-zinc-700 outline-none rounded-md'
			/>
		</div>
	)
}

export default FormField
