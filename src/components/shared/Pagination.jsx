import React from "react";

const Pagination = ({
	totalItems,
	itemsPerPage,
	currentPage,
	onPageChange,
}) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	// Create an array of page numbers
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	return (
		<nav aria-label="Pagination" className="flex justify-center mt-4">
			<ul className="flex space-x-2">
				{/* Previous Button */}
				<li>
					<button
						className={`px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:opacity-90 transform hover:-translate-y-1 transition-all  ${
							currentPage === 1
								? "cursor-not-allowed opacity-50"
								: ""
						}`}
						disabled={currentPage === 1}
						onClick={() =>
							currentPage > 1 && onPageChange(currentPage - 1)
						}
					>
						Previous
					</button>
				</li>

				{/* Page Numbers */}
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							className={`px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:opacity-90 transform hover:-translate-y-1 transition-all  ${
								currentPage === number
									? "bg-blue-700 text-white"
									: "bg-gray-200 hover:bg-gray-300"
							} transition`}
							onClick={() => onPageChange(number)}
						>
							{number}
						</button>
					</li>
				))}

				{/* Next Button */}
				<li>
					<button
						className={`px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:opacity-90 transform hover:-translate-y-1 transition-all  ${
							currentPage === totalPages
								? "cursor-not-allowed opacity-50"
								: ""
						}`}
						disabled={currentPage === totalPages}
						onClick={() =>
							currentPage < totalPages &&
							onPageChange(currentPage + 1)
						}
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
