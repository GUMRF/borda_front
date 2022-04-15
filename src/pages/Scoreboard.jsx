import { useGetUserProfileQuery } from "../api/users";

export function Scoreboard() {
	const { data, isLoading, error } = useGetUserProfileQuery();
	
	if (isLoading) {
		return <div className="text-2xl">Fetching users...</div>;
	}

	if (error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error}</p>
			</div>
		)
	}
	return (
		<>
			<div>
				<h1>Scoreboard</h1>
				<p>{JSON.stringify(data)}</p>
			</div>
		</>
	);
}
