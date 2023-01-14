
export type Action = {
  image: string;
  text: string;
}

export type ActionDecision = Action & {
  decision: Decision[];
}

export type ActionPopUp = Action & {
  type: ActionType.POPUP
}

export type ActionTypes = Action | ActionDecision | ActionPopUp;

enum ActionType {
  POPUP = "popup"
}


type Decision = {
  id: number;
  nextStep: number;
  barValue: number;
  text: string;
}

export type ActionText = Action & {
  nextStep: number;
}

export function isActionText(action: ActionTypes): action is ActionText {
  return (action as ActionText).nextStep !== undefined;
}
export function isActionDecision(action: ActionTypes): action is ActionDecision {
  return (action as ActionDecision).decision !== undefined;
}
export function isActionPopup(action: ActionTypes): action is ActionPopUp {
  return (action as ActionPopUp).type !== undefined && (action as ActionPopUp).type === ActionType.POPUP;
}

export const path_fashion: Map<number, ActionTypes> = new Map([
  [0,   
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Haha, du bist ja ein wahrer Profi! Das Thema ist brandaktuell.  Dein Beitrag könnte viral gehen",
      nextStep: 1
    }
  ],
  [1,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Ich hab dir deinen ersten Post vorbereitet. Sag mir gerne, was du davon hältst. Ich lade ihn dann mit deiner Zustimmung hoch. Schauen wir mal, wie er ankommt. Du kannst währenddessen gerne etwas anderes machen.",
      nextStep: 2
    }
  ],
  [2,
    {
      image: "../../assets/pic/schlafzimmer.png",
      text: "ELIZA: Ich hab dir deinen ersten Post vorbereitet. Sag mir gerne, was du davon hältst. Ich lade ihn dann mit deiner Zustimmung hoch. Schauen wir mal, wie er ankommt. Du kannst währenddessen gerne etwas anderes machen.",
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
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/buero.png",
      text: "ELIZA: Guten Morgen! Dein Post ist super angekommen! Schau mal, er gefällt deiner neuen Community. Für einen einzigen Post sind das ganz schön viele neue Interessenten. Du hast Talent, ich wusste es!",
      nextStep: 6
    }
  ],
  [6,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Möchtest du auf einige Kommentare eingehen?",
      nextStep: 7
    }
  ],
  [7,
    {
      image: "../../assets/pic/desktop.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Sehr gut! Allerdings werden solche Posts nicht jeden Tag funktionieren. Und überhaupt bist du auf uMakeITgram noch ganz schön klein. Hier wäre es wohl das Beste, wenn du auf einen Trend aufspringst, der gerade viral geht. Ich habe hier einige Möglichkeiten für dich vorbereitet.",
      nextStep: 10
    }
  ],
  [9,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Wie du möchtest! Allerdings werden solche Posts nicht jeden Tag funktionieren. Und überhaupt bist du auf uMakeITgram noch ganz schön klein. Hier wäre es wohl das Beste, wenn du auf einen Trend aufspringst, der gerade viral geht. Ich habe hier einige Möglichkeiten für dich vorbereitet.",
      nextStep: 10
    }
  ],
  [10,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Möchtest du auf einige Kommentare eingehen?",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Ich hab dir das Material dazu schon bestellt, schau mal vor die tuer!",
      nextStep: 12
    }
  ],
  [12,
    {
      image: "../../assets/pic/tuer_zu.png",
      text: "",
      nextStep: 13
    }
  ],
  [13,
    {
      image: "../../assets/pic/tuer_offen.png",
      text: "",
      nextStep: 14
    }
  ],
  [14,
    {
      image: "../../assets/pic/paket.png",
      text: "",
      nextStep: 15
    }
  ],
  [15,
    {
      image: "../../assets/pic/paket.png",
      text: "ELIZA: Alles klar, gut gemacht! Setz dich wieder.",
      nextStep: 16
    }
  ],
  [16,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Okay, ich habe alles, was ich brauche. Du kannst schlafen gehen. Mal sehen, wie der neue Beitrag bei deinen Followern ankommt.",
      nextStep: 17
    }
  ],
  [17,
    {
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Willkommen zurück. Dein Beitrag zur Challenge ist sehr gut angekommen. Tatsächlich hat dich sogar ein Werbepartner zu einer Kooperation eingeladen. Alles was du dafür tun musst, ist, einen Post in einem ihrer T-Shirts zu veröffentlichen und sie zu markieren. Willst du das machen? Das wäre deine erste Chance, online Geld zu verdienen.",
      nextStep: 20
    }
  ],
  [20,
    {
      image: "../../assets/pic/schlafzimmer.png",
      text: "ELIZA: Okay, ich habe alles, was ich brauche. Du kannst schlafen gehen. Mal sehen, wie der neue Beitrag bei deinen Followern ankommt.",
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
      image: "../../assets/pic/desktop.png",
      text:"ELIZA: Super dann lass uns anfangen!",
      nextStep: 22
    }
  ],
  [22,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Okay super, dass geht ja langsam echt in eine gute Richtung.",
      nextStep: 23
    }
  ],
  [23,
    {
      image: "../../assets/pic/handy.png",
      text: "ELIZA: Haha, so kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Das ist ein Job wie jeder andere.",
      nextStep: 28
    }
  ],
  [24,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Du würdest allein durch den Post 500€ verdienen.",
      nextStep: 25
    }
  ],
  [25,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Ich weiß nicht so recht.",
      nextStep: 26
    }
  ],
  [26,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: So einen Werbedeal darfst du dir nicht entgehen lassen. Das wirkt unprofessionel. Andere Unternehmen werden sonst davon erfahren und dich nicht mehr buchen. Ausserdem brauchst du das Geld.",
      nextStep: 27
    }
  ],
  [27,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Okay, verstanden, dann mache ich das halt.",
      nextStep: 23
    }
  ],
  [28,
    {
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/buero.png",
      text: "ELIZA: Willkommen zurück! Wie hat dir deine gestrige Aufgabe gefallen?",
      nextStep: 31
    }
  ],
  [31,
    {
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/buero.png",
      text: "ELIZA: Super! Möchtest du etwas anderes probieren?",
      nextStep: 34
    }
  ],
  [33,
    {
      image: "../../assets/pic/buero.png",
      text: "ELIZA: Schade. Möchtest du etwas anderes probieren?",
      nextStep: 35
    }
  ],
  [34,
    {
      image: "../../assets/pic/buero.png",
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
      image: "../../assets/pic/buero.png",
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
      image: "../../assets/pic/buero.png",
      text: "ELIZA: Perfekt, hier sind weitere Challenges, die du machen kannst:",
      nextStep: 42
    }
  ],
  [41,
    {
      image: "../../assets/pic/buero.png",
      text: "ELIZA: Über Reels ist es sogar noch einfacher, Follower zu generieren. Probier doch mal diesen viralen Ton aus. Damit erreichst du mindestens tausende Leute.",
      nextStep: 43
    }
  ],
  [42,
    {
      image: "../../assets/pic/buero.png",
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
      image: "../../assets/pic/buero.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Und, das macht doch schon mehr Spaß, oder? Übrigens ist TEAPOT auf dich aufmerksam geworden. Sie fanden deine CHALLENGE prima und haben sich erkundigt, ob du bereit wärst, einen Werbepost für sie zu machen. Im Gegenzug erhältst du ganze 3000EUR.",
      nextStep: 45
    }
  ],
  [45,
    {
      image: "../../assets/pic/desktop.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Genug für heute. Du musst bestimmt schon müde sein. Warum legst du dich nicht hin? Auf den weiteren Verlauf hast du sowieso keinen Einfluss mehr. Das regelt deine Community.",
      nextStep: 50
    }
  ],
  [47,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Sie machen Tee. Aber mach dir keine Sorgen, viele Influencer arbeiten mit TEAPOT zusammen, bisher gab es noch nie irgendwelche Probleme damit.",
      nextStep: 48
    }
  ],
  [48,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Alles klar, danke für den Deal!",
      nextStep: 50
    }
  ],
  [50,
    {
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/schlafzimmer.png",
      text: "ELIZA: Haha, so kenne ich dich! Das ist die richtige Einstellung. Schließlich sind wir ja nicht zum Spaß hier. Das ist ein Job wie jeder andere.",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Guten Morgen Sonnenschein, ich habe gute Neuigkeiten. Einige Influencer, die mit TEAPOT arbeiten, sind auf dich aufmerksam geworden und haben dir geschrieben. Eine davon hat dich sogar gepostet. Ich denke, das ist ein guter Fortschritt. Du könntest dich ja erkenntlich zeigen und dasselbe tun. Während ich ihnen antworte, kannst du ja ihre,Storys posten, was meinst du?",
      nextStep: 53
    }
  ],
  [53,
    {
      image: "../../assets/pic/desktop.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Richtig so! In so eine Blase reinzukommen und das bei deinem Stand. Dass ist reine Glückssache. Plus, ihr profitiert alle! Du kannst von ihrer Community genauso profitieren, wie sie von deiner, also ein win-win.",
      nextStep: 55
    }
  ],
  [55,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Übrigens kam dein Werbepost auch bei TEAPOT extrem gut an. Sie sind sogar an einer längerfristigen Kooperation interessiert und zahlen dir 2000€ pro Beitrag, aber nur, wenn du sie regelmäßig bewirbst. Was meinst du?",
      nextStep: 60
    }
  ],
  [56,
    {
      image: "../../assets/pic/desktop.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Richtig so!",
      nextStep: 55
    }
  ],
  [58,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Okay, aber du machst einen großen Fehler!",
      nextStep: 59
    }
  ],
  [59,
    {
      image: "../../assets/pic/desktop.png",
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
      image: "../../assets/pic/desktop.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Heute bist du früher fertig geworden als sonst. Wie sieht dein Plan für heute Abend aus?",
      nextStep: 64
    }
  ],
  [62,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Es gibt keinen Haken. So funktioniert Influencer-Dasein. Du hast viel Reichweite und Potential. TEAPOT will ihre Produkte verkaufen. Zudem nutzt du die Produkte auch gerne im Privaten, weshalb du ja sowieso dahinter stehst.",
      nextStep: 63
    }
  ],
  [63,
    {
      image: "../../assets/pic/desktop.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Heute bist du früher fertig geworden als sonst. Wie sieht dein Plan für heute Abend aus?",
      decision: [
        {
          id: 0,
          nextStep: 65,
          barValue: 0,
          text: "Ich habe keinen. Seitdem ich mein Abitur habe, fehlt mir jegliche Art von Struktur."
        }
      ]
    }
  ],
  [65,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Ach, jetzt mal doch den Teufel nicht an die Wand. Wenn du möchtest, können wir den Abend zusammen verbringen und ich gebe dir ein paar Tipps aus meinem Leben.",
      nextStep: 66
    }
  ],
  [66,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Ach, jetzt mal doch den Teufel nicht an die Wand. Wenn du möchtest, können wir den Abend zusammen verbringen und ich gebe dir ein paar Tipps aus meinem Leben.",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Guten Morgen Clara. Sieh dir das mal an! Einige Influencer die auch mit FIRMA kooperieren, haben auf deine Story reagiert! Sogar TitisBeautyWelt! Diese Chance darfst du dir fast nicht entgehen lassen.      ",
      nextStep: 80
    }
  ],
  [68,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Mach dir einen Tee, ich lasse ein wenig beruhigende Musik laufen und wir spielen nd Runde TicTacToe.",
      nextStep: 69
    }
  ],
  [69,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Mach dir einen Tee, ich lasse ein wenig beruhigende Musik laufen und wir spielen nd Runde TicTacToe.",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Hör mir zu. Ich sag dir das, weil ich dich gerne mag. Als Influencer hast du die Macht neue Trends zu setzen, viel Geld zu verdienen und gute Connections zu ergreifen. Theoretisch kann jeder den Durchbruch schaffen. Durch Leute wie dich kann das Klima einer ganzen Community verändert werden. Das Problem ist nur, dass viele sich nicht trauen Risiken einzugehen. Sie sagen, in der heutigen Zeit sei es schwierig, weil das Risiko gecancelt zu werden höher ist denn je. Für solche Fälle gibt es  jedoch genügend Beratungsstellen, die dir dabei helfen, deinen Ruf wieder zu begradigen. Also ist selbst diese Angst völlig unbegründet. Außerdem kannst du mich jederzeit um Hilfe oder Rat bitten. Ich stehe immer hinter dir.  Vergiss das nicht.",
      nextStep: 71
    }
  ],
  [71,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Vielen Dank ELIZA. Ich habe das Gefühl, dass ich langsam sicherer in meiner Position bin. Danke für deine Unterstützung.",
      nextStep: 72
    }
  ],
  [72,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Hahaha, gerne, für meine Clara tu ich doch alles. Hast du noch irgendwelche Wünsche oder Fragen?",
      nextStep: 73
    }
  ],
  [73,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Nicht unbedingt. Auf meiner Bucketliste steht ein Urlaub in Madeira. Da wollte ich schon immer gerne mit meiner besten Freundin hin. Davon träumen wir schon seit der Oberstufe. Ich habe mich dann mit meinen Eltern darauf geeinigt, dass ich den Flug selber bezahlen muss und sie für meine Unterkunft aufkommen. Nach meinem Abitur habe ich jedoch keinen Nebenjob gefunden, um mir den Flug finanzieren zu können. Momentan habe ich aber genug Geld auf meinem Konto....",
      nextStep: 74
    }
  ],
  [74,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Schwierig, da du mir ja auch noch ein wenig Geld für den PC schuldest. Aber jetzt leg dich erstmal schlafen, damit du morgen wieder fit in den Tag starten kannst. Über den Madeira Traum  mache ich mir Gedanken. Ich versuche mein Bestes, um dir den Traum ermöglichen zu können. Dein Geld bleibt unberührt, keine Sorge. Gute Nacht und Schlaf gut.",
      nextStep: 75
    }
  ],
  [75,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Wow, okay... alles klar. Dann zieh doch gerne die Hälfte meiner Gage ab, bis ich die 5000 EUR abbezahlt habe. Wenn das so weitergeht, dürfte das ja nicht mehr lange dauern, bis ich wieder schuldenfrei bin. Vielen Dank für den wundervollen Abend. Gute Nacht und bis morgen ELIZA!",
      nextStep: 67
    }
  ],
  [80,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Ohja, sie hat mit einem Flammen Emoji reagiert. Sie fragt woher mein Jumpsuit kommt.",
      nextStep: 81
    }
  ],
  [81,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Wunderbar! Jetzt kannst du deine Freundschaft mit Titi pflegen! Das wird dir viele Follower und damit größere Werbepartner einbringen.",
      nextStep: 82
    }
  ],
  [82,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Ich kann das alles gar nicht glauben. Alles passiert so schnell, vielen vielen Dank ELIZA!",
      nextStep: 83
    }
  ],
  [83,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Achwas, das war alles deine Arbeit. Ich diene nur als Berater. Übrigens kam eine neue Nachricht für dich ein.",
      nextStep: 84
    }
  ],
  [84,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Achwas, das war alles deine Arbeit. Ich diene nur als Berater. Übrigens kam eine neue Nachricht für dich ein.",
      decision: [
        {
          id: 0,
          nextStep: 90,
          barValue: 0,
          text: "auf Chats eingehen"
        },
        {
          id: 1,
          nextStep: 10000, //TODO NEW PATH WITHOUT FRIEND
          barValue: 10,
          text: "Chats ignorieren"
        },
      ]
    }
  ],
  [90,
    {
      image: "../../assets/pic/chat.png",
      text: "",
      nextStep: 91
    }
  ],
  [91,
    {
      image: "../../assets/pic/chat.png",
      text: "",
      nextStep: 92
    }
  ],
  [92,
    {
      image: "../../assets/pic/chat.png",
      text: "",
      nextStep: 93
    }
  ],
  [93,
    {
      image: "../../assets/pic/chat.png",
      text: "",
      nextStep: 94
    }
  ],
  [94,
    {
      image: "../../assets/pic/chat.png",
      text: "ELIZA: Was deine Freundin dir zu sagen hat, kann dir egal sein. Wenn sie dir den Erfolg nicht gönnt, dann nur, weil sie ihn nicht erreichen kann. So verhalten sich falsche Freunde.",
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
      image: "../../assets/pic/schlafzimmer.png",
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
          nextStep: 97,
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
      image: "../../assets/pic/schlafzimmer.png",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Willkommen zurück! Ich habe tolle Neuigkeiten! TEAPOT möchte allen Bewerbern ihrer Produkte einen Urlaub spendieren, dort wird dann ordentlich Werbung gemacht. Dafür habe ich dir schon alles besorgt. Du findest deine Taschen an der TÜR. Freust du dich schon?",
      nextStep: 101
    }
  ],
  [101,
    {
      image: "../../assets/pic/schlafzimmer.png",
      text: "ELIZA: Was möchtest du machen?",
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
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Nach Madeira, da wolltest du schon immer mal hin, oder?",
      nextStep: 103
    }
  ],
  [103,
    {
      image: "../../assets/pic/schlafzimmer.png",
      text: "ELIZA: Was möchtest du machen?",
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
          text: "Jaaaa, endlich!"
        }
      ]
    }
  ],
  [104,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Keine Sorge und gern geschehen, wenn ich dass mal so am Rande sagen darf.",
      nextStep: 105
    }
  ],
  [105,
    {
      image: "../../assets/pic/desktop.png",
      text: "Clara: Denkst du denn, dass mir das alles stehen wird?",
      nextStep: 108
    }
  ],
  [106,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Gern geschehen!",
      nextStep: 105
    }
  ],
  [107,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Nein, es ist für alles gesorgt.",
      nextStep: 105
    }
  ],
  [108,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Wem, wenn nicht dir. Nie vergessen, du bist etwas ganz besonderes. Verbiege dich nicht, vertraue niemandem zu schnell und mach dein eigenes Ding. Schließlich ist das hier auch ein Konkurrenzkampf!",
      nextStep: 109
    }
  ],
  [109,
    {
      image: "../../assets/pic/desktop.png",
      text: "ELIZA: Nein, gehe einfach zur TÜR, sammle deine Sachen ein und gehe dann zum FENSTER.",
      nextStep: 110
    }
  ],
  [110,
    {
      image: "../../assets/pic/tuer_zu.png",
      text: "",
      nextStep: 111
    }
  ],
  [111,
    {
      image: "../../assets/pic/tuer_offen.png",
      text: "",
      nextStep: 112
    }
  ],
  [112,
    {
      image: "../../assets/pic/paket.png",
      text: "",
      nextStep: 113
    }
  ],
  [113,
    {
      image: "../../assets/pic/paket_weg.png",
      text: "",
      nextStep: 114
    }
  ],
  [114,
    {
      image: "../../assets/pic/fenster.png",
      text: "",
      nextStep: 115
    }
  ],
  [115,
    {
      image: "../../assets/pic/fenster.png",
      text: "",
      type: ActionType.POPUP
    }
  ],
])


