import { useEffect, useState, useRef } from "react"


const useIntersectionObserver = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = entries => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)

        if (containerRef.current) observer.observe(containerRef.current)
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default useIntersectionObserver