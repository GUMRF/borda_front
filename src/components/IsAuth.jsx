import { useGetUserProfileQuery } from "../api/users";

export function IsAuth() {
    const { isError } = useGetUserProfileQuery();
    console.log(isError.status)
    // if (isError) {
    //     return true
    // }
    // return false
}