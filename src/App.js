import React, { useState, Fragment } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Add from './form/Add';
import Edit from './form/Edit';
import Table from './tables/Table';
import './App.css';
function App() {
	// Data
	const usersData = [
		{ id: 1, name: 'Thao Uyen', username: 'uyen12' },
		{ id: 2, name: 'Huy Vu', username: 'vu23' },
		{ id: 3, name: 'Hai Long', username: 'long34' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div class = "App">
		<div className="container">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<Edit
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<Add addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>List users</h2>
					<Table users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
		</div>
	)
}

export default App