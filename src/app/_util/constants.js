
//const BASE_URL = "https://anokha.abhinavramakrishnan.tech/api";
const BASE_URL = "http://localhost:5000/api";
const HACKATHON_URL = "https://anokha.amrita.edu/api/intel";

export const payU_Key = process.env.NEXT_PUBLIC_IS_PRODUCTION === '1' ? process.env.NEXT_PUBLIC_PAY_U_KEY_PROD : process.env.NEXT_PUBLIC_PAY_U_KEY_TEST ;
export const payU_Action = process.env.NEXT_PUBLIC_IS_PRODUCTION === '1' ? 'https://secure.payu.in/_payment' : 'https://test.payu.in/_payment'

export const EDIT_PROFILE_URL = BASE_URL+"/user/editStudentProfile";
export const STUDENT_PROFILE_URL = BASE_URL+"/user/getStudentProfile";
export const LOGIN_URL = BASE_URL + "/auth/loginStudent";
export const REGISTER_URL = BASE_URL + "/auth/registerStudent";
export const STUDENT_REGISTER_VERIFY_URL = BASE_URL + "/auth/verifyStudent";
export const STUDENT_FORGOT_PASSWORD_URL = BASE_URL + "/auth/forgotPasswordStudent";
export const STUDENT_RESET_PASSWORD_URL = BASE_URL + "/auth/resetPasswordStudent";

export const HACKATHON_TEAM_REGISTER_URL =  HACKATHON_URL + "/registerTeam"; 
export const HACKATHON_DASHBOARD_URL =  HACKATHON_URL + "/getDashBoard"; 
export const HACKATHON_FIRST_ROUND_SUBMISSION_URL = HACKATHON_URL + "/submitFirstRound";
export const HACKATHON_EDIT_FIRST_ROUND_SUBMISSION_URL = HACKATHON_URL + "/editFirstRoundSubmission";

// These urls might be  wrong .. /auth/user (needs fix later)
export const ALL_EVENTS_URL = BASE_URL + "/user/getAllEvents";
export const EVENT_DATA_URL = BASE_URL + "/user/getEventData";
export const STAR_UNSTAR_EVENT_URL = BASE_URL + "/user/toggleStarredEvent";

export const BUY_PASSPORT_DUMMY_PAGE_URL = BASE_URL + "/user/buyPassport";
export const VERIFY_TRANSACTIONS_URL = BASE_URL + "/user/verifyTransaction";

