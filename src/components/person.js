import React from "react";
import RoundedImg from "./RoundedImage";

const Person = ({ person, index, selected, handleSelectedChange }) => (
    <div className={`${selected === index ? "selected" : ""} person`} onClick={() => handleSelectedChange(index)}>
        <RoundedImg />
        <span className="person-name ml-3">
            {person && person.name}
        </span>
    </div>
)

export default Person;