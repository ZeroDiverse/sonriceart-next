import React, { useState } from 'react'

export default function PopupState() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const togglePopup = (): void => {
        setIsPopupOpen(prev => !prev)
    }
}