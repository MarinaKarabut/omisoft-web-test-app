import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/auth/auth-operations'

import { Button} from '@material-ui/core'

const Logout = () => {

    const dispatch = useDispatch()

    const onLogout = () => dispatch(logOut())

    return (
        <header>
            <div>
                <Button variant="contained" color="primary" type="button" onClick={onLogout}>Logout</Button>
            </div>
        </header>)
}

export default Logout
