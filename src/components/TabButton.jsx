export default function TabButton({children, onClick}) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
  /*props.children refer to the text in between the TAGS in main*/
}
