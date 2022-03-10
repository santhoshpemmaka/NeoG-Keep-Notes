import React from "react";
import "./Footer.css";

const Footer = () => {
	const footerItems = [
		{
			link_name: "https://github.com/santhoshpemmaka",
			icon_name: "fab fa-github footer-icon",
		},
		{
			link_name: "https://twitter.com/_SanthoshP",
			icon_name: "fab fa-twitter footer-icon",
		},
		{
			link_name: "https://www.linkedin.com/in/santhoshpemmaka-b6573912a/",
			icon_name: "fab fa-linkedin footer-icon",
		},
	];
	return (
		<div className='footer-container'>
			<footer className='footer footer-align'>
				<div className='footer-name'>
					Made with <span className='footer-symbol'>&lt;/&gt;</span> by Santhosh
					Pemmaka
				</div>
				{footerItems && (
					<ul className='ul-tag-footer ul-footer'>
						{footerItems &&
							footerItems.length > 0 &&
							footerItems.map((footer_item) => (
								<li>
									<a
										className='a-tag-header'
										href={footer_item.link_name}
										target='_blank'>
										<i className={footer_item.icon_name}></i>
									</a>
								</li>
							))}
					</ul>
				)}

				<div className='footer-name'>Namaste &copy; 2022</div>
			</footer>
		</div>
	);
};

export default Footer;
