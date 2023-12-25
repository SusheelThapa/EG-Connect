import PetitionCard from "./common/PetitionCard";

const PetitionContent = () => {
  return (
    <div className="mx-48">
      <div className="grid grid-cols-2 gap-4">
        {/* <!-- Add more rows as needed --> */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
          return <PetitionCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default PetitionContent;
