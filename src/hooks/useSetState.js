import { useState } from "react"

const useSetStateValues = () => {
    const [selectedSearch, setSelectedSearch] = useState(null)
    const [selectedSortBy, setSelectedSortBy] = useState(null)
    const [selectedFilterBy, setSelectedFilterBy] = useState(null)

    const clearSelectedValues = () => {
    setSelectedSearch(null)
    setSelectedSortBy(null)
    setSelectedFilterBy(null)
    }
    return {
        selectedSortBy,
        selectedFilterBy,
        selectedSearch,
        setSelectedSortBy,
        setSelectedFilterBy,
        setSelectedSearch,
        clearSelectedValues
    }
}

export default useSetStateValues;