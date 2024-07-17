import React, { useState } from "react";
import emailjs from "emailjs-com";
import { CircularProgress } from "@mui/material";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [sentMessage, setSentMessage] = useState("");

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        from_email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            if (
                !formData.last_name.trim() ||
                !formData.first_name.trim() ||
                !formData.from_email.trim() ||
                !formData.message.trim()
            ) {
                alert("Please fill in all fields.");
                return;
            }
            // await new Promise((resolve) => setTimeout(resolve, 3000));
            // return;
            emailjs
                .send(
                    "service_tjkgss7",
                    "template_rvt10ll",
                    formData,
                    "w2RUUnhpHt4Fut_Mc",
                )
                .then((response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSentMessage("Message sent successfully!");
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                    setSentMessage("Failed to send message.");
                });
        } catch (err) {
            console.log("Error sending email: ", err);
        } finally {
            setIsLoading(false);
        }
    };

    const divClass = "flex flex-col";
    const inputClass = `border px-1.5 py-0.5 focus:outline-none rounded focus:border-blue-400 ${isLoading && "bg-gray-200"}`;
    const labelClass = `${isLoading && "text-gray-400"}`;

    return (
        <>
            <div className="flex flex-grow flex-col items-center justify-center bg-gray-100">
                <section className="pb-5 text-center">
                    <h3 className="col-span-3 text-2xl">Contact Me</h3>
                    <p>I'd love to hear from you!</p>
                    <p>
                        You can email me directly at{" "}
                        <a
                            className="text-blue-600 hover:underline"
                            href="mailto:ariel.m.cohen@proton.me"
                        >
                            ariel.m.cohen@proton.me
                        </a>{" "}
                        or fill out the form which does the same
                    </p>
                </section>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 rounded-lg border bg-white p-4"
                >
                    <div className={`gap-2 lg:flex`}>
                        <div className="flex flex-col">
                            <label className={labelClass} htmlFor="first_name">
                                First Name:
                            </label>
                            <input
                                disabled={isLoading}
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                                className={inputClass}
                            />
                        </div>{" "}
                        <div className="flex flex-col">
                            <label className={labelClass} htmlFor="last_name">
                                Last Name:
                            </label>
                            <input
                                disabled={isLoading}
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                                className={inputClass}
                            />
                        </div>
                    </div>
                    <div className={divClass}>
                        <label className={labelClass} htmlFor="from_email">
                            Email:
                        </label>
                        <input
                            disabled={isLoading}
                            type="email"
                            id="from_email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            required
                            className={inputClass}
                        />
                    </div>
                    <div className={divClass}>
                        <label className={labelClass} htmlFor="message">
                            Message:
                        </label>
                        <textarea
                            disabled={isLoading}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            rows={6}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`flex w-full items-center justify-center rounded bg-blue-500 py-2 text-white`}
                    >
                        {isLoading ? (
                            <CircularProgress color="inherit" size={24} />
                        ) : (
                            "Send"
                        )}
                    </button>
                    {sentMessage !== "" && <p className="mt1">{sentMessage}</p>}
                </form>
            </div>
        </>
    );
};

export default Contact;
