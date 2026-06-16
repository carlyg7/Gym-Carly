const defaultWorkouts = {

    chest: {

        title:
            "Día de Pecho, Hombros y Tríceps",

        groups: [
            {
                title: "Calentamiento",

                exercises: [

                    {
                        id: "mov_hombro",
                        name: "Movilidad de hombro desde el suelo",
                        video: "https://www.youtube.com/watch?v=_snYhrLofKg",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "retraccion_esc",
                        name: "Retracción escapular",
                        video: "https://www.youtube.com/watch?v=davMsr9u-lE",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "rotacion_hombro",
                        name: "Rotación externa de hombro con goma",
                        video: "https://www.youtube.com/watch?v=s0zSOq67N2I",
                        sets: 3,
                        reps: 10
                    }
                ]
            },

            {
                title: "Pecho",

                exercises: [

                    {
                        id: "bench_press",
                        name: "Press banca inclinado",
                        video: "https://www.youtube.com/watch?v=I6aG5eK4vu8",
                        sets: 3,
                        reps: 12
                    },

                    {
                        id: "apertura",
                        name: "Apertura en banco plano con mancuernas",
                        video: "https://www.youtube.com/watch?v=2rzOdnjuYqI",
                        sets: 3,
                        reps: 12
                    }
                ]
            },

            {
                title: "Hombros y Tríceps",

                exercises: [

                    {
                        id: "press_hombro",
                        name: "Press de hombro sentado",
                        video: "https://www.youtube.com/watch?v=LNoU2QoU0WY",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "actv_triceps",
                        name: "Activación de tríceps con polea/goma",
                        video: "https://www.youtube.com/watch?v=Zj1h0ObPsp8",
                        sets: 3,
                        reps: 15
                    },
                    
                    {
                        id: "flexiones",
                        name: "Flexiones inclinadas",
                        video: "https://www.youtube.com/watch?v=uCTbmCjiF7Y",
                        sets: 3,
                        reps: "Al fallo"
                    }
                ]
            },
            {
                title: "Fin",

                exercises: [
                    {
                        id: "cinta",
                        name: "Caminar en cinta",
                        video: "https://www.youtube.com/shorts/hzNfzTlyKG8",
                        sets: 1,
                        reps: "15 mins"
                    }
                ]
            }
        ]
    },

    legs: {

        title:
            "Día de Fuerza Tren Inferior y Core",

        groups: [
            {
                title: "Calentamiento",

                exercises: [

                    {
                        id: "cat",
                        name: "Gato Camello",
                        video: "https://www.youtube.com/watch?v=3UnRux32_KQ",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "bisagra",
                        name: "Bisagra de cadera",
                        video: "https://www.youtube.com/watch?v=3UnRux32_KQ",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "sent",
                        name: "Sentadilla peso corporal",
                        video: "https://www.youtube.com/watch?v=fVRf5jWCdQU",
                        sets: 3,
                        reps: 10
                    }
                ]
            },

            {
                title: "Principal",

                exercises: [

                    {
                        id: "sent_peso",
                        name: "Sentadilla en multipower",
                        video: "https://www.youtube.com/watch?v=tze03g3A2RE",
                        sets: 4,
                        reps: 10
                    },

                    {
                        id: "prensa",
                        name: "Prensa de piernas",
                        video: "https://www.youtube.com/watch?v=04J6cRvOb-I",
                        sets: 4,
                        reps: 12
                    },

                    {
                        id: "zancada",
                        name: "Zancada trasera con mancuernas",
                        video: "https://www.youtube.com/watch?v=1raOKTIVq7w",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "peso_muerto",
                        name: "Peso muerto rumano",
                        video: "https://www.youtube.com/watch?v=bbpRtMvp52g",
                        sets: 3,
                        reps: 12
                    }
                ]
            },

            {
                title: "Core (hacer ejercicios seguidos)",

                exercises: [

                    {
                        id: "plancha",
                        name: "Plancha",
                        video: "",
                        sets: 3,
                        reps: "30 segundos"
                    },

                    {
                        id: "rotacion",
                        name: "Rotación de core con mancuerna",
                        video: "https://www.youtube.com/watch?v=ZDQcxDR-fW0",
                        sets: 3,
                        reps: 15
                    }
                ]
            }
        ]
    },

    back: {

        title:
            "Día de Espalda, Bíceps y Cardio",

        groups: [

            {
                title: "Calentamiento",

                exercises: [

                    {
                        id: "mov_hombro",
                        name: "Movilidad de hombro desde el suelo",
                        video: "https://www.youtube.com/watch?v=_snYhrLofKg",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "retraccion_esc",
                        name: "Retracción escapular",
                        video: "https://www.youtube.com/watch?v=davMsr9u-lE",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "rotacion_tora",
                        name: "Rotación torácica a cuatro",
                        video: "https://www.youtube.com/watch?v=4USHZyOHGWo",
                        sets: 3,
                        reps: 10
                    }
                ]
            },

            {
                title: "Espalda",

                exercises: [

                    {
                        id: "dominadas",
                        name: "Dominadas",
                        video: "https://www.youtube.com/watch?v=MeP-o0EgKns",
                        sets: 3,
                        reps: "Al fallo"
                    },

                    {
                        id: "remo",
                        name: "Remo con barra",
                        video: "https://www.youtube.com/watch?v=jYS4mOpvh3M",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "lat_pulldown",
                        name: "Jalón al pecho",
                        video: "https://www.youtube.com/watch?v=c6SZm7jawwE",
                        sets: 3,
                        reps: 12
                    },

                    {
                        id: "remo_uni",
                        name: "Remo unilateral con mancuerna",
                        video: "https://www.youtube.com/watch?v=qFjJJdsFSvI",
                        sets: 3,
                        reps: "10-12"
                    }
                ]
            },

            {
                title: "Bíceps",

                exercises: [

                    {
                        id: "curl_biceps",
                        name: "Curl bíceps con barra Z",
                        video: "https://www.youtube.com/watch?v=no-dXip-rJM",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "curl_uni",
                        name: "Curl predicador unilateral",
                        video: "https://www.youtube.com/watch?v=9eMb1AfMafM",
                        sets: 3,
                        reps: 10
                    }
                ]
            },

            {
                title: "Cardio",

                exercises: [

                    {
                        id: "eliptica",
                        name: "Cinta + Elíptica",
                        video: "https://www.youtube.com/watch?v=RaEtcmCuwaM",
                        sets: 1,
                        reps: "15-20 minutos"
                    }
                ]
            }
        ]
    },

    fullbody: {

        title:
            "Día de Fuerza y Resistencia Total",

        groups: [

            {
                title: "Calentamiento",

                exercises: [

                    {
                        id: "cat",
                        name: "Gato Camello",
                        video: "https://www.youtube.com/watch?v=3UnRux32_KQ",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "mov_hombro",
                        name: "Movilidad de hombro desde el suelo",
                        video: "https://www.youtube.com/watch?v=_snYhrLofKg",
                        sets: 3,
                        reps: 10
                    },

                    {
                        id: "sent",
                        name: "Sentadilla peso corporal",
                        video: "https://www.youtube.com/watch?v=fVRf5jWCdQU",
                        sets: 3,
                        reps: 10
                    }
                ]
            },

            {
                title: "Full Body",

                exercises: [

                    {
                        id: "sentadilla_dos",
                        name: "Sentadilla con mancuernas bilateral",
                        video: "https://www.youtube.com/watch?v=MwrQ7HSl6lA",
                        sets: 4,
                        reps: 15
                    },

                    {
                        id: "prensa",
                        name: "Prensa de piernas",
                        video: "https://www.youtube.com/watch?v=04J6cRvOb-I",
                        sets: 3,
                        reps: 15
                    },

                    {
                        id: "swing",
                        name: "Swing con KB",
                        video: "https://www.youtube.com/watch?v=KkYOW3jDhoM",
                        sets: 4,
                        reps: 15
                    },

                    {
                        id: "cajon",
                        name: "Subida al banco con mancuernas",
                        video: "https://www.youtube.com/watch?v=AEayZkrclAY",
                        sets: 3,
                        reps: "12 por pierna"
                    },

                    {
                        id: "trx",
                        name: "TRX Row",
                        video: "https://www.youtube.com/watch?v=IEky4NL3LLQ",
                        sets: 3,
                        reps: 10
                    }
                ]
            },
            {
                title: "Fin",

                exercises: [
                    {
                        id: "cinta",
                        name: "Caminar en cinta",
                        video: "https://www.youtube.com/shorts/hzNfzTlyKG8",
                        sets: 1,
                        reps: "10 mins"
                    }
                ]
            }
        ]
    }
};

let workouts =
    JSON.parse(
        localStorage.getItem(
            "gymcarly_workouts"
        )
    );

if (!workouts) {

    workouts = structuredClone(
        defaultWorkouts
    );

    localStorage.setItem(
        "gymcarly_workouts",
        JSON.stringify(workouts)
    );

}