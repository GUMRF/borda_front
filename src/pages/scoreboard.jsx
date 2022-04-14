import { useGetUserQuery } from "../api/user";

export function Scoreboard() {

  const { data, isLoading } = useGetUserQuery();
  if (isLoading) {
    return <div className="text-2xl">Loading...</div>;
  }
  return (
    <>
      <div>{JSON.stringify(data.username)}</div>
    </>
  );
}
