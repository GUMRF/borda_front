import { Navigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../api/users";

export const IsAuth = () => {
    const { isError, isLoading, error} = useGetUserProfileQuery();
    if (isLoading) { return null }
    return (!isError)
}
