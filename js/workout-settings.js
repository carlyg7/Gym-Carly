const params =
    new URLSearchParams(
        window.location.search
    );

const workoutId =
    params.get("workout");

const backButton =
document.getElementById(
    "backBtn"
);

const exerciseGroupSelect =
document.getElementById(
    "exerciseGroupSelect"
);

backButton.addEventListener(
"click",
() => {

    window.location.href =
        `workout.html?workout=${workoutId}`;

}
);

const workout =
    workouts[workoutId];

document.getElementById(
    "settingsTitle"
).textContent =
    workout.title;

const container =
document.getElementById(
    "settingsContainer"
);

const exerciseModal =
    new bootstrap.Modal(
        document.getElementById(
            "exerciseModal"
        )
    );

const exerciseNameInput =
    document.getElementById(
        "exerciseNameInput"
    );

const exerciseVideoInput =
    document.getElementById(
        "exerciseVideoInput"
    );

const exerciseSetsInput =
    document.getElementById(
        "exerciseSetsInput"
    );

const exerciseRepsInput =
    document.getElementById(
        "exerciseRepsInput"
    );

const saveExerciseBtn =
    document.getElementById(
        "saveExerciseBtn"
    );

let selectedExercise = null;
let modalMode = "edit";

const deleteModal =
    new bootstrap.Modal(
        document.getElementById(
            "deleteModal"
        )
    );

const confirmDeleteBtn =
    document.getElementById(
        "confirmDeleteBtn"
    );

const deleteModalText =
    document.getElementById(
        "deleteModalText"
    );

let exerciseToDelete = null;

const addExerciseBtn =
    document.getElementById(
        "addExerciseBtn"
    );

addExerciseBtn.addEventListener(
    "click",
    openAddModal
);

function renderSettings() {

    container.innerHTML = "";

    workout.groups.forEach(group => {

        container.innerHTML += `
            <h3 class="exercise-group-title">
                ${group.title}
            </h3>
        `;

        group.exercises.forEach(exercise => {

            container.innerHTML += `
                <div class="settings-exercise-card">

                    <div class="settings-exercise-name">
                        ${exercise.name}
                    </div>

                    <div class="settings-actions">

                        <button
                            class="settings-action-btn move-up-btn"
                            data-id="${exercise.id}">

                            <i class="bi bi-arrow-up"></i>

                        </button>

                        <button
                            class="settings-action-btn move-down-btn"
                            data-id="${exercise.id}">

                            <i class="bi bi-arrow-down"></i>

                        </button>

                        <button
                            class="settings-action-btn text-success edit-exercise-btn"
                            data-id="${exercise.id}">

                            <i class="bi bi-pencil-fill"></i>

                        </button>

                        <button
                            class="settings-action-btn delete-exercise-btn text-danger"
                            data-group="${group.title}"
                            data-id="${exercise.id}">

                            <i class="bi bi-trash-fill"></i>

                        </button>

                    </div>

                </div>
            `;
        });

    });

    document.querySelectorAll(
        ".move-up-btn"
    )
    .forEach(button => {
    
        button.addEventListener(
            "click",
            moveExerciseUp
        );
    
    });
    
    document.querySelectorAll(
        ".move-down-btn"
    )
    .forEach(button => {
    
        button.addEventListener(
            "click",
            moveExerciseDown
        );
    
    });

    document.querySelectorAll(
        ".edit-exercise-btn"
    )
    .forEach(button => {
    
        button.addEventListener(
            "click",
            openEditModal
        );
    
    });
    
    document.querySelectorAll(
        ".delete-exercise-btn"
    )
    .forEach(button => {
    
        button.addEventListener(
            "click",
            deleteExercise
        );
    
    });

}

function deleteExercise(event) {

    const exerciseId =
        event.currentTarget.dataset.id;

    workout.groups.forEach(group => {

        group.exercises.forEach(exercise => {

            if (
                exercise.id === exerciseId
            ) {

                exerciseToDelete =
                    exercise;

            }

        });

    });

    deleteModalText.textContent =
        `¿Desea borrar "${exerciseToDelete.name}"?`;

    deleteModal.show();

}

confirmDeleteBtn.addEventListener(
    "click",
    confirmDeleteExercise
);

function confirmDeleteExercise() {

    workout.groups.forEach(group => {

        group.exercises =
            group.exercises.filter(
                exercise =>
                    exercise.id !==
                    exerciseToDelete.id
            );

    });

    localStorage.setItem(
        "gymcarly_workouts",
        JSON.stringify(workouts)
    );

    deleteModal.hide();

    renderSettings();

}

function moveExerciseUp(event) {

    const exerciseId =
        event.currentTarget.dataset.id;

    workout.groups.forEach(group => {

        const index =
            group.exercises.findIndex(
                exercise =>
                    exercise.id === exerciseId
            );

        if (index > 0) {

            [
                group.exercises[index - 1],
                group.exercises[index]
            ] = [
                group.exercises[index],
                group.exercises[index - 1]
            ];

        }

    });

    localStorage.setItem(
        "gymcarly_workouts",
        JSON.stringify(workouts)
    );

    renderSettings();

}
function moveExerciseDown(event) {

    const exerciseId =
        event.currentTarget.dataset.id;

    workout.groups.forEach(group => {

        const index =
            group.exercises.findIndex(
                exercise =>
                    exercise.id === exerciseId
            );

        if (
            index > -1 &&
            index < group.exercises.length - 1
        ) {

            [
                group.exercises[index + 1],
                group.exercises[index]
            ] = [
                group.exercises[index],
                group.exercises[index + 1]
            ];

        }

    });

    localStorage.setItem(
        "gymcarly_workouts",
        JSON.stringify(workouts)
    );

    renderSettings();

}

function openEditModal(event) {

    const exerciseId =
        event.currentTarget.dataset.id;

    modalMode = "edit";

    selectedExercise = null;

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

    document.getElementById(
        "exerciseModalTitle"
    ).textContent =
        "Editar ejercicio";
    
    exerciseGroupSelect.innerHTML = "";
    
    workout.groups.forEach(group => {
    
        exerciseGroupSelect.innerHTML += `
            <option value="${group.title}">
                ${group.title}
            </option>
        `;
    
    });

    exerciseNameInput.value =
        selectedExercise.name;

    exerciseVideoInput.value =
        selectedExercise.video;

    exerciseSetsInput.value =
        selectedExercise.sets;

    exerciseRepsInput.value =
        selectedExercise.reps;

    exerciseModal.show();

}

saveExerciseBtn.addEventListener(
    "click",
    saveExercise
);

function saveExercise() {

    if (modalMode === "edit") {

        selectedExercise.name =
            exerciseNameInput.value;

        selectedExercise.video =
            exerciseVideoInput.value;

        selectedExercise.sets =
            Number(
                exerciseSetsInput.value
            );

        selectedExercise.reps =
            exerciseRepsInput.value;

    }

    else if (modalMode === "add") {

        const selectedGroup =
            workout.groups.find(
                group =>
                    group.title ===
                    exerciseGroupSelect.value
            );

        selectedGroup.exercises.push({

            id:
                crypto.randomUUID(),

            name:
                exerciseNameInput.value,

            video:
                exerciseVideoInput.value,

            sets:
                Number(
                    exerciseSetsInput.value
                ),

            reps:
                exerciseRepsInput.value

        });

    }

    localStorage.setItem(
        "gymcarly_workouts",
        JSON.stringify(workouts)
    );

    exerciseModal.hide();

    renderSettings();

}

function openAddModal() {

    modalMode = "add";

    selectedExercise = null;

    document.getElementById(
        "exerciseModalTitle"
    ).textContent =
        "Añadir ejercicio";

    exerciseNameInput.value = "";
    exerciseVideoInput.value = "";
    exerciseSetsInput.value = "";
    exerciseRepsInput.value = "";

    exerciseGroupSelect.innerHTML = "";

    workout.groups.forEach(group => {

        exerciseGroupSelect.innerHTML += `
            <option value="${group.title}">
                ${group.title}
            </option>
        `;

    });

    exerciseModal.show();

}

renderSettings();