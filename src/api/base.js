export const prepareHeaders = () => {
    var headers = new Headers();

    const token = localStorage.getItem('token')
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
};