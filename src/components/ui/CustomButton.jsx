function CustomButton({ ...props }) {
  const { name, isActive } = props;
  return (
    <button className="flex border-2 border-gray-200 gap-[16px] py-[8px] pl-[8px] pr-[16px]  rounded-xl">
      <span
        className={`flex items-center justify-center w-5 h-5 border-2 ${
          isActive ? "border-custom-green": "border-gray-200"
        }  rounded-md`}
      >
        {isActive ? (
          <span className="w-3 h-3 bg-custom-green rounded-sm"></span>
        ) : (
          ""
        )}
      </span>
      <span className="text-[14px] font-medium">{name}</span>
    </button>
  );
}

export default CustomButton;
