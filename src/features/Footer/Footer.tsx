import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = (): JSX.Element => {
	const { t } = useTranslation('footer');

	const copyRightText = (
		<div className="footer__bottom d-flex justify-content-center align-items-center">
			<p className="footer__copyright__content text-ofwhite m-0">
				{t('copyright')}
				<NavLink to="/" className="footer__copyright__content--link" data-testid="link_Allcom_home">
					{t('title')}
				</NavLink>
				{t('reserved')}
			</p>
		</div>
	);
	const privacyPolicy = (
		<li className="footer__widget--menu__list">
			<a
				className="footer__widget--menu__text"
				href="/privacy-policy"
				data-testid="link_privacy-policy"
			>
				{t('privacy_policy')}
			</a>
		</li>
	);
	const portfolio = (
		<li className="footer__widget--menu__list">
			<a className="footer__widget--menu__text" href="/portfolio" data-testid="link_portfolio">
				{t('portfolio')}
			</a>
		</li>
	);
	const contactUs = (
		<li className="footer__widget--menu__list">
			<a className="footer__widget--menu__text" href="/contact" data-testid="link_contact">
				{t('contact_us')}
			</a>
		</li>
	);
	const aboutUs = (
		<li className="footer__widget--menu__list">
			<a className="footer__widget--menu__text" href="/about_us" data-testid="link_about_us">
				{t('about_us')}
			</a>
		</li>
	);
	const categoriesField = (
		<h2 className="footer__widget--title text-ofwhite h3">
			{t('categories')}
			<button
				className="footer__widget--button"
				aria-label="footer widget button"
				data-testid="footer__widget--button"
			>
				<svg
					className="footer__widget--title__arrowdown--icon"
					xmlns="http://www.w3.org/2000/svg"
					width="12.355"
					height="8.394"
					viewBox="0 0 10.355 6.394"
				>
					<path
						d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
						transform="translate(-6 -8.59)"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</h2>
	);
	const wishlist = (
		<li className="footer__widget--menu__list">
			<a
				className="footer__widget--menu__text"
				href="/user/my_account/products"
				data-testid="link_my_account_products"
			>
				{t('wishlist')}
			</a>
		</li>
	);
	const register = (
		<li className="footer__widget--menu__list">
			<a className="footer__widget--menu__text" href="/register" data-testid="link_register">
				{t('register')}
			</a>
		</li>
	);
	const login = (
		<li className="footer__widget--menu__list">
			<a className="footer__widget--menu__text" href="/login" data-testid="link_login">
				{t('login')}
			</a>
		</li>
	);
	const myAuctions = (
		<li className="footer__widget--menu__list">
			<a
				className="footer__widget--menu__text"
				href="/user/my_account/my_auctions"
				data-testid="link_my_auctions"
			>
				{t('my_auctions')}
			</a>
		</li>
	);
	const myAccount = (
		<li className="footer__widget--menu__list">
			<a className="footer__widget--menu__text" href="/login" data-testid="link_my_account">
				{t('my_account')}
			</a>
		</li>
	);
	const maAccountField = (
		<h2 className="footer__widget--title text-ofwhite h3">
			{t('my_account')}
			<button
				className="footer__widget--button"
				aria-label="footer widget button"
				data-testid="link_footer-widget-button"
			>
				<svg
					className="footer__widget--title__arrowdown--icon"
					xmlns="http://www.w3.org/2000/svg"
					width="12.355"
					height="8.394"
					viewBox="0 0 10.355 6.394"
				>
					<path
						d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
						transform="translate(-6 -8.59)"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</h2>
	);
	const linkYoutube = (
		<li className="footer__social__shear--list">
			<a
				className="footer__social__shear--list__icon"
				target="_blank"
				href="https://www.youtube.com"
				data-testid="link_youtube"
				rel="noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16.49"
					height="11.582"
					viewBox="0 0 16.49 11.582"
				>
					<path
						data-name="Path 321"
						d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z"
						transform="translate(-951.269 -1359.8)"
						fill="currentColor"
					/>
				</svg>
				<span className="visually-hidden">Youtube</span>
			</a>
		</li>
	);
	const linkInstagram = (
		<li className="footer__social__shear--list">
			<a
				className="footer__social__shear--list__icon"
				target="_blank"
				href="https://www.instagram.com"
				data-testid="link_instagram"
				rel="noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16.497"
					height="16.492"
					viewBox="0 0 19.497 19.492"
				>
					<path
						data-name="Icon awesome-instagram"
						d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z"
						transform="translate(0.004 -1.492)"
						fill="currentColor"
					/>
				</svg>
				<span className="visually-hidden">Instagram</span>
			</a>
		</li>
	);
	const linkTwitter = (
		<li className="footer__social__shear--list">
			<a
				className="footer__social__shear--list__icon"
				target="_blank"
				href="https://twitter.com"
				data-testid="link_twitter"
				rel="noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16.489"
					height="13.384"
					viewBox="0 0 16.489 13.384"
				>
					<path
						data-name="Path 303"
						d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z"
						transform="translate(-951.23 -1140.849)"
						fill="currentColor"
					/>
				</svg>
				<span className="visually-hidden">Twitter</span>
			</a>
		</li>
	);
	const linkFacebook = (
		<li className="footer__social__shear--list">
			<a
				className="footer__social__shear--list__icon"
				target="_blank"
				href="https://www.facebook.com"
				data-testid="link_facebook"
				rel="noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="7.667"
					height="16.524"
					viewBox="0 0 7.667 16.524"
				>
					<path
						data-name="Path 237"
						d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z"
						transform="translate(-960.13 -345.407)"
						fill="currentColor"
					/>
				</svg>
				<span className="visually-hidden">Facebook</span>
			</a>
		</li>
	);
	const followUsLabel = (
		<h3 className="footer__footer_social__title text-ofwhite h4 mb-15">{t('follow')}</h3>
	);
	const aboutUsField = (
		<h2 className="footer__widget--title text-ofwhite h3">
			{t('about_us')}
			<button
				className="footer__widget--button"
				aria-label="footer widget button"
				data-testid="arrow_top_button"
			>
				<svg
					className="footer__widget--title__arrowdown--icon"
					xmlns="http://www.w3.org/2000/svg"
					width="12.355"
					height="8.394"
					viewBox="0 0 10.355 6.394"
				>
					<path
						d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
						transform="translate(-6 -8.59)"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</h2>
	);
	return (
		<footer className="footer__section bg__black">
			<div className="container-fluid ">
				<div className="footer__main d-flex justify-content-evenly">
					<div className="footer__widget footer__widget--width">
						{aboutUsField}
						<div className="footer__widget--inner">
							<p className="footer__widget--desc text-ofwhite mb-20">{t('about_us_text')}</p>
							<div className="footer__social">
								{followUsLabel}
								<ul className="footer__social__shear d-flex" data-testid="social_links">
									{linkFacebook}
									{linkTwitter}
									{linkInstagram}
									{linkYoutube}
								</ul>
							</div>
						</div>
					</div>
					<div className="footer__widget--menu__wrapper d-flex footer__widget--width">
						<div className="footer__widget">
							{maAccountField}
							<ul className="footer__widget--menu footer__widget--inner" data-testid="My Account">
								{myAccount}
								{myAuctions}
								{login}
								{register}
								{wishlist}
							</ul>
						</div>
						<div className="footer__widget">
							{categoriesField}
							<ul className="footer__widget--menu footer__widget--inner" data-testid="Categories">
								{aboutUs}
								{contactUs}
								{portfolio}
								{privacyPolicy}
							</ul>
						</div>
					</div>
				</div>
				{copyRightText}
			</div>
		</footer>
	);
};

export default Footer;
