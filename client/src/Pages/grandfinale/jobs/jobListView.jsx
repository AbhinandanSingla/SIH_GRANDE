import React from "react";
import companyModule from "../../../Assets/styles/company.module.css";

export const JobListView = () => {
    return (
        <div className={companyModule.jobListMain}>
            <div>
                <h1>My Job List</h1>
            </div>
            <div className={companyModule.jobListDiv}>
                <div className={companyModule.jobListHead}>
                    <span id={companyModule.spanJobTitle}>Job Title</span>
                    <span id={companyModule.spanCategory}>Jobs Vacancy</span>
                    <span id={companyModule.spanOpenings}>Posted date</span>
                    <span id={companyModule.spanApplications}>Application deadline</span>
                    <span id={companyModule.spanStatus}>Action</span>
                </div>
                <div className={companyModule.jobList}>
                    <div className={companyModule.jobListSub}>
                        <span>UI/UX Designer</span>
                        <span>4 </span>
                        <span>26/8/2022</span>
                        <span>26/9/2022</span>
                        <span id={companyModule.spanActive}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>

              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                    stroke="#04BCF7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3 6H5H21"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </span>
                    </div>
                    <div className={companyModule.line}></div>
                    <div className={companyModule.jobListSub}>
                        <span>UI/UX Designer</span>
                        <span>4 </span>
                        <span>26/8/2022</span>
                        <span>26/9/2022</span>
                        <span id={companyModule.spanInactive}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>

              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                    stroke="#04BCF7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3 6H5H21"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </span>
                    </div>
                    <div className={companyModule.line}></div>
                    <div className={companyModule.jobListSub}>
                        <span>UI/UX Designer</span>
                        <span>4 </span>
                        <span>26/8/2022</span>
                        <span>26/9/2022</span>
                        <span id={companyModule.spanActive}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>

              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                    stroke="#04BCF7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3 6H5H21"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </span>
                    </div>
                    <div className={companyModule.line}></div>
                    <div className={companyModule.jobListSub}>
                        <span>UI/UX Designer</span>
                        <span>4 </span>
                        <span>26/8/2022</span>
                        <span>26/9/2022</span>
                        <span id={companyModule.spanInactive}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>

              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                    stroke="#04BCF7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3 6H5H21"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </span>
                    </div>
                    <div className={companyModule.line}></div>
                    <div className={companyModule.jobListSub}>
                        <span>UI/UX Designer</span>
                        <span>4 </span>
                        <span>26/8/2022</span>
                        <span>26/9/2022</span>
                        <span id={companyModule.spanInactive}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>

              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                    stroke="#04BCF7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3 6H5H21"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </span>
                    </div>
                    <div className={companyModule.line}></div>
                    <div className={companyModule.jobListSub}>
                        <span>UI/UX Designer</span>
                        <span>4 </span>
                        <span>26/8/2022</span>
                        <span>26/9/2022</span>
                        <span id={companyModule.spanInactive}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>

              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                    stroke="#04BCF7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3 6H5H21"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </span>
                    </div>
                    <div className={companyModule.line}></div>
                    <div className={companyModule.jobListSub}>
                        <span>UI/UX Designer</span>
                        <span>4 </span>
                        <span>26/8/2022</span>
                        <span>26/9/2022</span>
                        <span id={companyModule.spanInactive}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#338573"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                    stroke="#04BCF7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M3 6H5H21"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#FA0606"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
                            {" "}
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
