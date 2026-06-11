const workoutTypes = [
    {
        id: "chest",
        name: "Día de Pecho, Hombros y Tríceps"
    },
    {
        id: "legs",
        name: "Día de Fuerza Tren Inferior y Core"
    },
    {
        id: "back",
        name: "Día de Espalda, Bíceps y Cardio"
    },
    {
        id: "fullbody",
        name: "Día de Fuerza y Resistencia Total"
    }
];

const weekContainer =
    document.getElementById("agendaWeekContainer");

const periodTitle =
    document.getElementById("agendaPeriodTitle");
    const prevWeekButton =
    document.getElementById(
        "agendaPrevWeek"
    );

const nextWeekButton =
    document.getElementById(
        "agendaNextWeek"
    );
    let selectedDate =
        new Date()
        .toISOString()
        .split("T")[0];
    
    let currentWeekDate =
        new Date();

function renderWeek() {

    const day =
    currentWeekDate.getDay();

    const mondayOffset =
        day === 0 ? -6 : 1 - day;

    const monday =
        new Date(currentWeekDate);

    monday.setDate(
        currentWeekDate.getDate() + mondayOffset
    );

    const sunday =
        new Date(monday);

    sunday.setDate(
        monday.getDate() + 6
    );

    const months = [
        "Ene.",
        "Feb.",
        "Mar.",
        "Abr.",
        "May.",
        "Jun.",
        "Jul.",
        "Ago.",
        "Sep.",
        "Oct.",
        "Nov.",
        "Dic."
    ];

    periodTitle.textContent =
        `${months[monday.getMonth()]} ${monday.getFullYear()} · Semana: ${monday.getDate()} - ${sunday.getDate()}`;

    weekContainer.innerHTML = "";

    const weekDays = [
        "L",
        "M",
        "X",
        "J",
        "V",
        "S",
        "D"
    ];

    weekDays.forEach((dayName, index) => {

        const currentDay =
            new Date(monday);

        currentDay.setDate(
            monday.getDate() + index
        );

        const dayElement =
    document.createElement("div");

dayElement.classList.add(
    "agenda-day"
);

const currentDateString =
    currentDay.toISOString()
        .split("T")[0];

const hasTraining =
    trainings.some(
        training =>
            training.date === currentDateString
    );

    const training =
    trainings.find(
        item =>
            item.date === currentDateString
    );

if (training) {

    if (training.completed) {

        dayElement.classList.add(
            "agenda-day-completed"
        );

    } else {

        dayElement.classList.add(
            "agenda-day-training"
        );

    }

}

if (
    selectedDate ===
    currentDateString
) {

    dayElement.classList.add(
        "agenda-day-selected"
    );

}

        dayElement.innerHTML = `
            <div class="agenda-day-name">
                ${dayName}
            </div>

            <div class="agenda-day-number">
                ${currentDay.getDate()}
            </div>
        `;

        dayElement.addEventListener(
            "click",
            () => {
        
                selectedDate =
                    currentDateString;
        
                renderWeek();
        
                renderSelectedTraining();
        
            }
        );

        weekContainer.appendChild(
            dayElement
        );

    });

}

/* =========================
   TRAININGS
========================= */

const STORAGE_KEY = "gymcarly_trainings";

let trainings =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];

const addTrainingButton =
    document.getElementById(
        "agendaAddTraining"
    );

const saveTrainingButton =
    document.getElementById(
        "saveTrainingBtn"
    );

const deleteTrainingButton =
    document.getElementById(
        "deleteTrainingBtn"
    );

const trainingDateInput =
    document.getElementById(
        "trainingDate"
    );

const trainingTypeInput =
    document.getElementById(
        "trainingType"
    );

const trainingModal =
    new bootstrap.Modal(
        document.getElementById(
            "trainingModal"
        )
    );

addTrainingButton.addEventListener(
    "click",
    () => {

        trainingDateInput.value = "";
        trainingModal.show();

    }
);

saveTrainingButton.addEventListener(
    "click",
    saveTraining
);

deleteTrainingButton.addEventListener(
    "click",
    deleteTraining
);

function saveTraining() {

    const date =
        trainingDateInput.value;

    const workout =
        trainingTypeInput.value;

    if (!date) {

        alert(
            "Selecciona una fecha"
        );

        return;
    }

    trainings =
        trainings.filter(
            training =>
                training.date !== date
        );

    trainings.push({
        workout,
        date,
        completed: false
    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(trainings)
    );
    
    selectedDate = date;
    
    renderWeek();
    renderSelectedTraining();
    
    trainingModal.hide();
}

function deleteTraining() {

    const date =
        trainingDateInput.value;

    if (!date) {

        trainingModal.hide();

        return;
    }

    trainings =
        trainings.filter(
            training =>
                training.date !== date
        );

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(trainings)
        );
        
        renderWeek();
        renderSelectedTraining();
        
        trainingModal.hide();
}

// function renderTrainings() {

//     const container =
//         document.getElementById(
//             "agendaTrainingsContainer"
//         );

//     if (trainings.length === 0) {

//         container.innerHTML = `
//             <div class="agenda-empty-state">
//                 No hay entrenamientos programados
//             </div>
//         `;

//         return;
//     }

//     container.innerHTML = "";

//     trainings.forEach(training => {

//         const workout =
//             workoutTypes.find(
//                 item =>
//                     item.id === training.workout
//             );

//         container.innerHTML += `
//             <div class="agenda-workout-card">

//                 <div class="agenda-status-circle">
//                     ▶
//                 </div>

//                 <div>

//                     <h4>
//                         ${workout.name}
//                     </h4>

//                     <p>
//                         ${training.date}
//                     </p>

//                 </div>

//             </div>
//         `;
//     });

// }

//renderTrainings();

function renderSelectedTraining() {

    const container =
        document.getElementById(
            "agendaTrainingsContainer"
        );

    if (!selectedDate) {

        container.innerHTML = `
            <div class="agenda-empty-state">
                Selecciona un día
            </div>
        `;

        return;
    }

    const training =
        trainings.find(
            item =>
                item.date === selectedDate
        );

    if (!training) {

        container.innerHTML = `
            <div class="agenda-empty-state">
                No hay entrenamiento
            </div>
        `;

        return;
    }

    const workout =
        workoutTypes.find(
            item =>
                item.id === training.workout
        );

        container.innerHTML = `
<div
    class="
        agenda-workout-card
        ${
            training.completed
                ? "agenda-workout-card-completed"
                : ""
        }
    "
    onclick="window.location.href='workout.html?workout=${training.workout}&date=${training.date}'">
    
            <div>
    
                <h4>
                    ${workout.name}
                </h4>
    
                <p>
                    ${
                        training.completed
                            ? "✓ Entrenamiento completado"
                            : "➤ Empezar entrenamiento"
                    }
                </p>
    
            </div>
    
        </div>
    `;
}

prevWeekButton.addEventListener(
    "click",
    () => {

        currentWeekDate.setDate(
            currentWeekDate.getDate() - 7
        );

        renderWeek();

        renderSelectedTraining();

    }
);

nextWeekButton.addEventListener(
    "click",
    () => {

        currentWeekDate.setDate(
            currentWeekDate.getDate() + 7
        );

        renderWeek();

        renderSelectedTraining();

    }
);

renderWeek();
renderSelectedTraining();