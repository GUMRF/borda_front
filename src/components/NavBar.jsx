import StyledButton from '../components'

export default function NavBar() {
  return (
    <div class="header-2">

      <nav class="bg-zinc-800 py-2 md:py-2">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div class="flex justify-between items-center">
            <a href="#" class="font-bold text-xl text-slate-200">Makara_CTF</a>
            <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <div class="hidden md:flex flex-col md:flex-row md:mr-auto mt-3 md:mt-0" id="navbar-collapse">
            <StyledButton>Home</StyledButton>
            <a href="#" class="p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Scoreboard</a>
            <a href="/Challenges" class="p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Challenges</a>
            <a href="#" class="p-2 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">FAQ</a>
          </div>

          <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <a href="#" class="p-2 lg:px-4 md:mx-2 text-slate-200 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
            <a href="#" class="p-2 lg:px-4 md:mx-2 text-slate-200 text-center border border-solid border-slate-300 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
          </div>
        </div>
      </nav>
    </div>
  )
}
