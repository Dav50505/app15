import { createContext, useState, useContext } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(true)

const openSidebar = () =>{
    setIsSidebarOpen(true)
}
const closeSidebar = () =>{
    setIsSidebarOpen(false)
}
const openModal = () =>{
    setIsModalOpen(true)
}
const closeModal = () =>{
    setIsModalOpen(false)
}


    return <AppContext.Provider value={{isSidebarOpen, 
        isModalOpen, 
        openModal,
        openSidebar, 
        closeModal,
        closeSidebar}}>
        {children}
        </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
