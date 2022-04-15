export const prepareHeaders = () => {
    var headers = new Headers();
    
    const token = localStorage.getItem('token')
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
};

// export function prepareHeaders() {
//     const token = localStorage.getItem('token')

//     var headers = new Headers();
//     headers.set("Authorization", `Bearer ${token}`);

//     return headers
// }