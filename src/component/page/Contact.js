import React from 'react'
import SectionHeader from '../SectionHeader'
function Contact() {
  return (
<>
    <div>
      <SectionHeader title="GET IN TOUCH WITH US" subtitle="CSIT ASSOCATION OF BMC" />
    </div>
     <div class="py-8 lg:py-16 px-4 mx-auto max-w-[40rem]">
     <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback? Need details about our Events? Let us know.</p>
     <form action="#" class="space-y-8">
         <div>
             <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
             <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required />
         </div>
         <div>
             <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User name</label>
             <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="username" required />
         </div>
         <div>
             <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
             <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Let us know how we can help you" required />
         </div>
         <div class="sm:col-span-2">
             <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
             <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 ]" placeholder="Leave a comment..."></textarea>
         </div>
         <button type="submit" class="py-3 mr-2 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 ">Cancle</button>
         <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 ">Send message</button>
     </form>
 </div>
 </>
  )
}

export default Contact