import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";


export default function SortDropDownComponent({ sortingChoiceHandler, sortingChoice,
     searchButtonActivation }) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isInnerDropDownOpen, setIsInnerDropDownOpen] = useState(false);

    /**
     * Handles the drop down component
     * It toggles the dropdown component on/off by inverting and updating the current state boolean value
     * Also toggles the inner drop down component visibility off
     * 
     * @returns {void}
     * @function handleDropDown
     */
    const handleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
        setIsInnerDropDownOpen(false);
    }

    /**
     * Handles the inner drop down component/list
     * Toggles the inner drop down component/list visibility on/off by inverting and updating the current state value
     * 
     * @returns {void}
     * @function handleInnerDropDown
     */
    const handleInnerDropDown = () => {
        setIsInnerDropDownOpen(!isInnerDropDownOpen);
    }

    const sortingOptions = [['Popularity Descending', 'popularity.desc'],
     ['Popularity Ascending', 'popularity.asc'], ['Rating Descending', 'vote_average.desc'],
      ['Rating Ascending', 'vote_average.asc'], ['Release Date Descending',
         'primary_release_date.desc'], ['Release Date Ascending', 'primary_release_date.asc'],
          ['Title (A-Z)', 'title.desc'], ['Title (Z-A)', 'title.asc']];

    return (
        <>
            

            <section className="label-section" onClick={handleDropDown} data-testid="sorting-dropdown-toggle">
                <p className="label">Sort</p>
                <RiArrowDropDownLine 
                className={`drop-down-icon ${isDropDownOpen ? 'rotate' : ''}`}/>
            </section>

            { isDropDownOpen && <section>

            <p className="heading">Sort Results By</p>

            <div className="inner-drop-down">
                <div className="inner-drop-down-list" onClick={handleInnerDropDown}>
                    <p>{sortingChoice[0]}</p>
                    <IoMdArrowDropdown className="inner-drop-down-icon"/>
                </div>
                <div className="drop-down-ul-container">
                    {isInnerDropDownOpen &&
                     <ul className="drop-down-ul">
                        {sortingOptions.map(((sortingOption) => 
                            (<li 
                                className={`drop-down-li 
                                    ${(sortingChoice[0] === sortingOption[0]) ? 
                                        'active-li' : ''
                                    }`}
                                onClick={() => {
                                    sortingChoiceHandler(sortingOption);
                                    handleInnerDropDown();
                                    if (sortingChoice[0] !== sortingOption[0]) {
                                        searchButtonActivation(true);
                                    }
                                }}        
                            >{sortingOption[0]} 
                            </li>)
                        )) }
                    </ul>}
                </div>
                
            </div>

            </section>}
        </>
    )
    
}