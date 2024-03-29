import { ReactComponent as Heart } from "./icons/Heart.svg";

function Like({ i }) {
  return (
    <label htmlFor={`heart${i}`} className="bg-gray-100 cursor-pointer">
      <input type="checkbox" id={`heart${i}`} className="sr-only peer" />
      <Heart className="w-4 h-4 inline peer-checked:fill-current stroke-current text-pink-600 mr-1" />
    </label>
  );
}
  
export default Like;