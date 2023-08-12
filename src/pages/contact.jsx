import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Connect With Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in reaching out. Whether you have feedback, questions, or ideas, I'm here to listen. To get in touch directly, drop me an email at{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							, and I'll respond within 24 hours. If you prefer, you can use the contact form on my website. Fill in the required fields, and I'll get back to you promptly. You can also connect with me on{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>{" "}
							for updates and discussions. Also, feel free to explore my GitHub repository at{" "}
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>{" "}
							to see my projects and contributions. I'm excited to hear from you and collaborate on meaningful endeavors!

							Looking forward to connecting!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
