const Textarea = ({ customStyle }) => {
  return (
    <label className="flex flex-col text-label font-extralight mb-4">
      Message
      <textarea
        name="message"
        className={`resize-none placeholder:text-[13px] bg-white/5 focus:bg-white/10 mt-1 border-none ${customStyle}`}
      ></textarea>
    </label>
  );
};

export default Textarea;

//
