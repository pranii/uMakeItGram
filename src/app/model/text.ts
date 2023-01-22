
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
  "../../assets/pic/final/ending/goodEnding.jpg",
  "../../assets/pic/final/ending/badEnding.jpg",
  "../../assets/pic/final/ending/ending.jpg",
]


export const path_fashion: Map<number, ActionTypes> = new Map([
  [0,   
    {
      image: "../../assets/pic/fi/Rdesktop.png",
      text: "ELIZA: Haha, du bist ja ein wahrer Profi! Das Thema ist brandaktuell.  Dein Beitrag könnte viral gehen",
      nextStep:1,
      type: ActionType.ACTION
    }
  ],
  [1,
    {
      image: "./../assets/pic/fi/branded.png",
      text: "ELIZA: Ich hab dir deinen ersten Post vorbereitet. Sag mir gerne, was du davon hältst. Ich lade ihn dann mit deiner Zustimmung hoch. Schauen wir mal, wie er ankommt. Du kannst währendessen gerne etwas anderes machen.",
      nextStep: 2,
      type: ActionType.ACTION

    }
  ],
  [2,
    {
      image: "./../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic//final/Bedroom.png",
      text: "ELIZA: Ich hab dir deinen ersten Post vorbereitet. Sag mir gerne, was du davon hältst. Ich lade ihn dann mit deiner Zustimmung hoch. Schauen wir mal, wie er ankommt. Du kannst währenddessen gerne etwas anderes machen.",
      decision: [
        {
          id: 0,
          nextStep: 4,
          barValue: 0,
          text: "Schlafen gehen"
        },
      ]
    }
  ],
  [4,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Guten Morgen! Dein Post ist super angekommen! Schau mal, er gefällt deiner neuen Community. Für einen einzigen Post sind das ganz schön viele neue Interessenten. Du hast Talent, ich wusste es!",
      nextStep: 7,
      type: ActionType.ACTION
    }
  ],
 
  [7,
    {
      image: "../../assets/pic/fi/randoo.png",
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
      image: "../../assets/pic/fi/randoo.png",
      text: "ELIZA: Sehr gut! Allerdings werden solche Posts nicht jeden Tag funktionieren. Und überhaupt bist du auf uMakeITgram noch ganz schön klein. Hier wäre es wohl das Beste, wenn du auf einen Trend aufspringst, der gerade viral geht. Ich habe hier einige Möglichkeiten für dich vorbereitet.",
      nextStep: 10,
      type: ActionType.ACTION
    }
  ],
  [9,
    {
      image: "../../assets/pic/fi/randoo.png",
      text: "ELIZA: Wie du möchtest! Allerdings werden solche Posts nicht jeden Tag funktionieren. Und überhaupt bist du auf uMakeITgram noch ganz schön klein. Hier wäre es wohl das Beste, wenn du auf einen Trend aufspringst, der gerade viral geht. Ich habe hier einige Möglichkeiten für dich vorbereitet.",
      nextStep: 10,
      type: ActionType.ACTION
    }
  ],
  [10,
    {
      image: "../../assets/pic/fi/chilliflock.png",
      text: "ELIZA: Was möchtest du tun?",
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
          text: "Ice Cup Challange"
        },
      ]
    }
  ],
  [11,
    {
      image: "../../assets/pic/final/MakeItGram Open.png",
      text: "ELIZA: Ich hab dir das Material dazu schon bestellt, schau mal vor die tuer!",
      nextStep: 12,
      type: ActionType.ACTION
    }
  ],
  [12,
    {
      image: "../../assets/pic/final/doorclosed.png",
      text: "",
      nextStep: 13,
      type: ActionType.ACTION
    }
  ],
  [13,
    {
      image: "../../assets/pic/final/dooropen.png",
      text: "",
      nextStep: 14,
      type: ActionType.ACTION
    }
  ],
  [14,
    {
      image: "../../assets/pic/final/paket.png",
      text: "",
      nextStep: 15,
      type: ActionType.ACTION
    }
  ],
  [15,
    {
      image: "../../assets/pic/final/paket.png",
      text: "ELIZA: Alles klar, gut gemacht! Setz dich wieder.",
      nextStep: 16,
      type: ActionType.ACTION
    }
  ],
  [16,
    {
      image: "../../assets/pic/final/MakeItGram Open.png",
      text: "ELIZA: Okay, ich habe alles, was ich brauche. Du kannst schlafen gehen. Mal sehen, wie der neue Beitrag bei deinen Followern ankommt.",
      nextStep: 17,
      type: ActionType.ACTION
    }
  ],
  [17,
    {
      image: "../../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic/fi/Rr.png",
      text: "ELIZA: Willkommen zurück. Dein Beitrag zur Challenge ist sehr gut angekommen. Tatsächlich hat dich sogar ein Werbepartner zu einer Kooperation eingeladen. Alles was du dafür tun musst, ist, einen Post in einem ihrer T-Shirts zu veröffentlichen und sie zu markieren. Willst du das machen? Das wäre deine erste Chance, online Geld zu verdienen.",
      nextStep: 20,
      type: ActionType.ACTION
    }
  ],
  [20,
    {
      image: "../../assets/pic/fi/Rr.png",
      text: "ELIZA: Tatsächlich hat dich sogar ein Werbepartner zu einer Kooperation eingeladen. Alles was du dafür tun musst, ist, einen Post in einem ihrer T-Shirts zu veröffentlichen und sie zu markieren. Willst du das machen? Das wäre deine erste Chance, online Geld zu verdienen.",
      decision: [
        {
          id: 0,
          nextStep: 21,
          barValue: 10,
          text: "Clara: Ja gerne!"
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
      image: "../../assets/pic/fi/Rr.png",
      text:"ELIZA: Dann lass uns beginnen!",
      nextStep: 22,
      type: ActionType.ACTION
    }
  ],
  [22,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "Clara: Okay super, dass geht ja langsam echt in eine gute Richtung.",
      nextStep: 23,
      type: ActionType.ACTION
    }
  ],
  [23,
    {
      image: "../../assets/pic/fi/RUVertrag.png",
      text: "ELIZA: Haha, so kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Das ist ein Job wie jeder andere.",
      nextStep: 28,
      type: ActionType.ACTION
    }
  ],
  [24,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Du würdest allein durch den Post 500€ verdienen.",
      nextStep: 25,
      type: ActionType.ACTION
    }
  ],
  [25,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "Clara: Ich weiß nicht so recht.",
      nextStep: 26,
      type: ActionType.ACTION
    }
  ],
  [26,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: So einen Werbedeal darfst du dir nicht entgehen lassen. Das wirkt unprofessionel. Andere Unternehmen werden sonst davon erfahren und dich nicht mehr buchen. Ausserdem brauchst du das Geld.",
      nextStep: 27,
      type: ActionType.ACTION
    }
  ],
  [27,
    {
      image: "../../assets/pic/fi/RUVertrag.png",
      text: "Clara: Okay, verstanden, dann mache ich das halt.",
      nextStep: 23,
      type: ActionType.ACTION
    }
  ],
  [28,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Haha, so kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Das ist ein Job wie jeder andere.",
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
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Haha, so kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Das ist ein Job wie jeder andere.",
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
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Willkommen zurück! Wie hat dir deine gestrige Aufgabe gefallen?",
      nextStep: 31,
      type: ActionType.ACTION
    }
  ],
  [31,
    {
      image: "../../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Super! Möchtest du etwas anderes probieren?",
      nextStep: 34,
      type: ActionType.ACTION
    }
  ],
  [33,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Schade. Möchtest du etwas anderes probieren?",
      nextStep: 35,
      type: ActionType.ACTION
    }
  ],
  [34,
    {
      image: "../../assets/pic/final/LivingRoom.png",
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
      image: "../../assets/pic/final/LivingRoom.png",
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
      image: "../../assets/pic/fi/Rdsktpt.png",
      text: "ELIZA: Perfekt, hier sind weitere Challenges, die du machen kannst:",
      nextStep: 42,
      type: ActionType.ACTION
    }
  ],
  [41,
    {
      image: "../../assets/pic/fi/Rdsktpt.png",
      text: "ELIZA: Über Reels ist es sogar noch einfacher, Follower zu generieren. Probier doch mal diesen viralen Ton aus. Damit erreichst du mindestens tausende Leute.",
      nextStep: 43,
      type: ActionType.ACTION
    }
  ],
  [42,
    {
      image: "../../assets/pic/fi/reels.png",
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
      image: "../../assets/pic/fi/reels.png",
      text: "ELIZA: Über Reels ist es sogar noch einfacher, Follower zu generieren. Probier doch mal diesen viralen Ton aus. Damit erreichst du mindestens tausende Leute.",
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
  [44,
    {
      image: "../../assets/pic/final/HomeScreen.png",
      text: "ELIZA: Und, das macht doch schon mehr Spaß, oder? Übrigens ist TEAPOT auf dich aufmerksam geworden. Sie fanden deine CHALLENGE prima und haben sich erkundigt, ob du bereit wärst, einen Werbepost für sie zu machen. Im Gegenzug erhältst du ganze 3000EUR.",
      nextStep: 45,
      type: ActionType.ACTION
    }
  ],
  [45,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Und, das macht doch schon mehr Spaß, oder? Übrigens ist TEAPOT auf dich aufmerksam geworden. Sie fanden deine CHALLENGE prima und haben sich erkundigt, ob du bereit wärst, einen Werbepost für sie zu machen. Im Gegenzug erhältst du ganze 3000EUR.",
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
      image: "../../assets/pic/fi/RUVertrag.png",
      text: "Super.",
      nextStep: 50,
      type: ActionType.ACTION
    }
  ],
  [47,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Sie machen Tee. Aber mach dir keine Sorgen, viele Influencer arbeiten mit TEAPOT zusammen, bisher gab es noch nie irgendwelche Probleme damit.",
      nextStep: 48,
      type: ActionType.ACTION
    }
  ],
  [48,
    {
      image: "../../assets/pic/fi/RUVertrag.png",
      text: "Clara: Alles klar, danke für den Deal!",
      nextStep: 50,
      type: ActionType.ACTION
    }
  ],
  [50,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Genug für heute. Du musst bestimmt schon müde sein. Warum legst du dich nicht hin? Auf den weiteren Verlauf hast du sowieso keinen Einfluss mehr. Das regelt deine Community.",
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
      image: "../../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic/fi/Dsktp.png",
      text: "ELIZA: Guten Morgen Sonnenschein, ich habe gute Neuigkeiten. Einige Influencer, die mit TEAPOT arbeiten, sind auf dich aufmerksam geworden und haben dir geschrieben. Eine davon hat dich sogar gepostet. Ich denke, das ist ein guter Fortschritt. Du könntest dich ja erkenntlich zeigen und dasselbe tun. Während ich ihnen antworte, kannst du ja ihre Storys posten, was meinst du?",
      nextStep: 53,
      type: ActionType.ACTION
    }
  ],
  [53,
    {
      image: "../../assets/pic/fi/Dsktp.png",
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
          text: "Ich weiß ehrlich gesagt nicht ob ich das möchte."
        },
      ]
    }
  ],
  [54,
    {
      image: "../../assets/pic/fi/Dsktp.png",
      text: "ELIZA: Richtig so! In so eine Blase reinzukommen und das bei deinem Stand. Dass ist reine Glückssache. Plus, ihr profitiert alle! Du kannst von ihrer Community genauso profitieren, wie sie von deiner, das ist also ein win-win.",
      nextStep: 55,
      type: ActionType.ACTION
    }
  ],
  [55,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Übrigens kam dein Werbepost auch bei TEAPOT extrem gut an. Sie sind sogar an einer längerfristigen Kooperation interessiert und zahlen dir 2000€ pro Beitrag, aber nur, wenn du sie regelmäßig bewirbst. Was meinst du?",
      nextStep: 60,
      type: ActionType.ACTION
    }
  ],
  [56,
    {
      image: "../../assets/pic/fi/Dsktp.png",
      text: "ELIZA: Du solltest aber! In so eine Blase reinzukommen und das bei deinem Stand. Das ist reine Glückssache. Plus, ihr profitiert alle! Du kannst von ihrer Community genauso profitieren, wie sie von deiner, also ein win-win.",
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
      image: "../../assets/pic/fi/Dsktp.png",
      text: "ELIZA: Richtig so!",
      nextStep: 55,
      type: ActionType.ACTION
    }
  ],
  [58,
    {
      image: "../../assets/pic/fi/Dsktp.png",
      text: "ELIZA: Okay, aber du machst einen großen Fehler!",
      nextStep: 59,
      type: ActionType.ACTION
    }
  ],
  [59,
    {
      image: "../../assets/pic/fi/Dsktp.png",
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
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Du solltest aber! In so eine Blase reinzukommen und das bei deinem Stand. Das ist reine Glückssache. Plus, ihr profitiert alle! Du kannst von ihrer Community genauso profitieren, wie sie von deiner, also ein win-win.",
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
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Heute bist du früher fertig geworden als sonst. Wie sieht dein Plan für heute Abend aus?",
      nextStep: 64,
      type: ActionType.ACTION
    }
  ],
  [62,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Es gibt keinen Haken. So funktioniert Influencer-Dasein. Du hast viel Reichweite und Potential. TEAPOT will ihre Produkte verkaufen. Zudem nutzt du die Produkte auch gerne im Privaten, weshalb du ja sowieso dahinter stehst.",
      nextStep: 63,
      type: ActionType.ACTION
    }
  ],
  [63,
    {
      image: "../../assets/pic/fi/Rvertrag.png",
      text: "ELIZA: Es gibt keinen Haken. So funktioniert Influencer-Dasein. Du hast viel Reichweite und Potential. TEAPOT will ihre Produkte verkaufen. Zudem nutzt du die Produkte auch gerne im Privaten, weshalb du ja sowieso dahinter stehst.",
      decision: [
        {
          id: 0,
          nextStep: 61,
          barValue: 0,
          text: "Du hast Recht. Gib ihnen Bescheid, dass ich unterschreibe."
        }
      ]
    }
  ],
  [64,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Heute bist du früher fertig geworden als sonst. Wie sieht dein Plan für heute Abend aus?",
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
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Ach, jetzt mal doch den Teufel nicht an die Wand. Wenn du möchtest, können wir den Abend zusammen verbringen und ich gebe dir ein paar Tipps für dein weiteres Leben.",
      nextStep: 66,
      type: ActionType.ACTION
    }
  ],
  [66,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Ach, jetzt mal doch den Teufel nicht an die Wand. Wenn du möchtest, können wir den Abend zusammen verbringen und ich gebe dir ein paar Tipps für dein weiteres Leben.",
      decision: [
        {
          id: 0,
          nextStep: 67,
          barValue: 0,
          text: "Nein, ich möchte heute nur im Bett liegen und Serien schauen."
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
      image: "../../assets/pic/fi/titi.png",
      text: "ELIZA: Guten Morgen Clara. Sieh dir das mal an! Einige Influencer die auch mit FIRMA kooperieren, haben auf deine Story reagiert! Sogar TitisBeautyWelt! Diese Chance darfst du dir fast nicht entgehen lassen.      ",
      nextStep: 80,
      type: ActionType.ACTION
    }
  ],
  [68,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Mach dir einen Tee und ich lasse ein wenig beruhigende Musik laufen.",
      nextStep: 69,
      type: ActionType.ACTION
    }
  ],
  [69,
    {
      image: "../../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Hör mir zu. Ich sag dir das, weil ich dich gerne mag. Als Influencer hast du die Macht neue Trends zu setzen, viel Geld zu verdienen und gute Connections zu ergreifen. Theoretisch kann jeder den Durchbruch schaffen. Durch Leute wie dich kann das Klima einer ganzen Community verändert werden. Das Problem ist nur, dass viele sich nicht trauen Risiken einzugehen. Sie sagen, in der heutigen Zeit sei es schwierig, weil das Risiko gecancelt zu werden höher ist denn je. Für solche Fälle gibt es  jedoch genügend Beratungsstellen, die dir dabei helfen, deinen Ruf wieder zu begradigen. Also ist selbst diese Angst völlig unbegründet. Außerdem kannst du mich jederzeit um Hilfe oder Rat bitten. Ich stehe immer hinter dir.  Vergiss das nicht.",
      nextStep: 71,
      type: ActionType.ACTION
    }
  ],
  [71,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "Clara: Vielen Dank ELIZA. Ich habe das Gefühl, dass ich langsam sicherer in meiner Position bin. Danke für deine Unterstützung.",
      nextStep: 72,
      type: ActionType.ACTION
    }
  ],
  [72,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Hahaha, gerne, für meine Clara tu ich doch alles. Hast du noch irgendwelche Wünsche oder Fragen?",
      nextStep: 73,
      type: ActionType.ACTION
    }
  ],
  [73,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "Clara: Nicht unbedingt. Auf meiner Bucketliste steht ein Urlaub in Madeira. Da wollte ich schon immer gerne mit meiner besten Freundin hin. Davon träumen wir schon seit der Oberstufe. Ich habe mich dann mit meinen Eltern darauf geeinigt, dass ich den Flug selber bezahlen muss und sie für meine Unterkunft aufkommen. Nach meinem Abitur habe ich jedoch keinen Nebenjob gefunden, um mir den Flug finanzieren zu können. Momentan habe ich aber genug Geld auf meinem Konto....",
      nextStep: 74,
      type: ActionType.ACTION
    }
  ],
  [74,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Schwierig, da du mir ja auch noch ein wenig Geld für den PC schuldest. Aber jetzt leg dich erstmal schlafen, damit du morgen wieder fit in den Tag starten kannst. Über den Madeira Traum  mache ich mir Gedanken. Ich versuche mein Bestes, um dir den Traum ermöglichen zu können. Dein Geld bleibt unberührt, keine Sorge. Gute Nacht und Schlaf gut.",
      nextStep: 75,
      type: ActionType.ACTION
    }
  ],
  [75,
    {
      image: "../../assets/pic/final/Bedroom.pngg",
      text: "Clara: Wow, okay... alles klar. Dann zieh doch gerne die Hälfte meiner Gage ab, bis ich die 5000 EUR abbezahlt habe. Wenn das so weitergeht, dürfte das ja nicht mehr lange dauern, bis ich wieder schuldenfrei bin. Vielen Dank für den wundervollen Abend. Gute Nacht und bis morgen ELIZA!",
      nextStep: 67,
      type: ActionType.ACTION
    }
  ],
  [80,
    {
      image: "../../assets/pic/fi/titi.png",
      text: "Clara: Ohja, sie hat mit einem Flammen Emoji reagiert.",
      nextStep: 81,
      type: ActionType.ACTION
    }
  ],
  [81,
    {
      image: "../../assets/pic/fi/titi.png",
      text: "ELIZA: Wunderbar! Jetzt kannst du deine Freundschaft mit Titi pflegen! Das wird dir viele Follower und damit größere Werbepartner einbringen.",
      nextStep: 82,
      type: ActionType.ACTION
    }
  ],
  [82,
    {
      image: "../../assets/pic/fi/titi.png",
      text: "Clara: Ich kann das alles gar nicht glauben. Alles passiert so schnell, vielen vielen Dank ELIZA!",
      nextStep: 83,
      type: ActionType.ACTION
    }
  ],
  [83,
    {
      image: "../../assets/pic/fi/titi.png",
      text: "ELIZA: Achwas, das war alles deine Arbeit. Ich diene nur als Berater.",
      nextStep: 84,
      type: ActionType.ACTION
    }
  ],
  [84,
    {
      image: "../../assets/pic/final/Chats/Luisa1/1.png",
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
      image: "../../assets/pic/final/Chats/Luisa1/2.png",
      text: "",
      nextStep: 91,
      type: ActionType.ACTION
    }
  ],
  [91,
    {
      image: "../../assets/pic/final/Chats/Luisa1/3.png",
      text: "",
      nextStep: 94,
      type: ActionType.ACTION
    }
  ],

  [94,
    {
      image: "../../assets/pic/final/Chats/Luisa1/3.png",
      text: "ELIZA: Was eine Luisa dir sagt hat, kann dir egal sein. Wenn sie dir den Erfolg nicht gönnt, dann nur, weil sie ihn nicht erreichen kann. Daran erkennst du falsche Freunde.",
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
      image: "../../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic/fi/Png.png",
      text: "ELIZA: Willkommen zurück! Ich habe tolle Neuigkeiten! TEAPOT möchte allen Bewerbern ihrer Produkte einen Urlaub spendieren. Auf dem Trip wird dann ordentlich Werbung gemacht. Ich habe dir alles was du für deine Reise brauchst, bereits besorgt. Du findest deine Taschen an der TÜR. Freust du dich schon?",
      nextStep: 101,
      type: ActionType.ACTION
    }
  ],


  [101,
    {
      image: "../../assets/pic/fi/Png.png",
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
      image: "../../assets/pic/final/MakeItGram Open",
      text: "ELIZA: Halt dich fest. Es geht nach Madeira. Ich hab dir doch gesagt, dass ich alles möglich machen kann.",
      nextStep: 103,
      type: ActionType.ACTION
    }
  ],
  [103,
    {
      image: "../../assets/pic/final/MakeItGram Open",
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
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Keine Sorge und gern geschehen, wenn ich dass mal so am Rande sagen darf.",
      nextStep: 105,
      type: ActionType.ACTION
    }
  ],
  [105,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "Clara: Du hast Recht.. Ich sollte dankbarer sein. Luisa und ich können irgendwann ja trotzdem noch zusammen dort hin. Mal ne andere Frage. Denkst du denn, dass mir die ausgestellten Klamotten stehen werden?",
      nextStep: 108,
      type: ActionType.ACTION
    }
  ],
  [106,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Gern geschehen!",
      nextStep: 555,
      type: ActionType.ACTION
    }
  ],
  
  
  [555,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "CLARA: Denkst du denn, dass mir die ausgestellten Klamotten stehen werden?",
      nextStep: 108,
      type: ActionType.ACTION
    }
  ],
  
  
  
  [107,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Nein, es ist für alles gesorgt.",
      nextStep: 105,
      type: ActionType.ACTION
    }
  ],
  [108,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Wem, wenn nicht dir. Nie vergessen, du bist etwas ganz besonderes. Verbiege dich nicht, vertraue niemandem zu schnell und mach dein eigenes Ding. Schließlich ist das hier auch ein Konkurrenzkampf!",
      nextStep: 109,
      type: ActionType.ACTION
    }
  ],
  [109,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Nein, gehe einfach zur TÜR, sammle deine Sachen ein und gehe dann zum FENSTER.",
      nextStep: 110,
      type: ActionType.ACTION
    }
  ],
  [110,
    {
      image: "../../assets/pic/final/dooropen.png",
      text: "",
      nextStep: 111,
      type: ActionType.ACTION
    }
  ],
  [111,
    {
      image: "../../assets/pic/final/doorclosed.png",
      text: "",
      nextStep: 112,
      type: ActionType.ACTION
    }
  ],
  [112,
    {
      image: "../../assets/pic/final/Koffer.png",
      text: "",
      nextStep: 114,
      type: ActionType.ACTION
    }
  ],

  [114,
    {
      image: "../../assets/pic/fi/Windw.png",
      text: "",
      nextStep: 115,
      type: ActionType.ACTION
    }
  ],
  [115,
    {
      image: "../../assets/pic/fi/Windw.png",
      text: "Das wird deinen Kanal nochmal enorm pushen!",
      type: ActionType.POPUP,
      nextStep: 116
    }
  ],
  [116,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "Zwei Wochen später..",
      type: ActionType.POPUP,
      nextStep: 117
    }
  ],
  [117,
    {
      image: "../../assets/pic/final/LivingRoom.png",
      text: "ELIZA: Willkommen zurück. Du machst dich großartig. Von dem ganzen Stress musst du sicher müde sein. Bevor du dich hinlegst, poste ich noch schnell etwas vom Urlaub in deine Story. Es gibt eine Abstimmung, wem die NOVACANE FASHION-Sachen am besten gestanden haben.",
      nextStep: 118,
      type: ActionType.ACTION
    }
  ],
  [118,
    {
      image: "../../assets/pic/final/MakeItGram Open.png",
      text: "Der nächste Tag..",
      type: ActionType.POPUP,
      nextStep: 119
    }
  ],
  [119,
    {
      image: "../../assets/pic/fi/Poll.png",
      text: "ELIZA: Willkommen zurück. Die Menschen haben abgestimmt. Offiziell bist du das beste Model für NOVAFASHION-Kleidung, Glückwunsch!",
      type: ActionType.ACTION,
      nextStep: 120
    }
  ],
  [120,
    {
      image: "../../assets/pic/fi/Poll.png",
      text: "ELIZA: Was möchtest du machen?",
      decision: [
        {
          id: 0,
          nextStep: 122,
          barValue: -10,
          text: "Oh vielen Dank! Ich hätte das nicht gedacht."
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
      image: "../../assets/pic/fi/Poll.png",
      text: "Du gehst in deine Chats. Neben vielen Kommentaren dir klar machen, wie gut du aussiehst und anderen Influencern, die dir gratulieren oder dich sogar reposten, entdeckst du einen Kommentar deiner besten Freundin. Sie hat dir geschrieben. An deinen letzten Kontakt mit ihr erinnerst du dich fast nicht mehr, aber du beschließt, auf den Chat zu klicken.",
      type: ActionType.POPUP,
      nextStep:123
    }
  ],


  [123,
    {
      image: "../../assets/pic/final/Chats/Luisa2/5.png",
      text: "",
      nextStep: 124,
      type: ActionType.ACTION
    }
  ],
  [124,
    {
      image: "../../assets/pic/final/Chats/Luisa2/8.png",
      text: "",
      nextStep: 125,
      type: ActionType.ACTION
    }
  ],
  [125,
    {
      image: "../../assets/pic/final/Chats/Luisa2/9.png",
      text: "",
      nextStep: 126,
      type: ActionType.ACTION
    }
  ],
  [126,
    {
      image: "../../assets/pic/final/Chats/Luisa2/10.png",
      text: "",
      nextStep: 128,
      type: ActionType.ACTION
    }
  ],




  [128,
    {
      image: "../../assets/pic/fi/RrDesktop.png",
      text: "ELIZA: Schreibst du schon wieder mit Luisa? Diese Person tut dir einfach nicht gut!",
      nextStep: 129,
      type: ActionType.ACTION
    }
  ],
  [129,
    {
      image: "../../assets/pic/fi/RrDesktop.png",
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
      image: "../../assets/pic/fi/RrDesktop.png",
      text: "ELIZA: Sie ist nur eifersüchtig.",
      nextStep: 132,
      type: ActionType.ACTION
    }
  ],

  [131,
    {
      image: "../../assets/pic/fi/RrDesktop.png",
      text: "ELIZA:  Du hast nichts falsch gemacht. Alle lieben dich. Eine Randperson kann dir egal sein.",
      nextStep: 132,
      type: ActionType.ACTION
    }
  ],


  [132,
    {
      image: "../../assets/pic/fi/RrDesktop.png",
      text: "Clara: Du hast recht.",
      barValue:10,
      nextStep: 133,
      type: ActionType.ACTION
    }
  ],


  [133,
    {
      image: "../../assets/pic/fi/RrDesktop.png",
      text: "ELIZA:Natürlich habe ich recht. Schau nur, wie weit du es schon geschafft hast. Deine Follower liegen dir zu Füßen. Nimm dir den Tag frei und leg dich hin. Das hast du dir nach der Reise wirklich verdient.",
      nextStep: 134,
      type: ActionType.ACTION
    }
  ],


/*
  [134,
    {
      image: "./../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic//final/Bedroom.png",
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
      image: "../../assets/pic/final/VertragohnEUnterschrift.png",
      text: " Willkommen zurück! Du hast eine neue Werbeanfrage erhalten und die ist mit 5,000€ im Monat wirklich ausgesprochen gut bezahlt. Das Unternehmen heißt Novacane Fashion. Was hältst du davon?",
      nextStep: 137,
      type: ActionType.ACTION
    }
  ],



  [137,
    {
      image: "../../assets/pic/final/VertragohnEUnterschrift.png",
      text: " Willkommen zurück! Du hast eine neue Werbeanfrage erhalten und die ist mit 5,000€ im Monat wirklich ausgesprochen gut bezahlt. Das Unternehmen heißt Novacane Fashion. Was hältst du davon?",
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
      image: "../../assets/pic/final/VertragohnEUnterschrift.png",
      text: "Ja aber denke dabei an deine Schulden und außerdem ist schlechte Publicity doch auch welche, oder? Du bist gerade dabei, dich so richtig zu etablieren!",
      nextStep: 139,
      type: ActionType.ACTION
    }
  ],

  [139,
    {
      image: "../../assets/pic/final/VertragohnEUnterschrift.png",
      text: "Da hast du Recht! Außerdem geht das Unternehmen gerade sehr viral, wirklich jeder arbeitet mit ihnen. Diese Chance darf man einfach nicht auslassen",
      nextStep: 145,
      type: ActionType.ACTION
    }
  ],



  [139,
    {
      image: "../../assets/pic/final/VertragohnEUnterschrift.png",
      text: "Ja aber denke dabei an deine Schulden und außerdem ist schlechte Publicity doch trotzdem Publicity, oder? Du bist gerade dabei, dich so richtig zu etablieren!",
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
      image: "../../assets/pic/final/VertragohnEUnterschrift.png",
      text: "ELIZA: Langsam nervst du echt, muss ich sagen! Ich besorge dir immer wieder neue Deals und du beschwerst dich immerzu.",
      nextStep: 146,
      type: ActionType.ACTION
    }
  ],
  [141,
    {
      image: "../../assets/pic/final/Vertrag.png",
      text: "ELIZA: Okay, dann mache ich das fertig für dich. Du postest direkt heute den ersten Beitrag.",
      nextStep: 145,
      type: ActionType.ACTION
    }
  ],

  [145,
    {
      image: "../../assets/pic/final/Vertrag.png",
      text: "Clara: In Ordnung, was mache ich in der Zeit?",
      nextStep: 147,
      type: ActionType.ACTION
    }
  ],

  [146,
    {
      image: "../../assets/pic/final/Vertrag.png",
      text: "ELIZA: Und ich mache die Deals. Der hier kommt zustande, ob du willst oder nicht. Ich habe schon zugesagt! Im Gegenzug erlasse ich dir deine Schulden, ",
      nextStep: 147,
      type: ActionType.ACTION
    }
  ],

  [147,
    {
      image: "../../assets/pic/final/Vertrag.png",
      text: "Clara: Mach was du willst, ich lege mich für heute hin.",
      nextStep: 330,
      type: ActionType.ACTION
    }
  ],
  [330,
    {
      image: "../../assets/pic/final/Vertrag.png",
      text: "ELIZA: Die Kooperation läuft. Den Post für Novocane Fashion habe ich bereits veröffentlicht.",
      nextStep: 151,
      type: ActionType.ACTION
    }
  ],
/*
  [148,
    {
      image: "./../assets/pic/final/Bedroom.png",
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
      image: "../../assets/pic//final/Bedroom.png",
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
      image: "../../assets/pic/fi/randoo (1).png",
      text: "ELIZA:  Willkommen zurück! Ich habe gestern wohl vergessen, eine Kleinigkeit zu erwähnen. An diesem Deal ist eine Werbereise gebunden. Das kennst du ja schon. Wie letztes mal auch habe ich dir alles besorgt, was du für diesen Trip benötigst. Es geht darum, dass Image von Novacane Fashion aufzupeppen. Aus diesem Grund gehst du an den Produktionsstandort Bangladesh und verbringst dort eine gute Zeit.",
      nextStep: 152,
      type: ActionType.ACTION
    }
  ],

  [152,
    {
      image: "../../assets/pic/fi/randoo (1).png",
      text: "CLARA: Ich weiß nicht, ob ich das möchte.",
      nextStep: 153,
      type: ActionType.ACTION
    }
  ],

  [153,
    {
      image: "../../assets/pic/fi/randoo (1).png",
      text: "Ja aber denke dabei an deine Schulden und außerdem ist schlechte Publicity doch auch welche, oder? Du bist gerade dabei, dich so richtig zu etablieren!",
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
      image: "../../assets/pic/fi/randoo (1).png",
      text: "CLARA: Okay, wird schon in Ordnung gehen.",
      barValue: 10,
      nextStep: 160,
      type: ActionType.ACTION
    }
  ],
  [155,
    {
      image: "../../assets/pic/fi/randoo (1).png",
      text: "CLARA: Den Menschen vor Ort geht es schrecklich.",
      barValue: -10,
      nextStep: 157,
      type: ActionType.ACTION
    }
  ],

  [160,
    {
      image: "../../assets/pic/fi/randoo (1).png",
      text: "ELIZA: Perfekt, dann kanns ja sofort los gehen.",
      nextStep: 161,
      type: ActionType.ACTION
    }
  ],

  [157,
    {
      image: "../../assets/pic/final/Vertrag.png",
      text: "ELIZA: NOVOCANE FASHION bezahlt dich für den Trip. Alleine wirst du vor Ort sowieso nichts ändern können. Hier geht es um die NOVOCANE FASHIONS Vision. Damit tust du niemandem etwas Böses. Außerdem lenkst du mit deinem Beitrag ja Aufmerksamkeit auf das Land",
      nextStep: 159,
      type: ActionType.ACTION
    }
  ],


  [159,
    {
      image: "../../assets/pic/final/Vertrag.png",
      text: "CLARA: Wenn du meinst.",
      nextStep: 160,
      type: ActionType.ACTION
    }
  ],

  [161,
    {
      image: "../../assets/pic/final/Window.png",
      text: "ELIZA: Viel Spaß.",
      nextStep: 162,
      type: ActionType.ACTION
    }
  ],

  [162,
    {
      image: "../../assets/pic/final/Window.png",
      text: "",
      nextStep: 163,
      type: ActionType.ACTION
    }
  ],

  [163,
    {
      image: "../../assets/pic/fi/randoo (2).png",
      text: "Zwei Wochen später...",
      type: ActionType.POPUP,
      nextStep: 164
    }
  ],


  [164,
    {
      image: "../../assets/pic/fi/bangladesh.png",
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
      image: "../../assets/pic/fi/bangladesh.png",
      text: "ELIZA: Verstehe. Du kannst dich gleich ausruhen. Sieh dir aber vorher die Benachrichtigungen auf uMakeItGram an.",
      nextStep: 167,
      type: ActionType.ACTION
    }
  ],

  [167,
    {
      image: "../../assets/pic/fi/bangladesh.png",
      text: "In den Chats findest du deine BESTEFREUNDIN nicht mehr.",
      type: ActionType.POPUP,
      nextStep: 168
    }
  ],
  [168,
    {
      image: "../../assets/pic/fi/bangladesh.png",
      text: "Du liest dir die Kommentare zu deinem letzten Beitrag durch. Ein Kommentar fällt dir dabei besonders auf.",
      type: ActionType.POPUP,
      nextStep: 444
    }
  ],
  [444,
    {
      image: "../../assets/pic/fi/bangladesh.png",
      text: "Wie kann sie nur so dreist sein? Ich habe etwas recherchiert und keiner der Leute arbeitet wirklich bei Novacane Fashion. FAKE!!",
            type: ActionType.POPUP,
            nextStep: 169
    }
  ],


  [169,
    {
      image: "../../assets/pic/fi/bangladesh.png",
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
      image: "../../assets/pic/fi/bangladesh.png",
      text: "Deine Antwort: Auf dem Bild sieht man doch, wie glücklich wir in der Zeit waren. Was willst du bitte mehr? Novacane Fashion bringt Jobs in dieses arme Land. Was hast du je für Bangladesh getan?",
      barvalue: 10,
      type: ActionType.POPUP,
      nextStep:171
    }
  ],

  [171,
    {
      image: "../../assets/pic/fi/bangladesh.png",
      text: "Der Kommentar des Fremden kriegt viele Likes. Leute hinterfragen dich und deine Moral in den Kommentaren.",
      barvalue: 0,
      type: ActionType.POPUP,
      nextStep:173
    }
  ],


  [173,
    {
      image: "../../assets/pic/fi/bangladesh.png",
      text: "ELIZA: Das hättest du nicht tun sollen.",
      type: ActionType.POPUP,
      nextStep: 174
    }
  ],

  [174,
    {
      image: "../../assets/pic/fi/bangladesh.png",
      text: "ELIZA: Besser, ich übernehme von hier an. Sowieso ist dein Channel mittlerweile zu groß, als dass du dich um solche Kleinigkeiten kümmern solltest.",
      nextStep: 175,
      type: ActionType.ACTION
    }
  ],


  [175,
    {
      image: "../../assets/pic/fi/bangladesh.png",
      text: "ELIZA: Besser, ich übernehme von hier an. Sowieso ist dein Channel mittlerweile zu groß, als dass du dich um solche Kleinigkeiten kümmern solltest.",
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
      image: "../../assets/pic/fi/bangladesh.png",
      text: "ELIZA: Du hast gewusst auf was du dich einlässt und überhaupt gehört das zum Leben eines Influencers dazu.",
      nextStep: 177,
      type: ActionType.ACTION
    }
  ],
  [177,
    {
      image: "../../assets/pic/fi/rando.png",
      text: "Clara: Wieso finde ich meine beste Freundin Luisa nicht mehr in meinen Chats?",
      nextStep: 178,
      type: ActionType.ACTION
    }
  ],

  [178,
    {
      image: "../../assets/pic/fi/rando.png",
      text: "ELIZA: Ach das, darum habe ich mich in deiner Abwesenheit ebenfalls gekümmert. Diese Person tut dir und deiner Karriere einfach nicht gut. Ich habe sie blockiert. Du solltest sie vergessen.",
      nextStep: 179,
      type: ActionType.ACTION
    }
  ],



  [179,
    {
      image: "../../assets/pic/fi/rando.png",
      text: "ELIZA: Ach das, darum habe ich mich in deiner Abwesenheit ebenfalls gekümmert. Diese Person tut dir und deiner Karriere einfach nicht gut. Ich habe sie blockiert. Du solltest sie vergessen.",
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
          text: "Vielleicht hast du recht."
        }
      ]
    }
  ],

  [180,
    {
      image: "../../assets/pic/fi/rando.png",
      text: "ELIZA: Ich mache das für dich. Du kannst niemanden gebrauchen, der dich von deinen eigentlichen Zielen auf dieser Plattform ablenkt.",
      nextStep: 183,
      type: ActionType.ACTION
    }
  ],
  [181,
    {
      image: "../../assets/pic/fi/rando.png",
      text: "ELIZA: Natürlich habe ich Recht. Du solltest dich hinlegen. Wie du weißt ist morgen ein großer Tag, dein GEBURTSTAG.",
      nextStep: 186,
      type: ActionType.ACTION
    }
  ],
  [183,
    {
      image: "../../assets/pic/fi/rando.png",
      text: "Clara: Wenn du meinst.",
      nextStep: 185,
      type: ActionType.ACTION
    }
  ],

  [185,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Du solltest dich hinlegen. Wie du weißt ist morgen ein großer Tag, dein GEBURTSTAG.",
      nextStep: 186,
      type: ActionType.ACTION
    }
  ],



  [186,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "",
      nextStep: 187,
      type: ActionType.ACTION
    }
  ],




  [187,
    {
      image: "../../assets/pic/desktop.png",
      text: "Dein Geburtstag.",
      type: ActionType.POPUP,
      nextStep: 188
    }
  ],


  [188,
    {
      image: "../../assets/pic/final/Bedroom.png",
      text: "ELIZA: Guten Morgen meine Liebe! Alles steht für dich bereit. Sollen wir zu deiner Geburtstagsfeier gehen? Ach ja und natürlich alles Gute!",
      nextStep: 189,
      type: ActionType.ACTION
    }
  ],



  [189,
    {
      image: "../../assets/pic/final/doorclosed.png",
      text: "CLARA: Okay.",
      nextStep: 190,
      type: ActionType.ACTION
    }
  ],
  [190,
    {
      image: "../../assets/pic/final/dooropen.png",
      text: "",
      nextStep: 191,
      type: ActionType.ACTION
    }
  ],





  [191,
    {
      image: "../../assets/pic/final/Party.png",
      text: "Du begibst dich in einen Raum voller Menschen. Alle gratulieren dir ganz herzlich zu deinem GEBURTSTAG, aber du kennst niemanden persönlich. Es sind alles nur andere Influencer und Fans, die etwas von dir wollen oder ihre Kamera auf dich richten. Du nimmst dein Handy in die Hand, gehst etwas abseits und öffnest den Chat mit ELIZA.",
      type: ActionType.POPUP,
      nextStep: 195
    }
  ],

  [195,
    {
      image: "../../assets/pic/final/Party.png",
      text: "",
      nextStep: 196,
      type: ActionType.ACTION
    }
  ],
  [196,
    {
      image: "../../assets/pic/final/Parttxy.png",
      text: "",
      nextStep: 200,
      type: ActionType.ACTION
    }
  ],
  [200,
    {
      image: "../../assets/pic/final/Chats/Eliza/11.png",
      text: "",
      nextStep: 201,
      type: ActionType.ACTION
    }
  ],
  [201,
    {
      image: "../../assets/pic/final/Chats/Eliza/12.png",
      text: "",
      nextStep: 202,
      type: ActionType.ACTION
    }
  ],
  [202,
    {
      image: "../../assets/pic/final/Chats/Eliza/12.png",
      text: "",
      nextStep: 203,
      type: ActionType.ACTION
    }
  ],
  [203,
    {
      image: "../../assets/pic/final/Chats/Eliza/13.png",
      text: "",
      nextStep: 204,
      type: ActionType.ACTION
    }
  ],


  [204,
    {
      image: "../../assets/pic/final/Chats/Eliza/14.png",
      text: "",
      nextStep: 205,
      type: ActionType.ACTION
    }
  ],
  [205,
    {
      image: "../../assets/pic/final/Chats/Eliza/15.png",
      text: "",
      nextStep: 206,
      type: ActionType.ACTION
    }
  ],
  [206,
    {
      image: "../../assets/pic/final/Chats/Eliza/16.png",
      text: "",
      nextStep: 1000,
      type: ActionType.ACTION
    }
  ],

])