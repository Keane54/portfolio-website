import { useEffect, useState } from "react"

export const useScrollDirection = () => {
    const [direction, setDirection] = useState(null)

    useEffect(() => {
        let scrollY = window.pageYOffset
        const updateScrollDirection = () => {
            const currentScrollY = window.pageYOffset

            const scrollDirection = currentScrollY > scrollY ? 'down' : 'up'

            if (direction !== scrollY && (currentScrollY - scrollY > 20 || currentScrollY - scrollY < -20)) {
                setDirection(scrollDirection)
                scrollY = window.pageYOffset
            }
        }
        window.addEventListener('scroll', updateScrollDirection)

        return (() => {
            window.removeEventListener('scroll', updateScrollDirection)
        })
    }, [direction])

    return direction
}