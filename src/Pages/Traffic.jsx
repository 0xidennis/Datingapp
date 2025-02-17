import React from 'react'

const Traffic = () => {
  return (
    <div div className="min-h-screen  bg-white">
       
    {/* Main Content */}
 <main className="max-w-6xl container mx-auto px-4 py-6 md:py-8 mt-[-30px]">
 <h1 className="text-[1.3rem] text-extrabold text-[#db7093]">Report Trafficking</h1>
     {/* Procedure Section */}
     <section className="mb-8">
       <h2 className="mb-4 rounded-md  p-0.5 text-[1rem] font-semibold  pl-3">
       ANTI-TRAFFICKING ADVOCACY:
       </h2>
       <p className="leading-relaxed">
       EscortsAffair is wholly committed to raising awareness on the issue of human 
       trafficking and engages in best practices and advocacy. In the event we become aware 
       of any incident of trafficking, we cooperate enthusiastically with law enforcement and 
       agencies involved in combating the abuse of human rights.

              </p>
       <div className="space-y-4 px-4">
         <h3 className="font-semibold">Please report any suspected sexual exploitation 
            of minors and/or human trafficking to the appropriate authorities.

         </h3>
         <p className="leading-relaxed">
         United States:
              </p>
         <ul className="list-inside list-disc space-y-2 text-gray-700 text-justify font-[10px]">
           <li >National Center for Missing & Exploited Children (NCMEC)</li>
           <li>CyberTipline - report child exploitation</li>
           <li>24-Hour Hotline: 1-800-843-5678</li> <br />
           <li>
           Polaris Project - Report Human Trafficking: 888-373-7888</li>
           <li>
           Dept. of Health & Human Services: 888-373-7888</li>
           <li>
           Children of the Night: 800-551-1300</li>
           <li>
           ACE National: 202-220-3019
            </li>
           <li>
           Homeland Security Investigations Tip Line: 866-DHS-2-ICE</li>
           <li>Dept. of Justice: 888-428-7581</li>
           <li>FBI Office: http://www.fbi.gov/contact-us/field</li>
         </ul>
       </div>
     </section>

     {/* Note Section */}
     <section className="mb-8">
       <h2 className="mb-4 rounded-md  p-0.5 text-[1rem] font-semibold  pl-3">WARNING SIGNS OF POSSIBLE HUMAN TRAFFICKING:</h2>
       <div className="space-y-2 px-4 text-gray-700">
         <ul className="list-inside list-disc space-y-2 text-justify">
           <li>Does an entertainer arrive accompanied by another individual?</li>
           <li>Does that individual speak for or appear to maintain control over the entertainer?</li>
           <li>Does the entertainer seem fearful of that individual?</li>
           <li>Does the entertainer have difficulty communicating, whether resulting from a language barrier or fear of interaction?</li>
           <li>Does the entertainer appear to be underage or close to underage?
           </li>
         </ul>
         <p className="leading-relaxed">
         Use common sense, and contact the appropriate authorities if you suspect that someone is being trafficked.
              </p>
       </div>
     </section>
     </main>
     </div>
  )
}

export default Traffic