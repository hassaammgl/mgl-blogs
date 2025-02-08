// components/Logo.jsx
const Logo = ({ className, fontFamily = "Arial" }) => {
	return (
		<svg className={className} width="120" height="40" viewBox="0 0 120 40">
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				style={{
					fontFamily: fontFamily,
					fontSize: "24px",
					fontWeight: "bold",
				}}
				className="fill-gray-900 dark:fill-gray-100 transition-colors duration-200"
			>
				mgl blogs
			</text>
		</svg>
	);
};

export default Logo;
