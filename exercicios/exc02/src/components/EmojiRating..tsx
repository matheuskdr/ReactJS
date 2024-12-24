type Props = {
    valor: number;
}

const Emojirating = ({valor}: Props) => {
  const emoji: number = 5;  
  return (
      <div className="flex items-center gap-2 mt-5">
        <h1 className="text-8xl bg-slate-400 p-4">{valor}:</h1>
        <p className="text-7xl">{"😄".repeat(valor)}{"😶".repeat(emoji - valor)}</p>
      </div>
    );
  }
  
  export default Emojirating;