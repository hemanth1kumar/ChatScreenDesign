import React from "react";
import RoundedImg from "./RoundedImage";

const RightMenu = () => (
    <div className="right-menu">
        <div className="light-card mb-5">
            <RoundedImg text="HB" />
            <div>
                <i className="glyphicon glyphicon-envelope mr-2" />
                <span>hemanth@gmail.com</span>
            </div>
            <div>
                <i className="glyphicon glyphicon-user mr-2" />
                <span>Hemanth Kumar</span>
            </div>
            <button className="btn archive-btn" style={{ borderRadius: 4 }}>
                <span style={{ fontSize: 10, textTransform: "capitalize" }}>Archive</span>
                <i style={{ fontSize: 10 }} className="glyphicon glyphicon-folder-close ml-3" />
            </button>
        </div>
        <div className="light-card body mb-5">
            <div className="row mb-4 align-items-center">
                <div className="col-md-6 mb-3">
                    <div className="time bg-light-blue">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <i className="glyphicon glyphicon-time" />
                            </div>
                            <div className="col-md-8">
                                <div>13h</div>
                                <div style={{ color: "black" }}>Time</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="time bg-light-green">
                        <div className="row align-items-center">
                            <div className="col-md-3 tag">
                                <i className="glyphicon glyphicon-user" />
                            </div>
                            <div className="col-md-8">
                                <div>188</div>
                                <div style={{ color: "black" }}>Attended</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="time bg-light-violet">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <i className="glyphicon glyphicon-calendar" />
                            </div>
                            <div className="col-md-8">
                                <div>119</div>
                                <div style={{ color: "black" }}>Holdings</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="time bg-light-red">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <i className="glyphicon glyphicon-comment" />
                            </div>
                            <div className="col-md-8">
                                <div>41</div>
                                <div style={{ color: "black" }}>Rejected</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h5 className="mb-0">Current Week</h5>
                </div>
                <div className="col-md-4">
                    <span style={{ fontSize: 12 }}> Activity</span>
                </div>
            </div>
        </div>
        <div className="light-card body" style={{ textAlign: "center" }}>
            <h5>Onboard Clients</h5>
            <span className="font12">Share the link with prospects and discuss all the stuff</span>
            <button className="btn btn-primary mt-3" style={{ padding: "8px" }}>
                <span style={{ fontSize: 10 }}>Copy Link</span> <i className="glyphicon glyphicon-link ml-3" />
            </button>
        </div>
    </div>
)
export default RightMenu;