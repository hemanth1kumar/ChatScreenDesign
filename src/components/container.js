import { useState } from "react";
import Content from "./content";
import Leftmenu from "./Leftmenu";
import RightMenu from "./rightmenu";

const SampleData = [
    {
        name: "Henry Boyd",
        id: 1,
        email: "henry@gmail.com"
    },
    {
        name: "Marata Curtis",
        id: 1,
        email: "marata@gmail.com"
    },
    {
        name: "Philip Tucker",
        id: 1,
        email: "philip@gmail.com"
    },
    {
        name: "Christine Reid",
        id: 1,
        email: "christine@gmail.com"
    },
    {
        name: "Jerry Guzman",
        id: 1,
        email: "jerry@gmail.com"
    },
    {
        name: "Russel Williams",
        id: 1,
        email: "russel@gmail.com"
    },
]

const Container = () => {
    const [selected, setSelected] = useState(0);

    const handleSelectedChange = (ind) => {
        if (ind !== selected)
            setSelected(ind);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Leftmenu
                        data={SampleData}
                        selected={selected}
                        handleSelectedChange={handleSelectedChange}
                    />
                </div>
                <div className="col-md-6">
                    <Content />
                </div>
                <div className="col-md-3">
                    <RightMenu />
                </div>
            </div>
        </div>
    )
}
export default Container;