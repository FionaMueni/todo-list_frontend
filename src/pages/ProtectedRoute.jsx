import {Navigate} from 'react-router-dom'


const ProtectedRoute = (props) => {
  const sessionToken = localStorage.getItem('token')
  if(sessionToken) {
    return props.outlet
}
return <Navigate to ="/"/>
}
export default ProtectedRoute;
