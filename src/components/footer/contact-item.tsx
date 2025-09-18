interface Props {
  text: string,
  inconUrl: string;
  alt: string;
  styles?: string;
}

export const ContactItem = ({text, inconUrl, alt, styles=''}: Props) => {
  return (
    <div className={`flex items-start gap-6 ${styles}`}>
        <img className='mt-1' src={inconUrl} alt={alt} />
        <p>{text}</p>
      </div>
  )
}
