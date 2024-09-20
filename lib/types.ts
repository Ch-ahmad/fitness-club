export interface IUser {
	createdAt: string;
	email: string;
	first_name: string;
	last_name: string;
	role: "trainer" | "trainee" | "admin";
	status: "pending" | "rejected" | "active";
	_id: string;
	profile_image?: string;
}
export interface IExercise {
	_id: string;
	name: string;
	description: string;
}
export interface IDay {
	name: string;
	exercises: IExercise[];
	_id: string;
}
export interface IProgram {
	_id: string;
	name: string;
	trainerId: string;
	price: string;
	image: string;
	description: string;
	createdAt: string;
	days: IDay[];
}
export interface ITraineeExercise {
	name: string;
	description: string;
	_id: string;
	status: "pending" | "skipped" | "missed" | "completed";
	skipReason?: string;
}
export interface ITraineeDay {
	name: string;
	exercises: ITraineeExercise[];
	_id: string;
}
export interface ITraineeProgram {
	_id: string;
	name: string;
	trainerId: string;
	price: string;
	image: string;
	description: string;
	days: ITraineeDay[];
}
