import React from "react";

// Dropdown-Checkbox Component 
function dropdownCheckbox({icon, name, options}){
    return(
        <div className="">

        </div>
    );
}

export default function FilterComponent(){

    return(
        <div className="flex">
            {/* All of the following should be Dropdown-Checkbox Components*/}
            {/* Select Day: "01" | "02" | "03"; */}
            <dropdownCheckbox()>

            </dropdownCheckbox>
            {/* Select Department: <Bunch of department options> */}
            <dropdownCheckbox()>

            </dropdownCheckbox>
            {/* Select Participants: "Group" | "Individual" */}
            <dropdownCheckbox()>

            </dropdownCheckbox>
            {/* Select Type: "Tech Workshop"| "Non-Tech Workshop" | "Tech Event" | "Non-Tech Event" | "Tech Contest" | "Non-Tech Contest" */}
            <dropdownCheckbox()>

            </dropdownCheckbox>
            {/* Select Tags: <Bunch of tag options> */}
            <dropdownCheckbox)

            </dropdownCheckbox>
            {/* Select Status: "Registered" | "Not Registered" */}
            <dropdownCheckbox()>

            </dropdownCheckbox>
        </div> 
    );
}

// Functionality is to be added post UI design and responsiveness checks
