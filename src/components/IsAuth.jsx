import { useGetUserProfileQuery } from "../api/users";

export const IsAuth = (flag) => {
    const { error, isError, isLoading,refetch } = useGetUserProfileQuery();
    if (isLoading) {return null}
    if (flag===true){refetch();}
    return (!isError)
}
