import { useState } from "react";
import { useGetloginsMutation } from "../redux";



export function Sign() {
	
	const [newLogin , setNewLogin] = useState('');
    const [newPass , setNewPass] = useState('');
	const [inputLogin, { }] = useGetloginsMutation();
	// if(data) {
	// console.log(JSON.stringify(data.tasks))
	// }
	const handleLogin = async () => {
		if (newLogin) {
			await inputLogin({
				"password": newPass,
				"username": newLogin
			}).unwrap();
			// setNewLogin('');
			
		}
	}
    console.log(newLogin.password)


	return (
		<>
			<div>
				<input
					type="text"
					value={newLogin}
					onChange={(e) => setNewLogin(e.target.value)} />
			</div>
            <div>
				<input
					type="text"
					value={newPass}
					onChange={(e) => setNewPass(e.target.value)} />
			</div>
			<button type="button" class="px-5 py-2.5 text-black bg-white focus:ring-4 focus:outline-none focus:ring-grey font-medium rounded-lg text-sm text-center"
				onClick={handleLogin}>
			</button>
		</>

	);
}

