import React from "react";
import ConversationsMenu from "./conversations";
import RoundedImg from "./RoundedImage";

const Leftmenu = ({ data, selected, handleSelectedChange }) => (
    <div className="left-menu">
        <div className="top-section">
            <div className="app-logo mb-4">
                <div className="logo-container">
                    <i
                        className="glyphicon glyphicon-send logo"
                        style={{ fontSize: 16, marginRight: 16, color: "blue" }}
                    />
                </div>
                <h3 className="mb-0" style={{ fontWeight: 700 }}>QuickChat</h3>
            </div>
            <div className="self-details light-card mb-3">
                <RoundedImg sm />
                <h6>Bill Bradford <i className="glyphicon glyphicon-cog" /></h6>
                <span className="role">Lead UI/UX Designer</span>
                <div class="custom-control custom-switch align-items-center" style={{ fontSize: "x-small" }}>
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked={true} />
                    <label className="custom-control-label" htmlFor="customSwitch1">Active</label>
                </div>
            </div>
        </div>
        <ConversationsMenu
            conversations={data}
            selected={selected}
            handleSelectedChange={handleSelectedChange}
        />
    </div>
)

export default Leftmenu;