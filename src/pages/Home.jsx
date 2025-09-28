import { About } from "../Section/About";
import Hero from "../Section/Hero";
import WorkExperience from "../Section/Work";

export function Home(params) {
    return (
        <div>
            <Hero />
            <About />
            <WorkExperience
                totalExperience="2 years 9 months"
                experiences={[
                    {
                        startDate: "2022",
                        endDate: "Present",
                        duration: "1 year 5 months",
                        company: "ITHUB",
                        position: "Frontend developer | React & Vue",
                        technologies: ""
                    },
                    {
                        startDate: "2021",
                        endDate: "2022",
                        duration: "8 months",
                        company: "VK Development Lab",
                        position: "Frontend developer | React",
                        technologies: ""
                    },
                    {
                        startDate: "2020",
                        endDate: "2021",
                        duration: "9 months",
                        company: "SN Inc.",
                        position: "Fullstack developer | JavaScript & Python",
                        technologies: ""
                    },
                    {
                        startDate: "2018",
                        endDate: "2020",
                        duration: "1 year 11 months",
                        company: "Business Up",
                        position: "Fullstack developer | JavaScript & Python",
                        technologies: ""
                    }
                ]}
            />
        </div>
    )
}