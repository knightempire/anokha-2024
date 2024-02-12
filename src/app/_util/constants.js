const BASE_URL = "https://anokha.amrita.edu/api";
const HACKATHON_URL = "https://anokha.amrita.edu/api/intel";

export const LOGIN_URL = BASE_URL + "/auth/loginStudent";
export const REGISTER_URL = BASE_URL + "/auth/registerStudent";
export const STUDENT_REGISTER_VERIFY_URL = BASE_URL + "/auth/verifyStudent";
export const STUDENT_FORGOT_PASSWORD_URL =
  BASE_URL + "/auth/forgotPasswordStudent";
export const STUDENT_RESET_PASSWORD_URL =
  BASE_URL + "/auth/resetPasswordStudent";

export const HACKATHON_TEAM_REGISTER_URL = HACKATHON_URL + "/registerTeam";
export const HACKATHON_DASHBOARD_URL = HACKATHON_URL + "/getDashBoard";

export const ALL_EVENTS_URL = BASE_URL + "/user/getAllEvents";
export const EVENT_DATA_URL = BASE_URL + "/user/getEventData";
export const STAR_UNSTAR_EVENT_URL = BASE_URL + "/user/toggleStarredEvent";
