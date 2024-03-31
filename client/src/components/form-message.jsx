import { useForm } from 'react-hook-form';
import { ReactComponent as Photo } from "./icons/Photo.svg";

function FormMessage({ onFormSubmit }) {
  const date = new Date();
  const fullDate = date.toLocaleDateString('es-PE');

  const { register, handleSubmit } = useForm();

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const onSubmit = handleSubmit((data) => {
    if (data.file.length > 0) {
      getBase64(data.file[0], (result) => {
        data.file = result;
        data.date = fullDate;
        fetch('/msg', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        onFormSubmit();
      });
    } else {
      data.file = null;
      data.date = fullDate;
      fetch('/msg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      onFormSubmit();
    }
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
  block w-full text-slate-800 p-2 border-2 border-slate-500 rounded-xl focus:border-slate-800 h-20
' { ...register("content", { required: true }) } required/>

            <Photo className="w-8 h-8 inline mr-4" />
            <input type="file" name="File" id="file" className='mb-14 hover:bg-slate-200 cursor-pointer font-bold
            rounded-xl p-1 border-2 border-slate-500 mt-2
            ' { ...register("file") } accept=".png,.jpg,.jpeg" />

            <button type="submit" className='
              mt-2 relative float-right top-10 text-slate-800 border-2 border-slate-500 rounded-xl p-1 hover:bg-slate-200
              active:top-11
            '>Enviar mensaje</button>
          </form>
        </section>
    </div>
  );
}
  
export default FormMessage;