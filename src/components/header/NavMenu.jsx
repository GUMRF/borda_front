import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavMenu() {
  return (
    <Menu as="div" className="relative">
        <Menu.Button className="flex items-center justify-center bg-zinc-800 text-gray-300 hover:bg-zinc-900 h-16 w-60 text-xl border-r-2 border-zinc-900">
          Navigation
          <ChevronDownIcon className="-mr-0 ml-0 mt-1 w-5" aria-hidden="true" />
        </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-70 shadow-lg bg-zinc-800">
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/scoreboard"
                  className={classNames(
                    active ? 'bg-zinc-900 text-blue-600 border border-gray-50 flex items-center' : 'text-gray-200 border border-gray-50',
                    'px-4 py-2 text-sm','h-16 w-60 flex items-center'
                  )}
                >
                  Scoreboard
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="challanges"
                  className={classNames(
                    active ? 'bg-zinc-900 text-blue-600 border border-gray-50 flex items-center' : 'text-gray-200 border border-gray-50',
                    'px-4 py-2 text-sm h-16 w-60 flex items-center'
                  )}
                >
                  Challanges
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="faq"
                  className={classNames(
                    active ? 'bg-zinc-900 text-blue-600 border border-gray-50' : 'text-gray-200 border border-gray-50 flex items-center',
                    'px-4 py-2 text-sm h-16 w-60 flex items-center'
                  )}
                >
                  FAQ
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
