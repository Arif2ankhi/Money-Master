
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
// import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFulForm from './Components/StateFulForm/StateFulForm'
import Grandpa from './Grandpa/Grandpa'

function App ()  {

  // const handlSignuPSubmit = data => {
  //   console.log('sign up data', data);
  //   // e.preventDefault();
  // }
  //   const handleUpdateProfile = data => {
  //     console.log('update profile', data);

  //     // e.preventDefault();
  //   }

 

  return (
    <>
     
      <h1>Form Master</h1>

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableForm formTitle={'Sign Up'} handleSubmit={handlSignuPSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>

      </ReUsableForm>
      <br />
      <ReUsableForm formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile}
       submitBtnText = 'Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>

       </ReUsableForm>
       */}
      
    </>
  )
}

export default App
