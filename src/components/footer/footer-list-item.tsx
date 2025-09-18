interface Props {
  text: string;
}

export const FooterListItem = ({text}:Props) => {
  return (
    <li>
      <a className='hover:text-Teal-200' href='#'>
        {text}
      </a>
    </li>
  );
};
