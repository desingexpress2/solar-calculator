import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

interface currentlyLeasedProps {
    currentlyLeased: String | null;
    setCurrentlyLeased: (value: string) => void;
    handleNextStep: () => void;
}

const CurrentlyLeased = ({
    currentlyLeased,
    setCurrentlyLeased,
    handleNextStep
}: currentlyLeasedProps) => {

    const options = ["Ja", "Nein"];

    return (
        <div className="container mx-auto duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Ist die Fläche aktuell verpachtet?</h2>
            <p className="text-center mb-8">
            Bitte wählen Sie eine Option aus.
            </p>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
                {options.map((option) => (
                    <button onClick={
                        () => {
                            setCurrentlyLeased(option);
                            handleNextStep();
                        }
                    } key={option} 
                    
                    className={`flex flex-col hover:text-white items-center px-12 py-8  border  border-primary  rounded-lg duration-1000 ${option === currentlyLeased ? "bg-teal text-white" : " hover:bg-teal   hover:text-white"}`}> 
                        <span className="text-5xl mb-2">{
                            option === "Yes" ? <FaRegCheckCircle /> : <FaRegTimesCircle />
                        } </span>
                        <span className="mt-4">{option}</span>
                    </button>
                ))}
            </div> 
            </div>
        </div>
    );
}


export default CurrentlyLeased;