import React, { useState, useEffect } from "react"
import "./OrderBtn.css"

const OrderBtn = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleWindowSizeChange() {
            const isMobile = window.innerWidth <= 767
            setIsMobile(isMobile)
        }

        window.addEventListener("resize", handleWindowSizeChange)

        handleWindowSizeChange()

        return () =>
            window.removeEventListener("resize", handleWindowSizeChange)
    }, [])

    return <div> {!isMobile && <div>OrderBtn</div>}</div>
}

export default OrderBtn
