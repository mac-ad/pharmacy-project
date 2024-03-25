async function insertSpeakers() {
  console.log("inseerring");
  fetch("../data/speakers.json")
    .then((res) => res.json())
    .then((speakers) => {
      const speakerContainer = document.querySelector(
        "#speaker-and-guests .carousel-container"
      );
      speakers.forEach((speaker) => {
        const div = document.createElement("div");
        div.classList.add("item", "speaker-card");
        div.innerHTML = `
            <div class="image">
            <img src="../images/${speaker.image}" alt="" />
            </div>
            <div class="content">
                <span class="location">
                    ${speaker.from}
                </span>
                <span class="name"> ${speaker.name} </span>
                <span class="position">
                    ${speaker.position}
                </span>
            </div>
        `;

        speakerContainer.appendChild(div);
      });
    });
}

// insertSpeakers();
