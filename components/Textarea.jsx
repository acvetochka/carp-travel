const Textarea = () => {
  return (
    <label className="flex flex-col text-label font-extralight mb-4">
      Message
      <textarea
        name="message"
        className="resize-none placeholder:text-[13px] bg-white/5 focus:bg-white/10  border-none h-[196px] md:h-[221px] xl:h-[174px]"
      ></textarea>
    </label>
  );
};

export default Textarea;
