import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import bgImg from "@public/assets/img/potato-chips.png"



const Footer = () => {
    return (
        <footer className="customFooter bg-primary pt-10 pb-2 relative overflow-hidden">
            <div className="hidden lg:flex absolute -bottom-10 -right-10">
                <Image className="w-80" src={bgImg} alt="potato-chips"/>
            </div>
            <div className="flex justify-center items-center flex-col top w-[80%] m-auto text-white">
                <h4 className="text-2xl  xl:text-3xl font-bold">Subscribe To Our Newsletter</h4>
                <p className="text-gray-400 py-4">Promotions, new products and sales. Directly to your inbox.</p>
                <div className="w-full md:w-[45%] flex justify-center mt-6">
                    <div className="w-full flex items-center bg-white px-4 py-3 rounded-l-lg">
                        <span className="mr-2 mt-1">
                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_120)">
                                    <path d="M15.5083 9.67462L23 13.76V5.41675L15.5083 9.67462Z" fill="#040E50" />
                                    <path d="M0.777832 5.41675V13.76L8.2695 9.67462L0.777832 5.41675Z" fill="#040E50" />
                                    <path d="M21.6112 2.98706H2.1668C1.47375 2.98706 0.923747 3.43274 0.81958 4.0066L11.889 10.2976L22.9585 4.0066C22.8543 3.43274 22.3043 2.98706 21.6112 2.98706Z" fill="#040E50" />
                                    <path d="M14.2362 10.3982L12.2709 11.5148C12.1542 11.5806 12.0223 11.613 11.8889 11.613C11.7556 11.613 11.6237 11.5806 11.507 11.5148L9.54171 10.397L0.822266 15.1544C0.92921 15.7235 1.47643 16.1656 2.16671 16.1656H21.6112C22.3014 16.1656 22.8487 15.7235 22.9556 15.1544L14.2362 10.3982Z" fill="#040E50" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_120">
                                        <rect width="22.2222" height="19.1688" fill="white" transform="translate(0.777832 -0.00805664)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <input type="email" placeholder="Type your Email" className="placeholder:text-primary border-none outline-none text-primary" />
                    </div>
                    <button className="bg-warning px-4 py-3 text-white rounded-r-lg">Subscribe</button>
                </div>
                <ul className="w-full flex justify-center items-center gap-4 mt-6">
                    <li>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            className="h-10 w-10 rounded-full bg-white hover:bg-warning flex items-center justify-center group transition-all"
                        ><FaFacebookF className="text-primary group-hover:text-white" /></a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/asadulla9"
                            target="_blank"
                            className="h-10 w-10 rounded-full bg-white hover:bg-warning flex items-center justify-center group transition-all"
                        ><FaLinkedinIn className="text-primary group-hover:text-white" /></a>
                    </li>
                    <li>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            className="h-10 w-10 rounded-full bg-white hover:bg-warning flex items-center justify-center group transition-all"
                        ><FaXTwitter className="text-primary group-hover:text-white" /></a>
                    </li>
                </ul>
            </div>
            <div className="bottom mt-10">
                <p className="border-t border-dotted w-[80%] m-auto"></p>
                <p className="flex flex-wrap justify-center text-white mt-4">&copy; {new Date().getFullYear()} All rights reserved to Chips Oman || Developed by <a className="text-gray-400 ml-2 hover:border-b" href="https://rm-asadulla-portfolio.web.app" target="_blank">Asadulla Ahmed</a></p>
            </div>
        </footer>
    )
}

export default Footer