import { observer } from 'mobx-react-lite'
import useStore from './hooks/useStore'

function App() {
    const { users, boards } = useStore()

    //console.log('actvie board >> ', boards.active?.toJSON())

    console.log('actvie board >> ', boards.active?.sections[0]?.tasks?.toJSON())

    //console.log('testilka >> ', boards.active?.sections[0]?.toJSON())

    return <div>Start</div>
}

export default observer(App)
