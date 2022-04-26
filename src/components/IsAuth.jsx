import { Navigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../api/users";

export const IsAuth = (flag) => {
    const { error, isError, isLoading,refetch } = useGetUserProfileQuery();
    if (isLoading) {return null}
    
    if (flag===true){
        if (isError&&error.status===403) {console.log(123);return (<Navigate to= "/"/>)}
        refetch();
    }
    return (!isError)
}
