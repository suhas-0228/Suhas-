import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "17 Jun 2025 - 17 Jul 2025",
      title: "Full Stack Developer Intern",
      company: "Vet Edu Tantrum Ventures Pvt Ltd",
      type: "Internship",
      description:
        "Completed a one-month full-stack internship program, worked on web development tasks, developed and tested application features, and gained real-world project experience.",
    },
    {
      year: "2025 - Present",
      title: "Tech Squad Member",
      company: "Coimbatore Institute of Engineering and Technology",
      type: "College Technical Team",
      description:
        "Contributed to technical team activities and collaborated on practical project ideas, including a Women Safety Application prototype.",
    },
    {
      year: "2025",
      title: "Technical Events Overall Coordinator",
      company: "College Symposium",
      type: "Leadership",
      description:
        "Coordinated technical events for the symposium and managed event planning, team coordination, and execution responsibilities.",
    },
    {
      year: "2025",
      title: "E-Sports Head",
      company: "College Symposium",
      type: "Event Management",
      description:
        "Led e-sports event coordination during the college symposium, including participant handling and event organization.",
    },
    {
      year: "2025",
      title: "Department Overall Coordinator",
      company: "College Annual Day",
      type: "Leadership",
      description:
        "Served as the overall coordinator for my department during the college Annual Day and handled department-level coordination.",
    },
    {
      year: "2025",
      title: "Industrial Visit Coordinator",
      company: "Class Coordination",
      type: "Coordination",
      description:
        "Coordinated the whole class for an industrial visit, managing communication, planning, and student coordination.",
    },
    {
      year: "2023 - 2027",
      title: "B.Tech Information Technology",
      company: "Coimbatore Institute of Engineering and Technology",
      type: "CGPA: 7.98",
      description:
        "Studying core IT subjects while building projects in full-stack development, REST APIs, databases, and computer vision.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience & Leadership</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className="relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    />
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 0 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 0 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
