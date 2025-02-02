import { ResumeContext } from "@/context/resume";
import { useContext, useState } from "react";

const Education = () => {
	const ctx = useContext(ResumeContext);
	const {
		handleEducationChange,
		handleEducationSubmit,
		addEducation,
		removeEducation,
		educations,
	} = ctx!;

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Education</h2>
			<form className="w-full" onSubmit={handleEducationSubmit}>
				{educations.map((edu, i) => (
					<div key={i} className="mb-5 space-y-4">
						<input
							type="text"
							name="degree"
							placeholder="Degree"
							value={edu?.degree}
							className="input input-bordered w-full"
							onChange={(e) => handleEducationChange(e, i)}
							required
						/>
						<input
							type="text"
							name="year"
							placeholder="Completed year"
							value={edu?.year}
							className="input input-bordered w-full"
							onChange={(e) => handleEducationChange(e, i)}
							required
						/>
						<input
							type="text"
							name="university"
							placeholder="School/College/University"
							value={edu?.university}
							className="input input-bordered w-full"
							onChange={(e) => handleEducationChange(e, i)}
							required
						/>
					</div>
				))}
				<div className="flex justify-between gap-4">
					<button
						type="button"
						onClick={addEducation}
						className="btn btn-success text-white min-w-20"
					>
						Add
					</button>

					{educations.length > 1 && (
						<button
							type="button"
							onClick={removeEducation}
							className="btn btn-error text-white min-w-20"
						>
							Remove
						</button>
					)}

					<button type="submit" className="btn btn-success text-white min-w-20">
						Next
					</button>
				</div>
			</form>
		</div>
	);
};

export default Education;
