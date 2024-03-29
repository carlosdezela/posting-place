import Message from "./message";

function Messages(props) {
  return (
    <section>
      <ul>
        {props.messagesData?.map((message, i) => (
          <li key={i}><Message message={message} i={i} /></li>
        ))}
      </ul>
    </section>
  );
}
  
export default Messages;