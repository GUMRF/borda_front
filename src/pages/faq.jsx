import { useState } from "react";

import { useGettasksQuery } from "../redux/tasksApi";
import { token, useGetloginsMutation } from "../redux";

export function FAQ() {
	const { data, isLoading } = useGettasksQuery();
	const [newLogin, setNewLogin] = useState('');
	const [inputLogin, { }] = useGetloginsMutation();
	const [tokenCashe, setTokenCache] = useState('');
	// if(data) {
	// console.log(JSON.stringify(data.tasks))
	// }
	const handleLogin = async () => {
		if (newLogin) {
			await inputLogin({
				"password": newLogin,
				"username": "TestUser1"
			}).unwrap();
			setNewLogin('');
			setTokenCache(token)
		}
	}

	// console.log(useGetloginsMutation())
	console.log(tokenCashe)
	return (
		<>
			<div>
				<input
					type="text"
					value={newLogin}
					onChange={(e) => setNewLogin(e.target.value)} />
			</div>
			<button type="button" class="px-5 py-2.5 text-black bg-white focus:ring-4 focus:outline-none focus:ring-grey font-medium rounded-lg text-sm text-center"
				onClick={handleLogin}>
			</button>
		</>

	);
}