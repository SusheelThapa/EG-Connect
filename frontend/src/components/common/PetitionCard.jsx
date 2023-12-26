import tagImage from "../../img/tag.png";
import PropTypes from 'prop-types';

const PetitionCard = ({detail}) => {
  return (
    <div className="border border-solid shadow-xl rounded-lg p-8 mx-10 my-3 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      {/* TAG IMPLEMENTED  */}
      <div className="flex gap-2">
        {/* loop here for many tags */}
        <div className="flex gap-1 mt-2 mb-2">
          <img src={tagImage} className="h-4 w-4 " alt="Tag Icon" />
          <div>dkfkd</div>
        </div>
      </div>
      <p className="text-xl font-times  mb-4">
        {detail.title}
      </p>
      <div className="grid justify-start rounded-full w-40 bg-green-500 h-5"></div>
      <div>
        <div className="text-sm text-left italic mt-1">
          <span className="font-semibold text-blue-600">12345</span> Votes
          <div className="grid justify-end">
            <button className="rounded-lg bg-green-400 border border-solid px-6 py-2 ">
              <span className="font-semibold">Vote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
PetitionCard.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default PetitionCard;
