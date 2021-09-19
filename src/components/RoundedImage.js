import React from "react";

const RoundedImg = ({ imgUrl, sm, text }) => (
    text ? <div className="rounded-img text">{text}</div> :
        <img className="rounded-img" height={sm ? "80px" : "36px"} width={sm ? "80px" : "36px"} src={imgUrl ? imgUrl : "https://st2.depositphotos.com/5934840/12154/v/950/depositphotos_121544384-stock-illustration-anime-style-boy-icon.jpg"} alt="person" />
)

export default RoundedImg;