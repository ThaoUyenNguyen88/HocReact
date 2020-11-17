import React, { useState } from 'react'


function Add(props) {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<div class="form-group">
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} class="form-control"  />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} class="form-control" />
			<button class="btn btn-primary" style={{marginTop: 10 + 'px'}}>Add new user</button>
			</div>
		</form>
	)
}

export default Add