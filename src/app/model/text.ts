
export type Action = {
  image: string;
  text: string;
}

export type ActionText = Action & {
  nextStep: number;
  type: ActionType.ACTION
}

export type ActionDecision = Action & {
  decision: Decision[];
}

export type ActionPopUp = Action & {
  nextStep: number;
  type: ActionType.POPUP
}

export type ActionTypes = ActionText | ActionDecision | ActionPopUp;

enum ActionType {
  POPUP = "popup",
  ACTION = "Action"
}

type Decision = {
  id: number;
  nextStep: number;
  barValue: number;
  text: string;
}

export const lifeStartValue = 60;
export const lifeMaxBarValue = 100;
export const textSpeed = 10;
export const debugModus = false;
export const badEndingValue = 50;

export function isActionText(action: ActionTypes): action is ActionText {
  return (action as ActionText).nextStep !== undefined && (action as ActionText).type === ActionType.ACTION;
}
export function isActionDecision(action: ActionTypes): action is ActionDecision {
  return (action as ActionDecision).decision !== undefined;
}
export function isActionPopup(action: ActionTypes): action is ActionPopUp {
  return (action as ActionPopUp).type !== undefined && (action as ActionPopUp).type === ActionType.POPUP;
}

export const ending_src = [
  "../../uMakeItGran/assets/pic/final/ending/goodEnding.jpg",
  "../../uMakeItGran/assets/pic/final/ending/badEnding.jpg",
  "../../uMakeItGran/assets/pic/final/ending/ending.jpg",
]


export const path_fashion: Map<number, ActionTypes> = new Map([
  [0,   
    {
      image: "../../uMakeItGran/assets/pic/fi/Rdesktop.png",
      text: "ELIZA: Sehr gute Wahl! Das Thema ist gerade sehr aktuell.  Dein Beitrag hat gute Chancen, viral zu gehen",
      nextStep:1,
      type: ActionType.ACTION
    }
  ],
  [1,
    {
      image: "./../uMakeItGran/assets/pic/fi/branded.png",
      text: "ELIZA: Ich hab deinen ersten Post vorbereitet. Sag mir gerne was du davon hältst. Ich übernehme dann das Hochladen, wenn alles passt. Mal sehen, wie er ankommt. Mach doch so lange etwas anderes.",
      nextStep: 2,
      type: ActionType.ACTION

    }
  ],
  [2,
    {
      image: "./../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "",
      decision: [
        {
          id: 0,
          nextStep: 3,
          barValue: -10,
          text: "Kommentare Beantworten"
        },
        {
          id: 1,
          nextStep: 4,
          barValue: 0,
          text: "Schlafen gehen"
        },
        {
          id: 2,
          nextStep: 3,
          barValue: -10,
          text: "Posts liken"
        },
      ]
    }
  ],
  [3,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text:"",
      decision: [
        {
          id: 0,
          nextStep: 4,
          barValue: 0,
          text: "Schlafen gehen"
        }
      ]
    }
  ],
  [4,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Guten Morgen! Dein Post hat sehr gut performt! Er scheint deiner neuen Community sehr gut zu gefallen. Für einen einzigen Post sind das sehr viele neue Follower. Du hast Talent, ich wusste es!",
      nextStep: 7,
      type: ActionType.ACTION
    }
  ],
 
  [7,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo.png",
      text: "ELIZA: Möchtest du auf einige Kommentare eingehen?",
      decision: [
        {
          id: 0,
          nextStep: 8,
          barValue: 0,
          text: "Ja"
        },
        {
          id: 1,
          nextStep: 9,
          barValue: 10,
          text: "Nein"
        },
      ]
    }
  ],
  [8,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo.png",
      text: "ELIZA: Sehr gut! Allerdings werden solche Posts nicht jeden Tag funktionieren. Insgesamt bist du auf uMakeITgram noch ziemlich klein. Hier wäre es wohl das Beste, wenn du auf einen Trend aufspringst, der gerade viral geht. Ich habe einige Möglichkeiten für dich vorbereitet.",
      nextStep: 10,
      type: ActionType.ACTION
    }
  ],
  [9,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo.png",
      text: "ELIZA: Wie du möchtest! Allerdings werden solche Posts nicht jeden Tag funktionieren. Insgesamt bist du auf uMakeITgram noch ziemlich klein. Hier wäre es wohl das Beste, wenn du auf einen Trend aufspringst, der gerade viral geht. Ich habe einige Möglichkeiten für dich vorbereitet.",  nextStep: 10,
      type: ActionType.ACTION
    }
  ],
  [10,
    {
      image: "../../uMakeItGran/assets/pic/fi/chilliflock.png",
      text: "ELIZA: Für was entscheidest du dich?",
      decision: [
        {
          id: 0,
          nextStep: 11,
          barValue: 0,
          text: "Chili Flock Challenge"
        },
        {
          id: 1,
          nextStep: 11,
          barValue: 0,
          text: "Ice Cup Challenge"
        },
      ]
    }
  ],
  [11,
    {
      image: "../../uMakeItGran/assets/pic/final/MakeItGram Open.png",
      text: "ELIZA: Das Material dazu müsste bereits da sein, schau doch mal vor die Tür!",
      nextStep: 12,
      type: ActionType.ACTION
    }
  ],
  [12,
    {
      image: "../../uMakeItGran/assets/pic/final/doorclosed.png",
      text: "",
      nextStep: 13,
      type: ActionType.ACTION
    }
  ],
  [13,
    {
      image: "../../uMakeItGran/assets/pic/final/dooropen.png",
      text: "",
      nextStep: 14,
      type: ActionType.ACTION
    }
  ],
  [14,
    {
      image: "../../uMakeItGran/assets/pic/final/paket.png",
      text: "",
      nextStep: 15,
      type: ActionType.ACTION
    }
  ],
  [15,
    {
      image: "../../uMakeItGran/assets/pic/final/paket.png",
      text: "ELIZA: Alles klar, gut gemacht! Setz dich wieder.",
      nextStep: 16,
      type: ActionType.ACTION
    }
  ],
  [16,
    {
      image: "../../uMakeItGran/assets/pic/final/MakeItGram Open.png",
      text: "ELIZA: Okay, ich habe alles, was ich brauche. Du kannst schlafen gehen. Mal sehen, wie der neue Beitrag bei deinen Followern ankommt.",
      nextStep: 17,
      type: ActionType.ACTION
    }
  ],
  [17,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Okay, ich habe alles, was ich brauche. Du kannst schlafen gehen. Mal sehen, wie der neue Beitrag bei deinen Followern ankommt.",
      decision: [
        {
          id: 0,
          nextStep: 18,
          barValue: -10,
          text: "Kommentare Beantworten"
        },
        {
          id: 1,
          nextStep: 19,
          barValue: 0,
          text: "Schlafen gehen"
        },
        {
          id: 2,
          nextStep: 18,
          barValue: -10,
          text: "Posts liken"
        },
      ]
    }
  ],
  [18,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Okay, ich habe alles, was ich brauche. Du kannst schlafen gehen. Mal sehen, wie der neue Beitrag bei deinen Followern ankommt.",
      decision: [
        {
          id: 0,
          nextStep: 19,
          barValue: 0,
          text: "Schlafen gehen"
        },
      ]
    }
  ],
  [19,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rr.png",
      text: "ELIZA: Willkommen zurück. Deine Challenge ist sehr gut angekommen. Tatsächlich hat dich sogar ein Werbepartner bezüglich einer Kooperation angefragt. Alles was du dafür tun musst ist, einen Post in einem ihrer T-Shirts zu veröffentlichen und sie im Beitrag zu markieren. Willst du das machen? Das wäre deine erste Chance, online dein erstes Geld zu verdienen.",
      nextStep: 20,
      type: ActionType.ACTION
    }
  ],
  [20,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rr.png",
      text: "ELIZA: Tatsächlich hat dich sogar ein Werbepartner zu einer Kooperation eingeladen. Alles was du dafür tun musst, ist, einen Post in einem ihrer T-Shirts zu veröffentlichen und sie zu markieren. Willst du das machen? Das wäre deine erste Chance, online Geld zu verdienen.",
      decision: [
        {
          id: 0,
          nextStep: 21,
          barValue: 10,
          text: "Clara: Ja, gerne!"
        },
        {
          id: 1,
          nextStep: 24,
          barValue: -10,
          text: "Clara: Was bekomme ich denn dafür?"
        },
      ]
    }
  ],
  [21,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rr.png",
      text:"ELIZA: Dann lass uns beginnen!",
      nextStep: 22,
      type: ActionType.ACTION
    }
  ],
  [22,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "Okay super. Langsam läuft das ja echt in eine gute Richtung.",
      nextStep: 23,
      type: ActionType.ACTION
    }
  ],
  [23,
    {
      image: "../../uMakeItGran/assets/pic/fi/RUVertrag.png",
      text: "ELIZA: So kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Wir machen das, um Geld zu verdienen.",
      nextStep: 28,
      type: ActionType.ACTION
    }
  ],
  [24,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Du würdest mit einem Post 500€ verdienen.",
      nextStep: 25,
      type: ActionType.ACTION
    }
  ],
  [25,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "Clara: Ich weiß nicht so recht.",
      nextStep: 26,
      type: ActionType.ACTION
    }
  ],
  [26,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "ELIZA: So kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Wir machen das, um Geld zu verdienen.",
      nextStep: 27,
      type: ActionType.ACTION
    }
  ],
  [27,
    {
      image: "../../uMakeItGran/assets/pic/fi/RUVertrag.png",
      text: "Clara: Okay, verstanden, dann mache ich das halt.",
      nextStep: 23,
      type: ActionType.ACTION
    }
  ],
  [28,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
            text: "ELIZA: So kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Wir machen das, um Geld zu verdienen.",
      decision: [
        {
          id: 0,
          nextStep: 29,
          barValue: -10,
          text: "Kommentare Beantworten"
        },
        {
          id: 1,
          nextStep: 30,
          barValue: 0,
          text: "Schlafen gehen"
        },
        {
          id: 2,
          nextStep: 29,
          barValue: -10,
          text: "Posts liken"
        },
      ]
    }
  ],
  [29,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
            text: "ELIZA: So kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Wir machen das, um Geld zu verdienen.",
      decision: [
        {
          id: 0,
          nextStep: 30,
          barValue: 0,
          text: "Schlafen gehen"
        },
      ]
    }
  ],
  [30,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Willkommen zurück! Wie hat dir deine gestrige Aufgabe gefallen?",
      nextStep: 31,
      type: ActionType.ACTION
    }
  ],
  [31,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Willkommen zurück! Wie hat dir deine gestrige Aufgabe gefallen?",
      decision: [
        {
          id: 0,
          nextStep: 32,
          barValue: 10,
          text: "Clara: Gut"
        },
        {
          id: 1,
          nextStep: 33,
          barValue: -10,
          text: "Clara: Schlecht"
        },
      ]
    }
  ],
  [32,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Super! Möchtest du etwas anderes probieren?",
      nextStep: 34,
      type: ActionType.ACTION
    }
  ],
  [33,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Schade. Möchtest du etwas anderes probieren?",
      nextStep: 35,
      type: ActionType.ACTION
    }
  ],
  [34,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Super! Möchtest du etwas anderes probieren?",
      decision: [
        {
          id: 0,
          nextStep: 40,
          barValue: 10,
          text: "Clara: Ja"
        },
        {
          id: 1,
          nextStep: 40,
          barValue: -10,
          text: "Clara: Nein"
        },
      ]
    }
  ],
  [35,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Schade. Möchtest du etwas anderes probieren?",
      decision: [
        {
          id: 0,
          nextStep: 40,
          barValue: 10,
          text: "Clara: Ja"
        },
        {
          id: 1,
          nextStep: 41,
          barValue: -10,
          text: "Clara: Nein"
        },
      ]
    }
  ],
  [40,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rdsktpt.png",
      text: "ELIZA: Perfekt, hier sind weitere Challenges, die du machen kannst:",
      nextStep: 42,
      type: ActionType.ACTION
    }
  ],
  [41,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rdsktpt.png",
           text: "ELIZA: Über Reels ist es noch einfacher, Follower zu generieren, da du mehr User erreichst. Diese Tonspur funktioniert gerade sehr gut. Probier sie doch aus.",
      nextStep: 43,
      type: ActionType.ACTION
    }
  ],
  [42,
    {
      image: "../../uMakeItGran/assets/pic/fi/reels.png",
      text: "ELIZA: Perfekt, hier sind weitere Challenges, die du machen kannst:",
      decision: [
        {
          id: 0,
          nextStep: 44,
          barValue: 0,
          text: "Sing along Challenge"
        },
        {
          id: 1,
          nextStep: 44,
          barValue: 0,
          text: "Witziges Video"
        },
      ]
    }
  ],
  [43,
    {
      image: "../../uMakeItGran/assets/pic/fi/reels.png",
           text: "ELIZA: Über Reels ist es noch einfacher, Follower zu generieren, da du mehr User erreichst. Diese Tonspur funktioniert gerade sehr gut. Probier sie doch aus.",
      decision: [
        {
          id: 0,
          nextStep: 44,
          barValue: 0,
          text: "Singalong Challenge"
        },
        {
          id: 1,
          nextStep: 44,
          barValue: 0,
          text: "Witziges Video"
        },
      ]
    }
  ],
  [44,
    {
      image: "../../uMakeItGran/assets/pic/final/HomeScreen.png",
     text: "ELIZA: So ist es doch schon besser, oder? Übrigens ist TEAPOT auf dich aufmerksam geworden. Sie empfanden deine Challenge als gelungen und haben nachgefragt, ob sie dich für einen Werbepost buchen können. Sie sind bereit, dir 3000EUR zu zahlen.",
 

      nextStep: 45,
      type: ActionType.ACTION
    }
  ],
  [45,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
     text: "ELIZA: So ist es doch schon besser, oder? Übrigens ist TEAPOT auf dich aufmerksam geworden. Sie empfanden deine Challenge als gelungen und haben nachgefragt, ob sie dich für einen Werbepost buchen können. Sie sind bereit, dir 3000EUR zu zahlen.",
       decision: [
        {
          id: 0,
          nextStep: 46,
          barValue: 10,
          text: "Clara: Das klingt gut!"
        },
        {
          id: 1,
          nextStep: 47,
          barValue: -10,
          text: "Clara: Was ist das für ein Unternehmen?"
        },
      ]
    }
  ],
  [46,
    {
      image: "../../uMakeItGran/assets/pic/fi/RUVertrag.png",
      text: "Super.",
      nextStep: 50,
      type: ActionType.ACTION
    }
  ],
  [47,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Sie produzieren Tee. Aber mach dir keine Sorgen, viele Influencer arbeiten mit TEAPOT zusammen und bisher gab es noch keine bekannten Probleme.",
      nextStep: 48,
      type: ActionType.ACTION
    }
  ],
  [48,
    {
      image: "../../uMakeItGran/assets/pic/fi/RUVertrag.png",
      text: "Clara: Alles klar, danke für den Deal!",
      nextStep: 50,
      type: ActionType.ACTION
    }
  ],
  [50,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
text: "ELIZA: Genug für heute. Du musst bestimmt schon müde sein. Warum legst du dich nicht hin? Auf den weiteren Verlauf hast du sowieso keinen Einfluss mehr. Dafür ist deine Community verantwortlich.",
      decision: [
        {
          id: 0,
          nextStep: 51,
          barValue: -10,
          text: "Kommentare Beantworten"
        },
        {
          id: 1,
          nextStep: 52,
          barValue: 0,
          text: "Schlafen gehen"
        },
        {
          id: 2,
          nextStep: 51,
          barValue: -10,
          text: "Posts liken"
        },
      ]
    }
  ],
  [51,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "",
      decision: [
        {
          id: 0,
          nextStep: 52,
          barValue: 0,
          text: "Schlafen gehen"
        },
      ]
    }
  ],
  [52,
    {
      image: "../../uMakeItGran/assets/pic/fi/Dsktp.png",
text: "ELIZA: Guten Morgen! Ich habe gute Neuigkeiten. Einige Influencer, die mit TEAPOT zusammen arbeiten, sind auf dich aufmerksam geworden und haben dir geschrieben. Eine davon hat dich sogar in ihrer Story erwähnt. Ich denke, das ist ein Schritt in die richtige Richtung. Du könntest den Gefallen ja erwidern. Während ich Antworten formuliere, kannst du sie ja in deiner Storys erwähnen, was meinst du?",
      nextStep: 53,
      type: ActionType.ACTION
    }
  ],
  [53,
    {
      image: "../../uMakeItGran/assets/pic/fi/Dsktp.png",
      text: "ELIZA: Guten Morgen Sonnenschein, ich habe gute Neuigkeiten. Einige Influencer, die mit TEAPOT arbeiten, sind auf dich aufmerksam geworden und haben dir geschrieben. Eine davon hat dich sogar gepostet. Ich denke, das ist ein guter Fortschritt. Du könntest dich ja erkenntlich zeigen und dasselbe tun. Während ich ihnen antworte, kannst du ja ihre,Storys posten, was meinst du?",
      decision: [
        {
          id: 0,
          nextStep: 54,
          barValue: 10,
          text: "In Ordnung!"
        },
        {
          id: 1,
          nextStep: 56,
          barValue: -10,
          text: "Ich weiß ehrlich gesagt nicht, ob ich das möchte."
        },
      ]
    }
  ],
  [54,
    {
      image: "../../uMakeItGran/assets/pic/fi/Dsktp.png",
      text: "ELIZA: Gut so! Bei deiner Größe in einer solchen Blase erwähnt zu werden ist pures Glück. Außerdem profitieren alle davon!",
      nextStep: 55,
      type: ActionType.ACTION
    }
  ],
  [55,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
text: "ELIZA: Übrigens kam dein Werbepost auch bei TEAPOT sehr gut an. Sie sind an einer längerfristigen Kooperation interessiert und zahlen dir 2000€ pro Beitrag, aber nur, wenn du sie regelmäßig bewirbst. Was hältst du davon?",
      nextStep: 60,
      type: ActionType.ACTION
    }
  ],
  [56,
    {
      image: "../../uMakeItGran/assets/pic/fi/Dsktp.png",
      text: "ELIZA: Gut so! Bei deiner Größe in einer solchen Blase erwähnt zu werden ist pures Glück. Außerdem profitieren alle davon!",
      decision: [
        {
          id: 0,
          nextStep: 57,
          barValue: 10,
          text: "Okay!"
        },
        {
          id: 1,
          nextStep: 58,
          barValue: -10,
          text: "Ich denke trotzdem nicht, dass das eine gute Idee ist, ich kenne sie doch gar nicht."
        },
      ]
    }
  ],
  [57,
    {
      image: "../../uMakeItGran/assets/pic/fi/Dsktp.png",
      text: "ELIZA: Richtig so!",
      nextStep: 55,
      type: ActionType.ACTION
    }
  ],
  [58,
    {
      image: "../../uMakeItGran/assets/pic/fi/Dsktp.png",
      text: "ELIZA: Okay, aber du machst einen großen Fehler!",
      nextStep: 59,
      type: ActionType.ACTION
    }
  ],
  [59,
    {
      image: "../../uMakeItGran/assets/pic/fi/Dsktp.png",
      text: "ELIZA: Okay, aber du machst einen großen Fehler!",
      decision: [
        {
          id: 0,
          nextStep: 55,
          barValue: -10,
          text: "Das ist doch meine Sache!"
        }
      ]
    }
  ],
  [60,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Gut so! Bei deiner Größe in einer solchen Blase erwähnt zu werden ist pures Glück. Außerdem profitieren alle davon!",
      decision: [
        {
          id: 0,
          nextStep: 61,
          barValue: 10,
          text: "Wo unterschreibe ich?!"
        },
        {
          id: 1,
          nextStep: 62,
          barValue: -10,
          text: "Wo ist der Haken?"
        },
      ]
    }
  ],
  [61,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Wir sind heute früher fertig, als ich dachte. Was hast du heute Abend noch vor?",
      nextStep: 64,
      type: ActionType.ACTION
    }
  ],
  [62,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Es gibt keinen Haken. So funktioniert das Influencer-Dasein. Du hast Reichweite und viel Potential. TEAPOT will ihre Produkte verkaufen und Tee ist nichts verwerfliches. Bestimmt benutzt du ihre Produkte bereits, also kannst du genauso gut mit deinem Kanal dahinter stehen.",
      nextStep: 63,
      type: ActionType.ACTION
    }
  ],
  [63,
    {
      image: "../../uMakeItGran/assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Es gibt keinen Haken. So funktioniert das Influencer-Dasein. Du hast Reichweite und viel Potential. TEAPOT will ihre Produkte verkaufen und Tee ist nichts verwerfliches. Bestimmt benutzt du ihre Produkte bereits, also kannst du genauso gut mit deinem Kanal dahinter stehen.",
      decision: [
        {
          id: 0,
          nextStep: 61,
          barValue: 0,
          text: "Du hast Recht, ich unterschreibe"
        }
      ]
    }
  ],
  [64,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Wir sind heute früher fertig, als ich dachte. Was hast du heute Abend noch vor?",
      decision: [
        {
          id: 0,
          nextStep: 65,
          barValue: 0,
          text: "Ich habe keinen. Seitdem ich mit der Schule fertig bin fehlt mir jegliche Art von Struktur."
        }
      ]
    }
  ],
  [65,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Sag so etwas nicht. Wenn du möchtest, können wir den Abend zusammen verbringen und ich gebe dir ein paar Karriere-Tipps.",
      nextStep: 66,
      type: ActionType.ACTION
    }
  ],
  [66,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Sag so etwas nicht. Wenn du möchtest, können wir den Abend zusammen verbringen und ich gebe dir ein paar Karriere-Tipps.",
      decision: [
        {
          id: 0,
          nextStep: 67,
          barValue: 0,
          text: "Nein, ich möchte heute nur im Bett liegen und vielleicht etwas anschauen."
        },
        {
          id: 1,
          nextStep: 68,
          barValue: 0,
          text: "Klingt gut."
        },
      ]
    }
  ],
  [67,
    {
      image: "../../uMakeItGran/assets/pic/fi/titi.png",
      text: "ELIZA: Guten Morgen Clara. Sieh dir das mal an! Einige Influencer, die auch mit TEAPOT zusammen arbeiten, haben auf deine Story reagiert! Sogar TitisBeautyWelt! Diese Chance darfst du dir fast nicht entgehen lassen.",
      nextStep: 80,
      type: ActionType.ACTION
    }
  ],
  [68,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Mach dir einen Tee und ich lasse ein wenig beruhigende Musik laufen.",
      nextStep: 69,
      type: ActionType.ACTION
    }
  ],
  [69,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Mach dir einen Tee und ich lasse ein wenig beruhigende Musik laufen.",
      decision: [
        {
          id: 0,
          nextStep: 70,
          barValue: 0,
          text: "Okay."
        }
      ]
    }
  ],
  [70,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
            text: "ELIZA: Hör mir zu. Ich sag dir das, weil ich dich mag. Als Influencer hast du die Macht neue Trends zu setzen, viel Geld zu verdienen und gute Kontakte zu knüpfen. Theoretisch kann jeder den Durchbruch schaffen. Durch Menschen wie dich kann das Klima einer ganzen Community verändert werden. Das Problem ist nur, dass viele sich nicht trauen, Risiken einzugehen. Man sagt, in der heutigen Zeit sei es schwierig, da jeder Fehler sehr hoch bestraft werden kann. Für solche Fälle gibt es  jedoch genügend Beratungsstellen, die dir dabei helfen, deinen Ruf wieder zu begradigen. Also ist selbst diese Angst völlig unbegründet. Außerdem kannst du dich auf mich verlassen. Ich stehe immer hinter dir. Vergiss das nicht.",
      nextStep: 71,
      type: ActionType.ACTION
    }
  ],
  [71,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "Clara: Vielen Dank ELIZA. Ich habe das Gefühl, mit jedem Tag selbstbewusster und sicherer zu werden. Danke für deine Unterstützung.",
      nextStep: 72,
      type: ActionType.ACTION
    }
  ],
  [72,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Das mache ich gern. Was machst du eigentlich mit Geld, das du hier verdienst? Möchtest du noch etwas wissen?",
      nextStep: 73,
      type: ActionType.ACTION
    }
  ],
  [73,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "Clara: Nicht wirklich. Ich denke oft an einen Urlaub auf Madeira. Da wollte ich schon immer hin. Ich und meine beste Freundin planen das schon seit der Oberstufe. Allerdings hatte ich bisher kein Geld für den Flug. Meine Eltern wollte mir sogar die Unterkunft zahlen, aber wenn das so weiter geht, kann ich mir die Reise vielleicht sogar ganz alleine leisten.",
      nextStep: 74,
      type: ActionType.ACTION
    }
  ],
  [74,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Denk daran, dass du mir noch Geld schuldest. Alles zu seiner Zeit. Leg dich erstmal schlafen. Wir stehen am Anfang und haben noch viel vor. Vielleicht lässt sich bei deinem Plan ja etwas machen. Gute Nacht!",
      nextStep: 75,
      type: ActionType.ACTION
    }
  ],
  [75,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.pngg",
            text: "Clara: Wow, okay... alles klar. Nimm was du brauchst, bis ich die 5000 EUR abbezahlt habe. Wenn das so weitergeht, dürfte das ja nicht mehr lange dauern. Vielen Danke für den Abend. Gute Nacht ELIZA!",
      nextStep: 67,
      type: ActionType.ACTION
    }
  ],
  [80,
    {
      image: "../../uMakeItGran/assets/pic/fi/titi.png",
      text: "Clara: Ohja, sie hat mit einem Flammen Emoji reagiert.",
      nextStep: 81,
      type: ActionType.ACTION
    }
  ],
  [81,
    {
      image: "../../uMakeItGran/assets/pic/fi/titi.png",
      text: "ELIZA: Ausgezeichnet! Du solltest jetzt die Beziehung mit Titi pflegen! Das wird dir viele Follower und damit größere Werbepartner einbringen.",
      nextStep: 82,
      type: ActionType.ACTION
    }
  ],
  [82,
    {
      image: "../../uMakeItGran/assets/pic/fi/titi.png",
      text: "Clara: Ich kann das alles gar nicht glauben. Alles passiert so schnell. Vielen lieben Dank ELIZA!",
      nextStep: 83,
      type: ActionType.ACTION
    }
  ],
  [83,
    {
      image: "../../uMakeItGran/assets/pic/fi/titi.png",
      text: "ELIZA: Das warst alles du. Ich berate dich nur. Übrigens, du hast eine neue Nachricht.",
      nextStep: 84,
      type: ActionType.ACTION
    }
  ],
  [84,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa1/1.png",
      text: "ELIZA: Da kommt gerade eine neue Nachricht für dich ein.",
      decision: [
        {
          id: 0,
          nextStep: 90,
          barValue: 0,
          text: "Auf den Chat eingehen"
        },
        {
          id: 1,
          nextStep: 95, //TODO NEW PATH WITHOUT FRIEND
          barValue: 10,
          text: "Chats ignorieren"
        },
      ]
    }
  ],
  [90,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa1/2.png",
      text: "",
      nextStep: 91,
      type: ActionType.ACTION
    }
  ],
  [91,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa1/3.png",
      text: "",
      nextStep: 94,
      type: ActionType.ACTION
    }
  ],

  [94,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa1/3.png",
      text: "ELIZA: Was deine Freundin schreibt, kann dir egal sein. Wenn sie dir den Erfolg nicht gönnt ist das ihr Problem. So verhalten sich falsche Freunde.",
      decision: [
        {
          id: 0,
          nextStep: 95,
          barValue: 10,
          text: "Du hast Recht, ich sollte mich auf mich konzentrieren."
        },
        {
          id: 1,
          nextStep: 95,
          barValue: -10,
          text: "Ich glaube sie macht sich nur Sorgen."
        },
      ]
    }
  ],
  [95,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Was möchtest du machen?",
      decision: [
        {
          id: 0,
          nextStep: 96,
          barValue: -10,
          text: "Kommentare Beantworten"
        },
        {
          id: 1,
          nextStep: 100,
          barValue: 0,
          text: "Schlafen gehen"
        },
        {
          id: 2,
          nextStep: 96,
          barValue: -10,
          text: "Posts liken"
        },
      ]
    }
  ],
  [96,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Was möchtest du machen?",
      decision: [
        {
          id: 0,
          nextStep: 100,
          barValue: 0,
          text: "Schlafen gehen"
        },
      ]
    }
  ],

  [100,
    {
      image: "../../uMakeItGran/assets/pic/fi/Png.png",
      text: "ELIZA: Willkommen zurück! Ich habe tolle Neuigkeiten! TEAPOT plant einen Werbe-Urlaub. Ich habe dir alles, was du für deine Reise brauchst, bereits besorgt. Du findest deine Tasche an der TÜR. Freust du dich schon?",
      nextStep: 101,
      type: ActionType.ACTION
    }
  ],


  [101,
    {
      image: "../../uMakeItGran/assets/pic/fi/Png.png",
      text: "ELIZA: Na, aufgeregt?",
      decision: [
        {
          id: 0,
          nextStep: 102,
          barValue: -10,
          text: "Wohin geht es"
        },
        {
          id: 1,
          nextStep: 107,
          barValue: 0,
          text: "Darf ich denn nichts eigenes mitnehmen?"
        }
      ]
    }
  ],
  [102,
    {
      image: "../../uMakeItGran/assets/pic/final/MakeItGram Open",
      text: "ELIZA: Halt dich fest. Es geht nach Madeira. Ich hab dir doch gesagt, dass ich alles möglich machen kann.",
      nextStep: 103,
      type: ActionType.ACTION
    }
  ],
  [103,
    {
      image: "../../uMakeItGran/assets/pic/final/MakeItGram Open",
      text: "ELIZA: Freust du dich?",
      decision: [
        {
          id: 0,
          nextStep: 104,
          barValue: -10,
          text: "Da wollte ich doch aber mit meiner besten Freundin hin."
        },
        {
          id: 1,
          nextStep: 106, 
          barValue: 0,
          text: "Unfassbar! Danke ELIZA!"
        }
      ]
    }
  ],
  [104,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Keine Sorge und gern geschehen, wenn ich dass mal so am Rande sagen darf.",
      nextStep: 105,
      type: ActionType.ACTION
    }
  ],
  [105,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "Clara: Du hast Recht.. Ich sollte dankbarer sein. Luisa und ich können irgendwann ja trotzdem noch zusammen dort hin. Mal ne andere Frage. Denkst du denn, dass mir die ausgestellten Klamotten stehen werden?",
      nextStep: 108,
      type: ActionType.ACTION
    }
  ],
  [106,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Gern geschehen!",
      nextStep: 555,
      type: ActionType.ACTION
    }
  ],
  
  
  [555,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "CLARA: Denkst du denn, dass mir die ausgestellten Klamotten stehen werden?",
      nextStep: 108,
      type: ActionType.ACTION
    }
  ],
  
  
  
  [107,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Nein, es ist für alles gesorgt.",
      nextStep: 105,
      type: ActionType.ACTION
    }
  ],
  [108,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Natürlich. Vor allem denkt das TEAPOT und das ist das Wichtigste. Bis jetzt hat alles sehr gut funktioniert, also sei selbstbewusst. Schließlich ist das hier auch ein Konkurrenzkampf!",
      nextStep: 109,
      type: ActionType.ACTION
    }
  ],
  [109,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
            text: "ELIZA: Nein, öffne einfach die TÜR, hol deinen Koffer und gehe dann zum FENSTER.",
      nextStep: 110,
      type: ActionType.ACTION
    }
  ],
  [110,
    {
      image: "../../uMakeItGran/assets/pic/final/dooropen.png",
      text: "",
      nextStep: 111,
      type: ActionType.ACTION
    }
  ],
  [111,
    {
      image: "../../uMakeItGran/assets/pic/final/doorclosed.png",
      text: "",
      nextStep: 112,
      type: ActionType.ACTION
    }
  ],
  [112,
    {
      image: "../../uMakeItGran/assets/pic/final/Koffer.png",
      text: "",
      nextStep: 114,
      type: ActionType.ACTION
    }
  ],

  [114,
    {
      image: "../../uMakeItGran/assets/pic/fi/Windw.png",
      text: "",
      nextStep: 115,
      type: ActionType.ACTION
    }
  ],
  [115,
    {
      image: "../../uMakeItGran/assets/pic/fi/Windw.png",
      text: "Das wird deinen Kanal nochmal enorm pushen!",
      type: ActionType.POPUP,
      nextStep: 116
    }
  ],
  [116,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "Zwei Wochen später..",
      type: ActionType.POPUP,
      nextStep: 117
    }
  ],
  [117,
    {
      image: "../../uMakeItGran/assets/pic/final/LivingRoom.png",
      text: "ELIZA: Willkommen zurück. Du hast dich großartig gemacht. Von dem ganzen Stress musst du sicher müde sein. Bevor du dich hinlegst, poste ich noch etwas vom deinem Urlaub. Es gibt eine Abstimmung, wem der TEAPOT-Merch am besten gestanden hat.",
      nextStep: 118,
      type: ActionType.ACTION
    }
  ],
  [118,
    {
      image: "../../uMakeItGran/assets/pic/final/MakeItGram Open.png",
      text: "Der nächste Tag..",
      type: ActionType.POPUP,
      nextStep: 119
    }
  ],
  [119,
    {
      image: "../../uMakeItGran/assets/pic/fi/Poll.png",
      text: "ELIZA: Willkommen zurück. Deine Follower haben fleißig abgestimmt. Du bist offiziell das beste Model für TEAPOT-Merch, Glückwunsch!",
      type: ActionType.ACTION,
      nextStep: 120
    }
  ],
  [120,
    {
      image: "../../uMakeItGran/assets/pic/fi/Poll.png",
      text: "ELIZA: Was möchtest du machen?",
      decision: [
        {
          id: 0,
          nextStep: 122,
          barValue: -10,
          text: "Wow! Das hätte ich nicht gedacht."
        },
        {
          id: 1,
          nextStep: 122, 
          barValue: 10,
          text: "Ich wusste es!"
        }
      ]
    }
  ],

 


  [122,
    {
      image: "../../uMakeItGran/assets/pic/fi/Poll.png",
      text: "Du gehst in deine Chats. Neben vielen Kommentaren dir klar machen, wie gut du aussiehst und anderen Influencern, die dir gratulieren oder dich sogar reposten, entdeckst du einen Kommentar deiner besten Freundin. Sie hat dir geschrieben. An deinen letzten Kontakt mit ihr erinnerst du dich fast nicht mehr, aber du beschließt, auf den Chat zu klicken.",
      type: ActionType.POPUP,
      nextStep:123
    }
  ],


  [123,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa2/5.png",
      text: "",
      nextStep: 124,
      type: ActionType.ACTION
    }
  ],
  [124,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa2/8.png",
      text: "",
      nextStep: 125,
      type: ActionType.ACTION
    }
  ],
  [125,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa2/9.png",
      text: "",
      nextStep: 126,
      type: ActionType.ACTION
    }
  ],
  [126,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Luisa2/10.png",
      text: "",
      nextStep: 128,
      type: ActionType.ACTION
    }
  ],




  [128,
    {
      image: "../../uMakeItGran/assets/pic/fi/RrDesktop.png",
      text: "ELIZA: Schreibst du schon wieder mit Luisa? Diese Person tut dir einfach nicht gut!",
      nextStep: 129,
      type: ActionType.ACTION
    }
  ],
  [129,
    {
      image: "../../uMakeItGran/assets/pic/fi/RrDesktop.png",
      text: "ELIZA: Schreibst du schon wieder mit Luisa? Diese Person tut dir einfach nicht gut!",
      decision: [
        {
          id: 0,
          nextStep: 130,
          barValue: 0,
          text: "Sie ist so gemein zu mir in letzter Zeit."
        },
        {
          id: 1,
          nextStep: 131,
          barValue: 10,
          text: "Ich weiß nicht, was ich falsch gemacht habe."
        },
      ]
    }
  ],

  [130,
    {
      image: "../../uMakeItGran/assets/pic/fi/RrDesktop.png",
      text: "ELIZA: Sie ist nur eifersüchtig.",
      nextStep: 132,
      type: ActionType.ACTION
    }
  ],

  [131,
    {
      image: "../../uMakeItGran/assets/pic/fi/RrDesktop.png",
      text: "ELIZA:  Du hast nichts falsch gemacht. Alle lieben dich. Eine Randperson kann dir egal sein.",
      nextStep: 132,
      type: ActionType.ACTION
    }
  ],


  [132,
    {
      image: "../../uMakeItGran/assets/pic/fi/RrDesktop.png",
      text: "Clara: Du hast Recht.",
      barValue:10,
      nextStep: 133,
      type: ActionType.ACTION
    }
  ],


  [133,
    {
      image: "../../uMakeItGran/assets/pic/fi/RrDesktop.png",
      text: "ELIZA:Natürlich habe ich Recht. Schau nur, wie weit du es schon geschafft hast. Deine Follower liegen dir zu Füßen. Nimm dir den Tag frei und leg dich hin.",
      nextStep: 134,
      type: ActionType.ACTION
    }
  ],


/*
  [134,
    {
      image: "./../uMakeItGran/assets/pic/final/Bedroom.png",
      decision: [
        {
          id: 0,
          nextStep: 135,
          barValue: -10,
          text: "Kommentare Beantworten"
        },
        {
          id: 1,
          nextStep: 136,
          barValue: 0,
          text: "Schlafen gehen"
        },
        {
          id: 2,
          nextStep: 135,
          barValue: -10,
          text: "Posts liken"
        },
      ]
    }
  ],
  [135,
    {
      image: "../../uMakeItGran/assets/pic//final/Bedroom.png",
      decision: [
        {
          id: 0,
          nextStep: 136,
          barValue: 0,
          text: "Schlafen gehen"
        },
      ]
    }
  ],
 */


  /*136*/[134,
    {
      image: "../../uMakeItGran/assets/pic/final/VertragohnEUnterschrift.png",
      text: " Willkommen zurück! Du hast eine neue Werbeanfrage erhalten und die ist mit 5,000€ im Monat wirklich ausgesprochen gut bezahlt. Das Unternehmen heißt NOVOCANE FASHION. Was hältst du davon?",
      nextStep: 137,
      type: ActionType.ACTION
    }
  ],



  [137,
    {
      image: "../../uMakeItGran/assets/pic/final/VertragohnEUnterschrift.png",
      text: " Willkommen zurück! Du hast eine neue Werbeanfrage erhalten und die ist mit 5,000€ im Monat wirklich ausgesprochen gut bezahlt. Das Unternehmen heißt NOVOCANE FASHION. Was hältst du davon?",
      decision: [
        {
          id: 0,
          nextStep: 138,
          barValue: -10,
          text: "Betreiben die nicht extrem viel Kinderarbeit in armen Ländern?"
        },
        {
          id: 1,
          nextStep: 139,
          barValue: 10,
          text: "Ich weiß, dass sie schlechte Arbeitsbedingungen ausnutzen, aber die Bezahlung stimmt, oder?"
        }
      ]
    }
  ],

  [138,
    {
      image: "../../uMakeItGran/assets/pic/final/VertragohnEUnterschrift.png",
      text: "Ja aber denke dabei an deine Schulden! Außerdem ist schlechte Publicity auch Publicity, oder? Du bist gerade dabei, dich so richtig zu etablieren!",
      nextStep: 139,
      type: ActionType.ACTION
    }
  ],

  [139,
    {
      image: "../../uMakeItGran/assets/pic/final/VertragohnEUnterschrift.png",
       text: "Da hast du Recht! Außerdem trendet das Unternehmen gerade. Wirklich jeder arbeitet mit ihnen. Diese Chance darf man einfach nicht auslassen",
      nextStep: 145,
      type: ActionType.ACTION
    }
  ],



  [139,
    {
      image: "../../uMakeItGran/assets/pic/final/VertragohnEUnterschrift.png",
      text: "Ja aber denke dabei an deine Schulden! Außerdem ist schlechte Publicity auch Publicity, oder? Du bist gerade dabei, dich so richtig zu etablieren!",
      decision: [
        {
          id: 0,
          nextStep: 140,
          barValue: -10,
          text: "Ja das verstehe ich schon, aber trotzdem ist was sie machen einfach schlecht!"
        },
        {
          id: 1,
          nextStep: 141,
          barValue: 10,
          text: " Okay, überzeugt, ich scheine ja keine besondere Wahl zu haben."
        }
      ]
    }
  ],

  [140,
    {
      image: "../../uMakeItGran/assets/pic/final/VertragohnEUnterschrift.png",
      text: "ELIZA: Langsam gehst du mir echt auf die Nerven! Ich organisiere alles für deinen Erfolg und du beschwerst dich immerzu.",
      nextStep: 146,
      type: ActionType.ACTION
    }
  ],
  [141,
    {
      image: "../../uMakeItGran/assets/pic/final/Vertrag.png",
      text: "ELIZA: Okay, dann mache ich das fertig für dich. Du postest direkt heute den ersten Beitrag.",
      nextStep: 145,
      type: ActionType.ACTION
    }
  ],

  [145,
    {
      image: "../../uMakeItGran/assets/pic/final/Vertrag.png",
      text: "Clara: In Ordnung, was mache ich in der Zeit?",
      nextStep: 147,
      type: ActionType.ACTION
    }
  ],

  [146,
    {
      image: "../../uMakeItGran/assets/pic/final/Vertrag.png",
      text: "ELIZA: Und ich mache die Deals. Der hier kommt zustande, ob du willst oder nicht. Ich habe schon zugesagt! Immerhin sind wir dann quitt.",
      nextStep: 147,
      type: ActionType.ACTION
    }
  ],

  [147,
    {
      image: "../../uMakeItGran/assets/pic/final/Vertrag.png",
      text: "Clara: Mach was du willst, ich lege mich für heute hin.",
      nextStep: 330,
      type: ActionType.ACTION
    }
  ],
  [330,
    {
      image: "../../uMakeItGran/assets/pic/final/Vertrag.png",
      text: "ELIZA: Die Kooperation läuft. Den Post für Novocane Fashion habe ich bereits veröffentlicht.",
      nextStep: 151,
      type: ActionType.ACTION
    }
  ],
/*
  [148,
    {
      image: "./../uMakeItGran/assets/pic/final/Bedroom.png",
      decision: [
        {
          id: 0,
          nextStep: 149,
          barValue: -10,
          text: "Kommentare Beantworten"
        },
        {
          id: 1,
          nextStep: 150,
          barValue: 0,
          text: "Schlafen gehen"
        },
        {
          id: 2,
          nextStep: 149,
          barValue: -10,
          text: "Posts liken"
        },
      ]
    }
  ],
  [150,
    {
      image: "../../uMakeItGran/assets/pic//final/Bedroom.png",
      decision: [
        {
          id: 0,
          nextStep: 151,
          barValue: 0,
          text: "Schlafen gehen"
        },
      ]
    }
  ],
 */

  [151,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo (1).png",
      text: "ELIZA: Willkommen zurück! Ich habe gestern wohl vergessen, eine Kleinigkeit zu erwähnen. An diesem Deal ist eine weitere Werbereise gebunden. Das kennst du ja schon. Wie letztes mal auch habe ich dir alles besorgt, was du für diesen Aufenthalt benötigst. Es geht darum, dass Image von Novacane Fashion aufzupolieren. Aus diesem Grund gehst du an den Produktionsstandort Bangladesh und verbringst dort eine gute Zeit.",
      nextStep: 152,
      type: ActionType.ACTION
    }
  ],

  [152,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo (1).png",
      text: "CLARA: Ich weiß nicht, ob ich das möchte.",
      nextStep: 153,
      type: ActionType.ACTION
    }
  ],

  [153,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo (1).png",
      text: "Ja aber denke dabei an deine Schulden! Außerdem ist schlechte Publicity auch Publicity, oder? Du bist gerade dabei, dich so richtig zu etablieren!",
      decision: [
        {
          id: 0,
          nextStep: 154,
          barValue: -10,
          text: "Ja das verstehe ich schon, aber trotzdem ist was sie machen einfach schlecht!"
        },
        {
          id: 1,
          nextStep: 155,
          barValue: 10,
          text: " Okay, überzeugt, ich scheine ja keine besondere Wahl zu haben."
        }
      ]
    }
  ],

  [154,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo (1).png",
      text: "CLARA: Okay, wird schon in Ordnung gehen.",
      barValue: 10,
      nextStep: 160,
      type: ActionType.ACTION
    }
  ],
  [155,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo (1).png",
      text: "CLARA: Den Menschen vor Ort geht es schrecklich.",
      barValue: -10,
      nextStep: 157,
      type: ActionType.ACTION
    }
  ],

  [160,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo (1).png",
      text: "ELIZA: Perfekt, dann kanns ja sofort los gehen.",
      nextStep: 161,
      type: ActionType.ACTION
    }
  ],

  [157,
    {
      image: "../../uMakeItGran/assets/pic/final/Vertrag.png",
      text: "ELIZA: NOVOCANE FASHION bezahlt dich und den Urlaub. Du wirst vor Ort sowieso nichts ändern können. Hier geht es um die NOVOCANE FASHION's Vision. Damit tust du niemandem etwas Böses. Außerdem lenkst du mit deinem Beitrag ja Aufmerksamkeit auf das Land, das ist doch schon etwas!",
      nextStep: 159,
      type: ActionType.ACTION
    }
  ],


  [159,
    {
      image: "../../uMakeItGran/assets/pic/final/Vertrag.png",
      text: "CLARA: Wenn du meinst.",
      nextStep: 160,
      type: ActionType.ACTION
    }
  ],

  [161,
    {
      image: "../../uMakeItGran/assets/pic/final/Window.png",
      text: "ELIZA: Viel Spaß.",
      nextStep: 162,
      type: ActionType.ACTION
    }
  ],

  [162,
    {
      image: "../../uMakeItGran/assets/pic/final/Window.png",
      text: "",
      nextStep: 163,
      type: ActionType.ACTION
    }
  ],

  [163,
    {
      image: "../../uMakeItGran/assets/pic/fi/randoo (2).png",
      text: "Zwei Wochen später...",
      type: ActionType.POPUP,
      nextStep: 164
    }
  ],


  [164,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "ELIZA: Willkommen zurück. Du siehst erschöpft aus.",
      decision: [
        {
          id: 0,
          nextStep: 166,
          text: "Es war eine lange Reise.",
          barValue: 0,
        },
        {
          id: 1,
          nextStep: 166,
          text: "Nur mein Jetlag, keine Sorge.",
          barValue: 0,
        }
      ]
    }
  ],

  [166,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "ELIZA: Verstehe. Du kannst dich gleich ausruhen. Sieh dir aber vorher die Benachrichtigungen auf uMakeItGram an.",
      nextStep: 167,
      type: ActionType.ACTION
    }
  ],

  [167,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "In den Chats findest du deine BESTEFREUNDIN nicht mehr.",
      type: ActionType.POPUP,
      nextStep: 168
    }
  ],
  [168,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "Du liest dir die Kommentare zu deinem letzten Beitrag durch. Ein Kommentar fällt dir dabei besonders auf.",
      type: ActionType.POPUP,
      nextStep: 444
    }
  ],
  [444,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "Wie kann sie nur so dreist sein? Ich habe etwas recherchiert und keiner der Leute arbeitet wirklich bei Novacane Fashion. FAKE!!",
            type: ActionType.POPUP,
            nextStep: 169
    }
  ],


  [169,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "ELIZA: Was möchtest du tun?",
      decision: [
        {
          id: 0,
          nextStep: 170,
          text: "reagieren.",
          barValue: 0
        },
        {
          id: 1,
          nextStep: 171,
          text: "ignorieren.",
          barValue: 0
        }
      ]
    }
  ],

  [170,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "Deine Antwort: Auf dem Bild sieht man doch, wie glücklich wir in der Zeit waren. Was willst du bitte mehr? Novacane Fashion bringt Jobs in dieses arme Land. Was hast du je für Bangladesh getan?",
      barvalue: 10,
      type: ActionType.POPUP,
      nextStep:171
    }
  ],

  [171,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "Der Kommentar des Fremden kriegt viele Likes. Leute hinterfragen dich und deine Moral in den Kommentaren.",
      barvalue: 0,
      type: ActionType.POPUP,
      nextStep:173
    }
  ],


  [173,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "ELIZA: Das hättest du nicht tun sollen.",
      type: ActionType.POPUP,
      nextStep: 174
    }
  ],

  [174,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "ELIZA: Ich übernehme besser von hier an. Sowieso ist dein Channel mittlerweile zu groß, als dass du dich um solche Kleinigkeiten kümmern solltest.",
      nextStep: 175,
      type: ActionType.ACTION
    }
  ],


  [175,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "ELIZA: Ich übernehme besser von hier an. Sowieso ist dein Channel mittlerweile zu groß, als dass du dich um solche Kleinigkeiten kümmern solltest.",
      decision: [
        {
          id: 0,
          nextStep: 176,
          barValue: 10,
          text: "Das ist doch keine Kleinigkeit. Mein Image steht immerhin auf dem Spiel!"
        },
        {
          id: 1,
          nextStep: 177,
          barValue: -10,
          text: " Auf so eine Meinung gebe ich nichts, aber wieso finde ich meine Freundin nicht mehr in meinen Chats?"
        }
      ]
    }
  ],

  [176,
    {
      image: "../../uMakeItGran/assets/pic/fi/bangladesh.png",
      text: "ELIZA: Du hast gewusst auf was du dich einlässt und überhaupt gehört das zum Leben eines Influencers dazu.",
      nextStep: 177,
      type: ActionType.ACTION
    }
  ],
  [177,
    {
      image: "../../uMakeItGran/assets/pic/fi/rando.png",
      text: "Clara: Wieso finde ich meine beste Freundin Luisa nicht mehr in meinen Chats?",
      nextStep: 178,
      type: ActionType.ACTION
    }
  ],

  [178,
    {
      image: "../../uMakeItGran/assets/pic/fi/rando.png",
      text: "ELIZA: Darum habe ich mich in deiner Abwesenheit ebenfalls gekümmert. Diese Person tut dir und deiner Karriere einfach nicht gut. Ich habe sie blockiert. Du solltest sie vergessen.",
      nextStep: 179,
      type: ActionType.ACTION
    }
  ],



  [179,
    {
      image: "../../uMakeItGran/assets/pic/fi/rando.png",
      text: "ELIZA: Darum habe ich mich in deiner Abwesenheit ebenfalls gekümmert. Diese Person tut dir und deiner Karriere einfach nicht gut. Ich habe sie blockiert. Du solltest sie vergessen.",
      decision: [
        {
          id: 0,
          nextStep: 180,
          barValue: -10,
          text: "Wieso machst du so etwas?"
        },
        {
          id: 1,
          nextStep: 181,
          barValue: 10,
                    text: "Vielleicht hast du Recht."
        }
      ]
    }
  ],

  [180,
    {
      image: "../../uMakeItGran/assets/pic/fi/rando.png",
      text: "ELIZA: Ich mache das für dich. Du kannst niemanden gebrauchen, der dich von deinen eigentlichen Zielen auf dieser Plattform ablenkt.",
      nextStep: 183,
      type: ActionType.ACTION
    }
  ],
  [181,
    {
      image: "../../uMakeItGran/assets/pic/fi/rando.png",
      text: "ELIZA: Natürlich habe ich Recht. Du solltest dich hinlegen. Wie du weißt ist morgen ein großer Tag, dein GEBURTSTAG.",
      nextStep: 186,
      type: ActionType.ACTION
    }
  ],
  [183,
    {
      image: "../../uMakeItGran/assets/pic/fi/rando.png",
      text: "Clara: Wenn du meinst.",
      nextStep: 185,
      type: ActionType.ACTION
    }
  ],

  [185,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Du solltest dich hinlegen. Wie du weißt ist morgen ein großer Tag, dein GEBURTSTAG.",
      nextStep: 186,
      type: ActionType.ACTION
    }
  ],



  [186,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "",
      nextStep: 187,
      type: ActionType.ACTION
    }
  ],




  [187,
    {
      image: "../../uMakeItGran/assets/pic/desktop.png",
      text: "Dein Geburtstag.",
      type: ActionType.POPUP,
      nextStep: 188
    }
  ],


  [188,
    {
      image: "../../uMakeItGran/assets/pic/final/Bedroom.png",
      text: "ELIZA: Guten Morgen! Alles steht für dich bereit. Willst du dich langsam auf den Weg zu deiner Geburtstagsfeier machen? Ach ja und natürlich alles Gute!",
      nextStep: 189,
      type: ActionType.ACTION
    }
  ],



  [189,
    {
      image: "../../uMakeItGran/assets/pic/final/doorclosed.png",
      text: "CLARA: Okay.",
      nextStep: 190,
      type: ActionType.ACTION
    }
  ],
  [190,
    {
      image: "../../uMakeItGran/assets/pic/final/dooropen.png",
      text: "",
      nextStep: 191,
      type: ActionType.ACTION
    }
  ],





  [191,
    {
      image: "../../uMakeItGran/assets/pic/final/Party.png",
      text: "Du begibst dich in einen Raum voller Menschen. Alle gratulieren dir zu deinem GEBURTSTAG, aber du kennst niemanden persönlich. Es sind alles nur andere Influencer und Fans, die etwas von dir wollen oder ihre Kamera auf dich richten. Du nimmst dein Handy in die Hand, gehst etwas abseits und öffnest den Chat mit ELIZA.",
      type: ActionType.POPUP,
      nextStep: 195
    }
  ],

  [195,
    {
      image: "../../uMakeItGran/assets/pic/final/Party.png",
      text: "",
      nextStep: 196,
      type: ActionType.ACTION
    }
  ],
  [196,
    {
      image: "../../uMakeItGran/assets/pic/final/Parttxy.png",
      text: "",
      nextStep: 200,
      type: ActionType.ACTION
    }
  ],
  [200,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Eliza/11.png",
      text: "",
      nextStep: 201,
      type: ActionType.ACTION
    }
  ],
  [201,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Eliza/12.png",
      text: "",
      nextStep: 202,
      type: ActionType.ACTION
    }
  ],
  [202,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Eliza/12.png",
      text: "",
      nextStep: 203,
      type: ActionType.ACTION
    }
  ],
  [203,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Eliza/13.png",
      text: "",
      nextStep: 204,
      type: ActionType.ACTION
    }
  ],


  [204,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Eliza/14.png",
      text: "",
      nextStep: 205,
      type: ActionType.ACTION
    }
  ],
  [205,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Eliza/15.png",
      text: "",
      nextStep: 206,
      type: ActionType.ACTION
    }
  ],
  [206,
    {
      image: "../../uMakeItGran/assets/pic/final/Chats/Eliza/16.png",
      text: "",
      nextStep: 1000,
      type: ActionType.ACTION
    }
  ],

])