import { useForm } from 'react-hook-form';

function FormMessage({ onFormSubmit }) {
  const date = new Date();
  const fullDate = date.toLocaleDateString('es-PE');

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    data.date = fullDate;
    fetch('/msg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    onFormSubmit();
  });

  const keyUp = (e) => {
    const textarea = e.target;
    let scHeight = textarea.scrollHeight;
    textarea.style.height = `${scHeight + 4}px`;
  };

  return (
    <div className="bg-slate-50 rounded-xl p-2 border-2 border-slate-500 w-1/2 mx-auto my-6 mb-24 shadow-md">
        <header className="pb-2 border-b-2 border-slate-300">
          <h2 className="text-4xl text-slate-800 mb-2">¿Qué quieres <i>postear</i>?</h2>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 text-sm">{fullDate}</span>
          </div>
        </header>
        <section className="pt-2">
          <form onSubmit={onSubmit}>
            <label htmlFor="title" className='block text-xl text-slate-800 mb-2'>Titulo:</label>
            <input type="text" htmlFor="title" className='
              block w-full text-slate-800 p-2 border-2 border-slate-500 rounded-xl focus:border-slate-800 mb-2
            ' { ...register("title", { required: true }) } required />

            <label htmlFor="content" className='block text-xl text-slate-800 mb-2'>Contenido:</label>
            <textarea id="content" name="content" onKeyUp={keyUp} className='
  block w-full text-slate-800 p-2 border-2 border-slate-500 rounded-xl focus:border-slate-800 mb-14 h-20
' { ...register("content", { required: true }) } required/>

            <button type="submit" className='
              mt-2 relative float-right bottom-12 text-slate-800 border-2 border-slate-500 rounded-xl p-1 hover:bg-slate-200
              active:bottom-11
            '>Enviar mensaje</button>
          </form>
        </section>
    </div>
  );
}
  
export default FormMessage;