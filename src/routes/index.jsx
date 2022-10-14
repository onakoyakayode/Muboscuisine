import { Route, Routes } from 'react-router-dom'
import { pageRoutes } from './routePaths'



const Routing = () => {
    return(
        <Routes>
            {pageRoutes.map((route) => {
                if(route.children){
                    const Children = () => {
                        return(
                            <Routes>
                                {route?.children?.map((child, index) => {
                                    return(
                                        <Route path={child.path} key={index} element={child.element} />
                                    )
                                })}
                            </Routes>
                        )
                    };
                    return(
                        <Route key={Math.random()}
                        path={route.path}
                        element={<Children />} />
                    );
                }
                return(
                    <Route key={Math.random()} path={route.path} element={route.element} />
                )
            })} 
        </Routes>
    )
}

export default Routing;