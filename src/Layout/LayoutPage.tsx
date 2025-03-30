import {Outlet} from 'react-router-dom'

function RootLayout() {
    return (

        <div className="w-screen">
            <Outlet/>
        </div>

    )
}

export default RootLayout

