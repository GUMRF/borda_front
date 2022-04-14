import { Link, Navigate } from "react-router-dom";


export const Nick = "Nlxes"; //Потом будет экспортироваться с сервера
export const isCurrentlyInTeam = true;
export const isCapitan = false;
export function UserProfile() {
    return (
        <>
            <div class="bg-gray-200 min-h-screen font-mono">
                <div class="container mx-auto">
                    <div class="inputs w-full max-w-2xl p-6 mx-auto">
                        <h2 class="text-2xl text-gray-900">Account Setting</h2>
                        <form class="mt-6 border-t border-gray-400 pt-4">
                            <div class='flex flex-wrap -mx-3 mb-6'>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pr-2'>Nickname</label>
                                    <div className="flex flex-row">
                                        <input class='w-full appearance-none block bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-2 leading-tight focus:outline-none  focus:border-gray-500' type='Nickname' id="Nickname" placeholder={Nick} required />
                                        <button class="ml-1 appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Change</button>
                                    </div>
                                </div>

                                <div class='w-full md:w-1/2 px-3 mb-6'>

                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                                        Team
                                    </label>
                                    {isCurrentlyInTeam ? (
                                        <>
                                            {isCapitan ? (
                                                <>
                                                <div className="flex flex-row mb-1">
                                                    <input class='w-full appearance-none block bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-2 leading-tight focus:outline-none  focus:border-gray-500' type='text' value="Teamname" required />
                                                    <button class="ml-1 appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Edit</button>
                                                </div>
                                                </>
                                            ) : <input class='w-full appearance-none block bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-2 leading-tight focus:outline-none  focus:border-gray-500' type='text' value="Teamname" required />
                                            }
                                        </>) :
                                        <>
                                            <div className="flex flex-row mb-1">
                                                <input class='w-full appearance-none block bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-2 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                                                <button class="ml-1 appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Join</button>
                                            </div>
                                            <Link to="kekw" className="text-indigo-700">or (Create own)</Link>

                                        </>}
                                </div>


                                <div class='w-full md:w-full px-3 mb-6 '>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>password</label>
                                    <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Change your password</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {localStorage.getItem("token") === null  ? <Navigate to="/sign-up" /> : null}
        </>  
    );
}