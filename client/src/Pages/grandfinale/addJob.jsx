import React, {useContext} from "react";
import companyModule from "./company.module.css";
import {useState} from "react";
import {useFormik} from "formik";
import {DataContext} from "../../hooks/ResumeData";
import {useNavigate} from "react-router-dom";
import logo from '../../Assets/Images/common/logo.svg'

export const AddJob = () => {
    const {
        userDataProvider, setUserData
    }
        = useContext(DataContext);
    const [bool, setbool] = useState(false)
    const navigate = useNavigate();
    const uploadImage = (e) => {
        e.preventDefault();
        document.getElementById("profileImg").click();
    };
    const [serviceList, setServiceList] = useState([
        {service: ""},
        {service: ""},
    ]);
    const [file, setFile] = useState({
        preview: "",
        raw: "",
    });
    const [value, setValue] = useState({
        skill1: "",
        skill2: "",
        skill3: "",
    });

    const formik = useFormik({
        initialValues: {
            companyID: "6303d00e01f05df8e6f6b2b6",
            jobTitle: "",
            jobCategory: "",
            jobLocation: "",
            jobType: "",
            jobDescription: "",
            ApplicationDeadline: "",
            experience: "",
            SalaryRange: "",
            numberApplicants: 999,
            postDate: new Date(),
            additionalLinks: "",
            jobProfile:
                "https://firebasestorage.googleapis.com/v0/b/personaltestingbase.appspot.com/o/images%2F152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg?alt=media&token=c74f7add-6c9b-47f6-98ce-db59d4cbf340",
            companyName: userDataProvider.companyName,
        },
        onSubmit: (values) => {
            setbool(true)
            console.log(values);
            console.log(serviceList);
            setUserData((e) => ({
                ...e, jobs: [...e.jobs, values]
            }))
            fetch("http://127.0.0.1:8080/api/addJob", {
                method: "POST",
                credentials: "include",
                headers: {"Content-Type": "application/json", 'Origin': 'http://localhost:3000'},
                body: JSON.stringify({...values, skills: Object.values(value), Qualifications: serviceList}),
            })
                .then(async response => {


                    if (!response.ok) {
                        if (response.status === 400) {
                        } else if (response.status === 401) {
                        } else {
                        }
                    } else {
                        setbool(false)
                        alert("Job is added")
                        formik.values = {}
                        console.log(response)
                        console.log("Job added")
                    }
                })
                .catch(error => {
                })
        },
    });

    const handleAdd = () => {
        setServiceList([...serviceList, {service: ""}]);
    };

    function handleChange(event) {
        setValue((value) => ({
            ...value,
            [event.target.name]: event.target.value,
        }));
    }

    const handleRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleServiceChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };

    return (
        <div className={companyModule.addJobContainer}>
            <form
                className={companyModule.addJobSubContainer}
                onSubmit={formik.handleSubmit}
            >
                <div className={companyModule.profileSection}>
                    <div className={companyModule.photoDiv}>
                        <img src={file.preview} alt=""/>
                    </div>
                    <div className={companyModule.photoRightSide}>
                        <div>
                            <p>select your job JPEG</p>
                        </div>
                        <div className={companyModule.browseBtnDiv}>
                            <button className={companyModule.browseBtn} onClick={uploadImage}>
                                Browse
                            </button>
                            <input
                                onChange={(e) =>
                                    setFile({
                                        preview: URL.createObjectURL(e.target.files[0]),
                                        raw: e.target.files[0],
                                    })
                                }
                                id={"profileImg"}
                                type="file"
                                style={{display: "none"}}
                            />
                        </div>
                    </div>
                </div>
                <div className={companyModule.postJobInputs}>
                    <div className={companyModule.jobInputDiv1}>
                        <div>
                            <p className={companyModule.jobInputHeading}>Job Title</p>
                            <input
                                type="text"
                                placeholder="Title"
                                id={"jobTitle"}
                                value={formik.values.jobTitle}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={companyModule.jobInputSmall}
                            />
                        </div>
                        <div>
                            <p className={companyModule.jobInputHeading}>Job Location</p>
                            <input
                                type="text"
                                placeholder="Hydrabrad"
                                value={formik.values.jobLocation}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={companyModule.jobInputSmall}
                            />
                        </div>
                    </div>

                    <div className={companyModule.jobInputDiv2}>
                        <div>
                            <p className={companyModule.jobInputHeading}>Name of the organization</p>
                            <input
                                type="text"
                                id={"jobCategory"}
                                placeholder="Rail Sector"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.jobCategory}
                                className={companyModule.jobInputSmall}
                            />
                        </div>
                        <div>
                            <p className={companyModule.jobInputHeading}>No of Experience</p>
                            <input
                                type="text"
                                id={"experience"}
                                placeholder="Ex 2"
                                value={formik.values.experience}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={companyModule.jobInputSmall}
                            />
                        </div>
                    </div>

                    <div className={companyModule.jobInputDiv3}>
                        <div>
                            <p className={companyModule.jobInputHeading}>Recruitment Link</p>
                            <input
                                type="text"
                                placeholder="Links"
                                id={"additionalLinks"}
                                value={formik.values.additionalLinks}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={companyModule.jobInputSmall}
                            />
                        </div>

                        <div>
                            <div>
                                <p className={companyModule.jobInputHeading}>
                                    Number of vacancy
                                </p>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    placeholder="200"
                                    id={"numberApplicants"}
                                    value={formik.values.numberApplicants}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={companyModule.jobInputSmall}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={companyModule.jobInputDiv4}>

                        <div>
                            <div>
                                <p className={companyModule.jobInputHeading}>Salary Range</p>
                            </div>
                            <div>
                                <input
                                    value={formik.values.SalaryRange}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id={"SalaryRange"}
                                    type="text"
                                    placeholder="salary"
                                    className={companyModule.jobInputSmall}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className={companyModule.jobInputHeading}>
                                    Application deadline{" "}
                                </p>
                            </div>
                            <div>
                                <input
                                    type="date"
                                    id={"ApplicationDeadline"}
                                    placeholder="Dealine of Job"
                                    className={companyModule.jobInputSmall}
                                    value={formik.values.ApplicationDeadline}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={companyModule.jobInputDiv5}>
                        <div>
                            <div>
                                <p className={companyModule.jobInputHeading}>Add qualification</p>
                                {serviceList.map((singleService, index) => (
                                    <div>
                                        <div key={index} className={companyModule.addField}>
                                            <div className={companyModule.addFieldDiv}>

                                                <input
                                                    name="service"
                                                    type="text"
                                                    placeholder="Add new field"
                                                    className={companyModule.jobInputSmaller}
                                                    value={singleService.service}
                                                    onChange={(e) => {
                                                        handleServiceChange(e, index);
                                                    }}
                                                />
                                            </div>
                                            {serviceList.length > 1 && (
                                                <button
                                                    className={companyModule.removeBtn}
                                                    onClick={() => {
                                                        handleRemove(index);
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                        <div>
                                            {serviceList.length - 1 === index &&
                                            serviceList.length < 3 && (
                                                <button
                                                    className={companyModule.addBtn}
                                                    onClick={handleAdd}
                                                >
                                                    Add qualification
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={companyModule.absoluteDiv}>
                            <div>
                                <p className={companyModule.jobInputHeading}>Minimum Qualifications</p>
                            </div>
                            <div className={companyModule.minQualFields}>
                                <input
                                    type="text"
                                    placeholder="10th percentage"
                                    name={"skill1"}
                                    className={companyModule.jobInputSmall}
                                    value={value.skill1}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="skill2"
                                    placeholder="12th percentage"
                                    value={value.skill2}
                                    onChange={handleChange}
                                    className={companyModule.jobInputSmall}
                                />
                                <input
                                    name={"skill3"}
                                    type="text"
                                    value={value.skill3}
                                    onChange={handleChange}
                                    placeholder="Undergraduate CGPA"
                                    className={companyModule.jobInputSmall}
                                />
                                <input
                                    name={"skill3"}
                                    type="text"
                                    value={value.skill3}
                                    onChange={handleChange}
                                    placeholder="Postgraduate CGPA"
                                    className={companyModule.jobInputSmall}
                                />
                            </div>
                        </div>

                    </div>

                    <div className={companyModule.jobInputDiv6}>
                        <div>
                            <div>
                                <p className={companyModule.jobInputHeading}>Description </p>
                            </div>
                            <div>
                <textarea
                    type={"text"}
                    id={"jobDescription"}
                    value={formik.values.jobDescription}
                    onChange={formik.handleChange}
                    placeholder="Description "
                    className={companyModule.jobInputBigger}
                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={companyModule.postJobBtnDiv}>
                    <button type={"submit"} className={companyModule.postJobBtn}>
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
};
