import React from "react";

const MetaData = ({ title, description }) => {
	return (
		<>
			<title>{title}</title>
			<meta name="author" content={title} />
			<meta name="description" content={description} />
		</>
	);
};

export default MetaData;
