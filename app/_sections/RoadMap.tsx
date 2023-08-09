import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const MapCard = ({number=1, right=false, children}) => {
    return (
        <div className={`mt-16 ${right ? "pe-8" : "ps-8"} relative`} >
            <div className={`absolute ${right ? "start-0" : "end-0"} z-1 -translate-y-1/2 ${right ? "-translate-x-1/2" : "translate-x-1/2"} rounded-full bg-secondary color-quaternary font-bold flex justify-center items-center w-10 h-10`}>
                Q{number}
            </div>
            <div className="h-2 bg-secondary rounded-tl-lg rounded-tr-lg"/>
            <div className={`${right ? "ms-16" : "me-16"}`}>
                <div className="bg-white right:bg-primary rounded-bl-lg rounded-br-lg shadow-md p-8 flex flex-col gap-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

const MapItem = ({description, completed=false, inProgress=false}) => {
    return (
        <div className="flex gap-4">
            <div className={`basis-4 text-xl ${completed ? "text-green-600" : "text-secondary"}`}>
                <i className={`uil ${completed ? "uil-check-circle" : "uil-circle"}`}/>
            </div>
            <div>
                <p>
                    {description}
                    {inProgress && <span className="bg-blue-600 text-white text-sm whitespace-nowrap rounded-full px-3 ms-3">In progress</span>}
                </p>
            </div>
        </div>
    )
}

const MapYear = ({children}) => {
    return (
        <div className="mx-auto w-20 h-20 rounded-full bg-primary color-quaternary flex justify-center items-center text-lg	font-bold">
            {children}
        </div>
    )
}

export default function RoadMap() {
    const roadMapData = [
        {
            year: 2023,
            quarters: [
                {
                    items: [
                        {
                            completed: true,
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        },{
                            completed: true,
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
                        },{
                            inProgress: true,
                            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        },{
                            completed: true,
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            completed: true,
                            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            completed: true,
                            description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        },{
                            inProgress: true,
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        }
                    ]
                },{
                    items: [
                        {
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        },{
                            inProgress: true,
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
                        },{
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                }
            ]
        }, {
            year: 2024,
            quarters: [
                {
                    items: [
                        {
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        },{
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        },{
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                },{
                    items: [
                        {
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        },{
                            description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }
                    ]
                },{
                    right: true,
                    items: [
                        {
                            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        },{
                            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <Fragment>
            <Heading
                title="Road map"
            />
            <div className="container grid grid-cols-2 mt-8">
                {roadMapData.map((section,index) => (
                    <Fragment key={index}>
                        <div className="col-span-2">
                            <MapYear>{section.year}</MapYear>
                        </div>
                        <div className="col-span-1 pb-8 border-e-2 border-dashed">
                            {section.quarters.filter(i => !i.right).map((quarter,qIndex) => (
                                <MapCard number={2*qIndex+1} key={qIndex}>
                                    {quarter.items.map((item,iIndex) => (
                                        <MapItem key={iIndex} {...item}/>
                                    ))}
                                </MapCard>
                            ))}
                        </div>
                        <div className="col-span-1 pb-8">
                            <div className="h-24"/>
                            {section.quarters.filter(i => i.right).map((quarter,qIndex) => (
                                <MapCard right number={2*qIndex+2} key={qIndex}>
                                    {quarter.items.map((item,iIndex) => (
                                        <MapItem key={iIndex} {...item}/>
                                    ))}
                                </MapCard>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    )
}
