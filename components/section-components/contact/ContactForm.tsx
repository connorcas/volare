"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
    const serviceOptions = [
        "Private Jet Charter",
        "Luxury Travel & Virtuoso Stays",
        "Contract Pilot Services",
        "General Advisory",
    ];

    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "Private Jet Charter",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Jonathan Mercer"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none"
                    />
                </div>

                <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* Phone & Service Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none"
                    />
                </div>

                <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                        Inquiry Type
                    </label>
                    <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-transparent pt-2 text-sm text-[#0A1628] focus:outline-none cursor-pointer"
                    >
                        {serviceOptions.map((opt, idx) => (
                            <option key={idx} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Message */}
            <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    Mission Details / Requirements *
                </label>
                <textarea
                    rows={3}
                    required
                    placeholder="Routing, travel dates, passenger count, or hotel preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none resize-none"
                />
            </div>

            {/* Action Button */}
            <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[11px] text-gray-600">
                    Strictly confidential dispatch.
                </span>

                <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A1628] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#8C6D3F] transition-colors shadow-sm"
                >
                    <span>{submitted ? "Inquiry Dispatched ✓" : "Send Inquiry"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                </button>
            </div>

        </form>
    )
}

export default ContactForm;