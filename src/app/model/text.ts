
export type Action = {
  image: string;
  text: string;
}

export type ActionDecision = Action & {
  decision: Decision[];
}

export type ActionPopUp = Action & {
  image: string;
  text: string;
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

export function isActionText(action: ActionText | ActionDecision): action is ActionText {
  return (action as ActionText).nextStep !== undefined;
}
export function isActionDecision(action: ActionText | ActionDecision): action is ActionDecision {
  return (action as ActionDecision).decision !== undefined;
}

export const path_fashion: Map<number, ActionDecision | ActionText> = new Map([
  [0,   
    {
      image: "../../assets/pic/zimmer.png",
      text: "ELIZA: Haha, du bist ja ein wahrer Profi! Das Thema ist brandaktuell.  Dein Beitrag könnte viral gehen",
      nextStep: 1
    }
  ],
  [1,
    {
      image: "../../assets/pic/zimmer2.png",
      text: "ELIZA: Ich hab dir deinen ersten Post vorbereitet. Sag mir gerne, was du davon hältst. Ich lade ihn dann mit deiner Zustimmung hoch. Schauen wir mal, wie er ankommt. Du kannst währenddessen gerne etwas anderes machen.",
      nextStep: 2
    }
  ],
  [2,
    {
      image: "../../assets/pic/zimmer2.png",
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
      image: "../../assets/pic/zimmer.png",
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
      image: "../../assets/pic/zimmer2.png",
      text: "ELIZA: Guten Morgen! Dein Post ist super angekommen! Schau mal, er gefällt deiner neuen Community. Für einen einzigen Post sind das ganz schön viele neue Interessenten. Du hast Talent, ich wusste es!",
      nextStep: 5
    }
  ]
])


