import { RegisterForm } from './components/RegisterForm'
import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';

function App() {
  return (
    <div>
      <RegisterForm/>
    </div>
  )
}

export default App
