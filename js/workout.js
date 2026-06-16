const params =
    new URLSearchParams(
        window.location.search
    );

const workoutId =
    params.get("workout");

const trainingDate =
    params.get("date");

const workoutTitle =
    document.getElementById(
        "workoutTitle"
    );

const workoutContainer =
    document.getElementById(
        "workoutExercises"
    );

const workout =
    workouts[workoutId];

if (workout) {

    workoutTitle.textContent =
        workout.title;

    workout.groups.forEach(group => {

        workoutContainer.innerHTML += `
            <h2 class="exercise-group-title">
                ${group.title}
            </h2>
        `;

        group.exercises.forEach(exercise => {

            workoutContainer.innerHTML += `
                <div
                    class="exercise-card"
                    onclick="window.location.href='exercise.html?id=${exercise.id}'">

                    <div class="exercise-name">
                        ${exercise.name}
                    </div>

                    <div class="exercise-details">
                        ${exercise.sets} series | ${exercise.reps}
                    </div>

                </div>
            `;
        });

    });
}

const finishWorkoutBtn =
    document.getElementById(
        "finishWorkoutBtn"
    );

finishWorkoutBtn.addEventListener(
    "click",
    finishWorkout
);
const timerBtn =
    document.getElementById(
        "timerBtn"
    );

let timer = null;
let seconds = 0;
let running = false;

function formatTime(totalSeconds) {

    const mins =
        Math.floor(totalSeconds / 60)
            .toString()
            .padStart(2, "0");

    const secs =
        (totalSeconds % 60)
            .toString()
            .padStart(2, "0");

    return `${mins}:${secs}`;
}

timerBtn.addEventListener(
    "click",
    () => {

        if (!running) {

            running = true;

            timer = setInterval(() => {

                seconds++;

                timerBtn.textContent =
                    formatTime(seconds);

            }, 1000);

            return;
        }

        clearInterval(timer);

        timer = null;
        seconds = 0;
        running = false;

        timerBtn.textContent =
            "Iniciar cronómetro";
    }
);

function finishWorkout() {

    const trainings =
        JSON.parse(
            localStorage.getItem(
                "gymcarly_trainings"
            )
        ) || [];

    const todayTraining =
        trainings.find(
            training =>
                training.workout === workoutId &&
                training.date === trainingDate
        );

    if (!todayTraining) {

        alert(
            "No se encontró entrenamiento"
        );

        return;
    }

    todayTraining.completed = true;

    localStorage.setItem(
        "gymcarly_trainings",
        JSON.stringify(trainings)
    );

    window.location.href =
        "agenda.html";
}