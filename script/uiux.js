const timelines = [
    {
        title: "Research & Discovery",
        desc: "Involves an initial consultation to understand the client's needs, goals, and target audience. This is followed by market research, competitor analysis, user behavior study, and the creation of detailed user personas.",
        img: "/assets/UIUX-RD.jpg"
    }, 
    {
        title: "Design & Prototyping",
        desc: "Wireframing to outline the structure and layout of the application or website. High-fidelity designs are then created to align with the client's brand and user personas.",
        img: "/assets/UIUX-DP.jpg"
    },
    {
        title: "Testing & Implementation",
        desc: "Usability testing sessions to gather feedback on the prototypes and identify any usability issues. Based on this feedback, the design is refined to ensure an optimal user experience. The final handover provides all design assets and documentation to the development team for implementation.",
        img: "/assets/UIUX-TI.jpg"
    }
]

const timelinesContainer = document.querySelector(".timelines");

timelines.forEach((timeline, i) => {
    const div = document.createElement("div");
    const line = document.createElement("div");
    line.classList.add("line");
    div.appendChild(line);

    div.classList.add("timeline-item");

    if (i === 0) {
        div.classList.add("timeline-active");
    } else {
        div.classList.add("timeline-inactive");
    }

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const title = document.createElement("h2");
    title.textContent = timeline.title;
    
    const desc = document.createElement("p");
    desc.textContent = timeline.desc;
    contentDiv.appendChild(title);
    contentDiv.appendChild(desc);

    div.appendChild(contentDiv);
    timelinesContainer.appendChild(div);

    div.addEventListener("click", () => {
        timelinesContainer.querySelectorAll(".timeline-item").forEach((item) => {
            item.classList.remove("timeline-active");
            item.classList.add("timeline-inactive");
        })
        div.classList.remove("timeline-inactive");
        div.classList.add("timeline-active");

        const img = document.querySelector(".timeline-image > img");
        img.src = timeline.img;
    })
})