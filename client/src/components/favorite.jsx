import { ReactComponent as Star } from "./icons/Star.svg";

function Favorite({ i }) {
  return (
    <label htmlFor={`star${i}`} className="bg-gray-100 cursor-pointer">
      <input type="checkbox" id={`star${i}`} className="sr-only peer" />
      <Star className="w-4 h-4 inline peer-checked:fill-current stroke-current text-orange-400" />
    </label>
  );
}
    
export default Favorite;