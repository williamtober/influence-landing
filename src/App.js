import React, { useState } from 'react'
import ReactGA from 'react-ga';
import site from './site';

// initalize google analytics
ReactGA.initialize(site.ga);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [selection, setSelection] = useState(0);
  
  return (
    <div className='w-screen h-screen lg:flex lg:flex-row lg:justify-center'>
      <header className='w-full lg:w-3/12 h-full flex flex-col items-center justify-center lg:shadow-2xl lg:shadow-purple-400 lg:border-x-4 lg:border-purple-400 lg:pr-6'>

        <img src={site.pfp} className='w-[30vh] rounded-full  border-8 border-purple-600 shadow-purple-500 shadow-lg'/>
        <h1 className='text-4xl font-bold text-purple-700 mt-6 mb-12'>{site.name}</h1>

        <nav className="w-full">
          <ul className="w-full flex flex-col gap-y-8 justify-center ">
            {site.links.map((link, index) => (
              <li className='w-full' onClick={() => setSelection(index)} key={link.name}>
                <a type='button' className={`flex mx-auto items-center justify-center text-white text-xl font-bold transition duration-300 ease-in-out w-10/12 py-4 cursor-pointer ${link.color}`} >{link.name} </a>
              </li> 
            ))}

          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
