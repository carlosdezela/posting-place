import { ReactComponent as ArrowPath } from "./icons/ArrowPath.svg";

function Refresh({ onRefresh }) {
  return (
    <label htmlFor="refresh" className="cursor-pointer absolute top-6 right-[22%]">
      <input type="button" id="refresh" className="sr-only peer" onClick={onRefresh} />
      <ArrowPath className="w-8 h-8 inline text-slate-800" />
    </label>
  )
}

export default Refresh;