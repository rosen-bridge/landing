import React, {Fragment} from "react";
import Heading from "../../components/typography/Heading";

const DescriptionBox = ({title, src, right=false, children}) => (
    <div className="block mb-8">
        <div className={`w-full md:w-1/2 lg:w-1/3 ${right ? 'float-left me-8' : 'float-right ms-8'} mb-4   h-80 bg-secondary p-4`}>img</div>
        <h3 className="relative mb-4">
            <span className="heading-2">{title}</span>
        </h3>
        {children}
    </div>
)

const StickyBackground = () => (
    <div className="sticky top-0 -z-10 w-full h-0">
        <svg viewBox="0 0 160 90" className="blur-2xl opacity-10">
            <circle cx={120} cy={30} r={40} className="cold"/>
            <circle cx={40} cy={60} r={30} className="hot"/>
        </svg>
    </div>
)

export default function Architecture() {
    return (
        <Fragment>
            <Heading
                title="Architecture"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc."
            />
            <StickyBackground/>
            <div className="block lg:w-3/4">
                <img alt="Rosen architecture" src="./assets/architecture/rosen-architecture.svg"/>
            </div>

            <DescriptionBox title="Guard set">
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc.</p>
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc.</p>
            </DescriptionBox>
            <DescriptionBox title="Watchers" right>
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </DescriptionBox>
            <DescriptionBox title="Rewards">
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dui at efficitur accumsan. Donec laoreet iaculis metus. Duis pulvinar nisi ipsum, quis tristique lorem commodo non. Praesent hendrerit at metus eleifend commodo. Ut iaculis lobortis augue. Nunc tortor mi, volutpat vitae velit sed, fringilla condimentum nunc.</p>
            </DescriptionBox>
            <DescriptionBox title="RSN" right>
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </DescriptionBox>
            <div className="clear-both"/>
        </Fragment>
    )
}
