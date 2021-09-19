import React from "react";
import Person from "./person";

const ConversationsMenu = ({ conversations, selected, handleSelectedChange }) => (
    <div className="conversation-menu">
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Active Conversations
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample"
                >
                    {conversations && conversations.map((c, i) => (
                        <Person
                            key={i}
                            person={c}
                            selected={selected}
                            index={i}
                            handleSelectedChange={handleSelectedChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
)

export default ConversationsMenu;