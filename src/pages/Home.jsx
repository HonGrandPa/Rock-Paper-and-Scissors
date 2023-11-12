import { useState, useEffect} from "react";

const Home = () => {

  const [isStart, setStart] = useState(false)

  const [player, setPlay] = useState("")

  const [result, setResult] = useState("");

  const [computer, setComputer] = useState("")

  useEffect(() => {
    if (isStart) {
      handleResult();
    }
  }, [player, isStart]);

  const handComputer = () => {

    const arr = ["rock", "scissors", "paper"]

    setComputer(arr[Math.floor(Math.random() * 3)]);
  }

  const handleResult = () => {
    switch (`${computer}-${player}`) {
      case "rock-scissors":
      case "paper-rock":
      case "scissors-paper":
        setResult("You Lose");
        break;
  
      case "rock-paper":
      case "paper-scissors":
      case "scissors-rock":
        setResult("You Win");
        break;
  
      case "rock-rock":
      case "paper-paper":
      case "scissors-scissors":
        setResult("Draw");
        break;
  
      default:
        // Handle unexpected cases
        setResult("");
    }
  };

  
  
  return (

    <div className="max-w-lg mx-auto flex flex-col justify-center items-center min-h-screen select-none">
      {isStart === false ? <h1 className="text-6xl text-center">Welcom!!</h1> : <h1>{result}</h1>}
      <div className="flex gap-5 mt-5flex-wrap">
        <h2 id="rock" onClick={(e) => { setPlay(e.target.id); handleResult(); handComputer();}} className="text-5xl p-3 hover:opacity-80 cursor-pointer active:shadow-md bg-blue-300">✊</h2>
        <h2 id="scissors" onClick={(e) => { setPlay(e.target.id); handleResult(); handComputer();}} className="text-5xl p-3 hover:opacity-80 cursor-pointer active:shadow-md bg-red-300">✌️</h2>
        <h2 id="paper" onClick={(e) => { setPlay(e.target.id); handleResult(); handComputer();}} className="text-5xl p-3 hover:opacity-80 cursor-pointer active:shadow-md bg-green-300">✋</h2>
        
      </div>
      {isStart === false ? <button onClick={() => setStart(true)} className="text-2xl mt-5 text-center px-5 py-1 rounded-lg bg-gray-400  hover:opacity-80">START</button>: <p></p>}
      {isStart === false ? <></> : <h2>Computer : {computer}  You : {player}</h2>}
  </div>
  );
};

export default Home;
