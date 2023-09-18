import React from 'react'
import Logo from "../../assets/Logo.png"
import Twitter from "../../assets/Twitter.svg"
import Facebook from "../../assets/facebook.svg"
import Linkidein from "../../assets/Linkedin.svg"
import instagram from "../../assets/8.png"

function Footer() {
    return (
        <footer className="">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src={Logo} className="mr-5 h-6 sm:h-9" alt="logo" />
                        <p className="max-w-xs mt-4 text-sm text-gray-600">
                            <div className='flex items-center gap-4 cursor-pointer'>
                                <img src={Twitter} alt="" />
                                <img src={instagram} alt="" />
                                <img src={Facebook} alt="" />
                                <img src={Linkidein} alt="" />
                            </div>
                        </p>
                        <div className="flex mt-8 space-x-6 text-gray-600">
                            <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
                                <span className="sr-only">  </span>
                                ©2021 Eduvi.co
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium">
                                Courses
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-500">
                                <a className="hover:opacity-75" href="/"> Classroom coursess </a>
                                <a className="hover:opacity-75" href="/"> Virtual classroom courses</a>
                                <a className="hover:opacity-75" href="/"> E-learning courses</a>
                                <a className="hover:opacity-75" href="/"> Video Courses </a>
                                <a className="hover:opacity-75" href="/"> Offline Courses</a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Community
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-500">
                                <a className="hover:opacity-75" href="/"> Learners </a>
                                <a className="hover:opacity-75" href="/"> Parteners </a>
                                <a className="hover:opacity-75" href="/"> Developers </a>
                                <a className="hover:opacity-75" href="/"> Transactions </a>
                                <a className="hover:opacity-75" href="/"> Blog </a>
                                <a className="hover:opacity-75" href="/"> Teaching Center </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Quick links
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-500">
                                <a className="hover:opacity-75" href="/"> Home</a>
                                <a className="hover:opacity-75" href="/"> Professional Education </a>
                                <a className="hover:opacity-75" href="/"> Courses </a>
                                <a className="hover:opacity-75" href="/"> Admissions </a>
                                <a className="hover:opacity-75" href="/"> Testimonial </a>
                                <a className="hover:opacity-75" href="/"> Programs </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                More
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-500">
                                <a className="hover:opacity-75" href="/"> Press </a>
                                <a className="hover:opacity-75" href="/"> Investors </a>
                                <a className="hover:opacity-75" href="/"> Terms </a>
                                <a className="hover:opacity-75" href="/"> Privacy </a>
                                <a className="hover:opacity-75" href="/"> Help </a>
                                <a className="hover:opacity-75" href="/"> Contact </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <p className="font-normal leading-7 text-[#5D5A6F] text-base">
                    Eduvi is a registered <br />
                    trademark of Eduvi.co
                </p>
            </div>
        </footer>
    )
}

export default Footer