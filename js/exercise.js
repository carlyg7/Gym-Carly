const params =
    new URLSearchParams(
        window.location.search
    );

const exerciseId =
    params.get("id");

let selectedExercise = null;

Object.values(workouts).forEach(workout => {

    workout.groups.forEach(group => {

        group.exercises.forEach(exercise => {

            if (
                exercise.id === exerciseId
            ) {

                selectedExercise =
                    exercise;
            }

        });

    });

});

if (!selectedExercise) {

    history.back();

}

const exerciseTitle =
    document.getElementById(
        "exerciseTitle"
    );

const exerciseInfo =
    document.getElementById(
        "exerciseInfo"
    );

const exerciseVideo =
    document.getElementById(
        "exerciseVideo"
    );

exerciseTitle.textContent =
    selectedExercise.name;

exerciseInfo.textContent =
    `${selectedExercise.sets} series | ${selectedExercise.reps}`;

const youtubeId =
    selectedExercise.video
        .split("v=")[1]
        ?.split("&")[0];

if (youtubeId) {

    exerciseVideo.innerHTML = `
        <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/${youtubeId}"
            allowfullscreen>
        </iframe>
    `;
}

const STORAGE_KEY =
    "gymcarly_exercises";

const exerciseWeight =
    document.getElementById(
        "exerciseWeight"
    );

const exerciseNotes =
    document.getElementById(
        "exerciseNotes"
    );

const savedData =
    JSON.parse(
        localStorage.getItem(
            STORAGE_KEY
        )
    ) || {};

if (savedData[exerciseId]) {

    exerciseWeight.value =
        savedData[exerciseId].weight || "";

    exerciseNotes.value =
        savedData[exerciseId].notes || "";
}

document
    .getElementById(
        "saveExerciseBtn"
    )
    .addEventListener(
        "click",
        () => {

            savedData[exerciseId] = {

                weight:
                    exerciseWeight.value,

                notes:
                    exerciseNotes.value
            };

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(savedData)
            );

            history.back();

        }
    );