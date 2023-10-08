import Heading from "@/components/typography/Heading";
import { Fragment } from "react";

export default function Verifications() {
    const layers = [
        {
            title: "Watcher Observation & Report",
            subtitle: "Observe the user’s transfer request and reports the event",
            description: "Each watcher observes the network individually. They CAN’T copy another watcher behaviour to prevent fault cascade",
            icons: [
                <i className="uil uil-eye"/>,
                <i className="uil uil-server-network -rotate-90"/>,
                <i className="uil uil-search rotate-90"/>,
            ]
        },{
            title: "Watchers Report Aggregation",
            subtitle: "Report the event to guards after enough similar watcher reports",
            description: "The final report generates only if enough watchers report the same event. A faulty or malicious watcher can not generate a report by itself to prevent DOS attacks",
            icons: [
                <i className="uil uil-file-search-alt"/>,
                <i className="uil uil-eye -rotate-90"/>,
                <i className="uil uil-message rotate-90"/>,
            ]
        },{
            title: "Guard Verification",
            subtitle: "Verify the reported payment individually",
            description: "Each guard verifies the events before processing. They won’t rely on others verifying the events to prevent fault cascade",
            icons: [
                <i className="uil uil-shield-question"/>,
                <i className="uil uil-file-check-alt -rotate-90"/>,
                <i className="uil uil-user rotate-90"/>,
            ]
        },{
            title: "Guards Consensus",
            subtitle: "Agree on a unique repayment transaction",
            description: "A guard creates a payment transaction, and all guards agree on the same transaction to prevent deadlock",
            icons: [
                <i className="uil uil-invoice"/>,
                <i className="uil uil-shield-check -rotate-90"/>,
                <i className="uil uil-users-alt rotate-90"/>,
            ]
        },{
            title: "Guards Multi-party Signature",
            subtitle: "Guards sign the agreed unique transaction together",
            description: "The payment transaction is valid only if all guards sign it. A malicious guard can not create an arbitrary transaction by itself",
            icons: [
                <i className="uil uil-users-alt"/>,
                <i className="uil uil-file-edit-alt -rotate-90"/>,
                <i className="uil uil-shield rotate-90"/>,
            ]
        },{
            title: "Guards Payment",
            subtitle: "Submit and audit the final signed payment tx and",
            description: "All events and payments are audited by all guards to prevent double-payment",
            icons: [
                <i className="uil uil-transaction"/>,
                <i className="uil uil-shield -rotate-90"/>,
                <i className="uil uil-check-circle rotate-90"/>,
            ]
        }
    ]
    return (
        <Fragment>
            <Heading title="Rosen Verification Layers"/>
            <div className="block mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {layers.map((item, index) => (
                        <div key={index} className="bg-glass rounded-lg shadow-md p-8 pt-0 relative card-pattern ">
                            <div className="absolute z-10" style={{top: '-5.6rem', right: '7rem'}}>
                                <div className='cube'>
                                    <div className='face front text-2xl'>{item.icons[0]}</div>
                                    <div className='face side text-2xl'>{item.icons[1]}</div>
                                    <div className='face top text-2xl'>{item.icons[2]}</div>
                                </div>
                            </div>
                            <img src={`/assets/patterns/pat-${index%4+1}.png`} className="opacity-50"/>    
                            <h5 className="text-primary text-md font-bold mt-4">{item.title}</h5>
                            <p className="text-secondary text-sm  mt-2">{item.subtitle}</p>
                            <div className="absolute z-20 w-full h-full rounded-bl-lg rounded-br-lg description text-white top-0 left-0 p-8">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}