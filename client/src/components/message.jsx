import Like from "./like";
import Favorite from "./favorite";

function Message({ message, i }) {
  return (
    <div className="bg-slate-50 rounded-xl p-2 border-2 border-slate-500 w-1/2 mx-auto my-6 shadow-md">
      <header className="pb-2 border-b-2 border-slate-300">
        <h2 className="text-xl text-slate-800">{message.name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-slate-600 text-sm">{message.date}</span>
          <nav>
            <Like i={i}/>
            <Favorite i={i} />
          </nav>
        </div>
      </header>
      <section className="pt-2">
        <p>{message.text}</p>
      </section>
    </div>
  );
}
    
export default Message;