
import React from 'react'
import InstaLoginPage from './InstaLoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginWithFb from './LoginWithFb'

function AllInstaComponents() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<InstaLoginPage/>}></Route>  
      <Route path='/LoginWithFb' element={ <LoginWithFb/> }></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default AllInstaComponents




// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import InstaPage from './InstaPage';
// import LoginWithFb from './LoginWithFb';

// function App() {
//   return (
//     <>
//     {/* <h1>
//     main component
//     </h1> */}
//     {/* <InstaPage/> */}
//     {/* <LoginWithFb/> */}

//     <BrowserRouter>
//       {/* <li><Link to='/'>InstaPage</Link></li> */}
      
//     <Routes>
//       <Route path='/' element={ <InstaPage/>}></Route>
//       <Route path='/LoginWithFb' element={ <LoginWithFb/> }></Route>

//     </Routes>

//     </BrowserRouter>
//     </>
//   );
// }

// export default App;