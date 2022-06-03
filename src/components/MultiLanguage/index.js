// Import icons
import { MdGTranslate } from "react-icons/md";
// import the translate 
import {i18n} from '../../translate/i18n'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Translate() {

  // Languages availible
  const languages = [
    {name:"English (UK)", tag:"en-GB"},
    {name:"Português (BR)", tag:"pt-BR"}
  ]

  // Event that change the language
  const languageChance = event => {
    // set value when clicked
    localStorage.setItem(
      "i18nextLng",
      event.target.value
    )
    
    // Refresh
    window.location.reload(false)
  }

  return (
    // Buttom to choice the languages
    <Menu as="div" className="relative inline-block md:pt-1">
        <Menu.Button className="inline-flex items-center justify-center">
          
          <MdGTranslate aria-hidden="true" />
          <p className="ml-1.5 md:hidden">{i18n.t("c_Translate.navbuttom")}</p>
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
        <Menu.Items className="origin-top-right absolute md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">

            {/* Loop to display any languages available */}
            {languages.map((language) => {

              const {name,tag} = language

              return (
                <Menu.Item>
                  {({ active }) => (
                        <button
                          value={tag}
                          onClick={languageChance}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                          )}
                        >
                          {name}
                        </button>
                      )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
