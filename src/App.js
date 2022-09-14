import React, { useState } from 'react'
import ReactGA from 'react-ga';
import pfp from './assets/cait.jpg';
import site from './site';

// initalize google analytics
ReactGA.initialize(site.ga);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [selection, setSelection] = useState(0);
  
  return (
    <div className='w-screen h-screen lg:flex lg:flex-row'>
      <header className='w-full lg:w-3/12 h-full flex flex-col items-center justify-center lg:border-r-4 lg:border-purple-400 lg:pr-6'>

        <img src={pfp} className='w-[30vh] rounded-full  border-8 border-purple-600 shadow-purple-500 shadow-lg'/>
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
      <div className='w-9/12 h-screen hidden lg:flex bg-green-500'>
        <p>testing</p>
      </div>
    </div>
  );
}

export default App;
