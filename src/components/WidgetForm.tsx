import { CloseButton } from "./CloseButton";

import bugImage from "../assets/bug.svg";
import ideaImage from "../assets/idea.svg";
import thoughtImage from "../assets/thought.svg";

const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: 'Imagem de uma lampada'
        }
    }, 
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImage,
            alt: 'Imagem de um balão de pensamento'
        }
    }
};

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vm-2rem)] md:w-auto">
            <header>
                <h2 className="text-xl leading-6">Deixe seu feedback</h2>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { 
                    Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" 
                                type="button"
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span className="text-zinc-400">{value.title}</span>
                            </button>
                        );
                    })
                }
            </div>

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}