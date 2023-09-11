import { observer } from 'mobx-react-lite'
import useStore from './hooks/useStore'

function App() {
    const { users } = useStore()
    console.log(users.toJSON())
    return <div>Start</div>
}

export default observer(App)
