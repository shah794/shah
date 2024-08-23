import React from 'react'

const page = () => {
   return (
     <div><figure className="md:flex bg-blue-200 rounded-xl p-8 md:p-0 dark:bg-slate-800">
     <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/raza.jpeg" alt="" width="384" height="512"/>
     <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
       <blockquote>
         <p className="text-lg font-medium">
           “Hello my name is Saqlain Raza, I am student of Sir Asif Sb and learning AI Generative programe.
           I am trying my best to pay full dedication to learn AI and managment course. Insha Allah i will be succeeded.”
         </p>
       </blockquote>
       <figcaption className="font-medium">
         <div className="text-sky-500 dark:text-sky-400">
           Saqlain Raza
         </div>
         <div className="text-slate-700 dark:text-slate-500">
           Programe Learner, AI Tech RYK
         </div>
       </figcaption>
     </div>
   </figure>
   </div>
   )
}

export default page