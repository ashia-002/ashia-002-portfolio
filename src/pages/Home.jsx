import { About } from "../Section/About";
import Hero from "../Section/Hero";
import WorkExperience from "../Section/Work";

export function Home(params) {
    return (
        <div className="bg-black">
            <Hero />
            <About />
            <WorkExperience
                totalExperience="2 years 9 months"
                experiences={[
                    {
                        startDate: "2025",
                        endDate: "Present",
                        duration: "6 months",
                        company: "E-learning Platform 360 Pathshala",
                        position: "Part-time UI/UX Designer | Web Design | Visual Designer",
                        technologies: "Figma"
                    },
                    {
                        startDate: "2024",
                        endDate: "2025",
                        duration: "8 months",
                        company: "Client/Contract Work",
                        position: "Backend developer | Node Js",
                        technologies: ""
                    },
                    {
                        startDate: "2024",
                        endDate: "2024",
                        duration: "3 months",
                        company: "Client Salon Project",
                        position: "UI Designer | Web Design",
                        technologies: "Figma"
                    }
                ]}
            />
        </div>
    )
}