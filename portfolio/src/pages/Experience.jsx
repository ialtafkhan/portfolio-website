import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
const Experience = () => {
    return (
        <>
            <div className="experiance">
                <VerticalTimeline lineColor='#3e497a' >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2013 - 2017"
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className='vertical-timeline-element-title' >
                            GuruKul Viddiya Niketan,Gangapur,Maharashtra.
                        </h3>
                        <p> High School </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2017 - 2020"
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            ViveKanand Arts, Sardar Dalipsigh Commerce and Science College, Aurangabad.
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Bachelor's Degree
                        </h4>

                        <p> Computer Science</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 - 2022"
                        iconStyle={{ background: "#3e497a", color: "#fff" }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            ViveKanand Arts, Sardar Dalipsigh Commerce and Science College, Aurangabad.
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Master's Degree
                        </h4>
                        <p>  Computer Science</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="12-28-2021 - 6-7-2022"
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Jr. Web Developer - Skillhub It solution
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Aurangabad,Maharashtra
                        </h4>
                        <p>
                            Internship
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </>
    )
}

export default Experience