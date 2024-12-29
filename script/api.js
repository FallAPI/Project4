const timelines = [
    {
        title: "Laying the Foundation",
        desc: "Focuses on understanding your needs and building a solid foundation for the API. The consultant will work with you to gather requirements, define the API's purpose and functionalities, and design the data models that will power it.",
        img: "/assets/APIDEV-PLAN.jpg"
    }, 
    {
        title: "Bringing it to Life",
        desc: "We will translate the design into a working API by building the codebase. This involves integrating the API with your backend systems so it can access and manipulate data effectively. Rigorous testing is crucial at this stage, ensuring the API functions as intended, is secure from vulnerabilities, and delivers optimal performance.",
        img: "/assets/APIDEV-DEV.jpg"
    },
    {
        title: "Launch and Monitor",
        desc: "We will deploy the API to a production environment, making it accessible to authorized users. Comprehensive documentation will be developed, providing clear instructions on how to interact with the API.",
        img: "/assets/APIDEV-DEP.jpg"
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