type Props = {
    valor: number;
}

const Emojirating = ({valor}: Props) => { 
  return (
      <div className="flex items-center gap-2 mt-5 text-5xl">
        <div className="bg-gray-700 p-3">{valor}:</div>
        <div>{valor <= 1 ? "😥" 
        : valor == 2 ? "😥🥺" 
        : valor == 3 ? "😥🥺😃"
        : valor == 4 ? "😥🥺😃😁" 
        : valor >= 5 ? "😥🥺😃😁😲" : ""}</div>
      </div>
    );
  }
  
  export default Emojirating;