import { useGetUserProfileQuery } from "../api/users";

export const IsAuth = () => {
    const { error,isLoading } = useGetUserProfileQuery();
    if(isLoading) return <div>Loadning...</div>
    if (error) {
        return false
    }
    return true
}