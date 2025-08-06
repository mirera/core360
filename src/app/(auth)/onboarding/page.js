"use client";
import { useState } from "react";

function Onboarding() {
    const [showAdminDetails, setAdminDetails] = useState(true);
    const [showOrgDetails, setOrgDetails] = useState(false);
    const [showConfirmation, setConfirmation] = useState(false);
    const [step, setStep] = useState(1);
    const [adminInfo, setAdminInfo] = useState({
        firstName: "",
        lastName: "",
        persinalEmail: "",
        phoneNumber: "",
    });
    const [orgInfo, setOrgInfo] = useState({
        orgName: "",
        orgEmail: "",
        orgTelephone: "",
        orgRegion: "",
    });


    function handleNext() {
        if (step === 1) {
            setAdminDetails(false);
            setOrgDetails(true);
            setStep(2);
        } else if (step === 2) {
            setOrgDetails(false);
            setConfirmation(true);
            setStep(3);
        }
    }

    function handleBack() {
        if (step === 2) {
            setAdminDetails(true);
            setOrgDetails(false);
            setStep(1);
        } else if (step === 3) {
            setOrgDetails(true);
            setConfirmation(false);
            setStep(2);
        }
    }

    // Admin Details Step
    function AdminDetails() {
        return (
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold text-blue-700">Admin Details</h1>
                {/* Add input fields here as needed */}

                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="First Name"
                    type="text" />
                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="Last Name"
                    type="text" />
                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="Personal email"
                    type="email" />
                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="Phone Number "
                    type="text" />

                <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Next
                </button>
            </div>
        );
    }

    // Org Details Step
    function OrgDetails() {
        return (
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold text-blue-700">Organization Details</h1>
                {/* Add input fields here as needed */}


                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="Organization Name"
                    type="text" />
                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="Organization Email"
                    type="email" />
                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="Organization telephone"
                    type="text" />
                <input className="px-4 py-2 border rounded focus:ring-blue-500"
                    placeholder="Organization Region (country) "
                    type="text" />

                <div className="flex gap-4">
                    <button
                        onClick={handleBack}
                        className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }

    // Confirmation Step
    function Confirmation() {
        return (
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold text-blue-700">Confirm Details</h1>
                {/* Show summary or confirmation message */}

                <div>
                    <h1 className="text-1xl font-semibold text-gray-400 mb-6 ">Admin Details</h1>
                    <div className="flex flex-col gap-4">
                        {/* Name Row */}
                        <div className="flex gap-4">
                            <div className="font-bold">Name:</div>
                            <div>Brooklyn Angima</div>
                        </div>

                        {/* Tel Row */}
                        <div className="flex gap-4">
                            <div className="font-bold">TEL:</div>
                            <div>012345678</div>
                        </div>

                        {/* Email Row */}
                        <div className="flex gap-4">
                            <div className="font-bold">Email:</div>
                            <div>brooklynangima@gmail.com</div>
                        </div>
                    </div>

                </div>
                <div>
                    <h1 className="text-1xl font-semibold text-gray-400 mb-6 ">Organization Details</h1>

                    <div className="flex flex-col gap-4">
                        {/* Name Row */}
                        <div className="flex gap-4">
                            <div className="font-bold">Org Name:</div>
                            <div>Brook Construction LTD</div>
                        </div>

                        {/* Tel Row */}
                        <div className="flex gap-4">
                            <div className="font-bold">Org TEL:</div>
                            <div>+25471234567</div>
                        </div>

                        {/* Email Row */}
                        <div className="flex gap-4">
                            <div className="font-bold">Org Email:</div>
                            <div>brooklynangima@gmail.com</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-bold">Org Region:</div>
                            <div>Kenya</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={handleBack}
                        className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
                    >
                        Back
                    </button>
                    <button
                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                    >
                        Complete
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            {/* Step indicator */}
            <div className="mb-6 flex items-center gap-4 text-sm text-gray-600">
                <span className={step === 1 ? "font-semibold text-blue-600" : ""}>Step 1: Admin</span>
                <span>→</span>
                <span className={step === 2 ? "font-semibold text-blue-600" : ""}>Step 2: Org</span>
                <span>→</span>
                <span className={step === 3 ? "font-semibold text-blue-600" : ""}>Step 3: Confirm</span>
            </div>

            {/* Content Card */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {showAdminDetails && <AdminDetails />}
                {showOrgDetails && <OrgDetails />}
                {showConfirmation && <Confirmation />}
            </div>
        </div>
    );
}

export default Onboarding;
