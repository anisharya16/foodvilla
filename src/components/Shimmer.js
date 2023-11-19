const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map(() => {
          return (
            <div
              className="w-60 h-56 bg-slate-500 rounded-lg m-7"
              key={Math.floor(Math.random() * 100)}
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
