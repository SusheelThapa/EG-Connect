import PropTypes from "prop-types";

import Button from "./Button";

import tagImage from "../../img/tag.png";

/**
 * @component PetitionCard
 * @description A card component to display petition information.
 * Represents a single petition with details and voting options.
 *
 * @param {Object} props - The props for the PetitionCard component.
 * @param {Object} props.detail - Detail of the petition, including id, title, description, etc.
 * @param {boolean} props.isLogin - Boolean value indicating if the user is logged in.
 *
 * @returns {JSX.Element} - A styled card component displaying petition details.
 */
const PetitionCard = ({ detail, isLogin }) => {
  return (
    // Card container with styling and hover effect
    <div className="border border-solid shadow-xl rounded-3xl p-8 mx-10 my-3 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="flex gap-2">
        <div className="flex gap-1 mt-2 mb-2">
          <img src={tagImage} className="h-4 w-4 " alt="Tag Icon" />
          <div>dkfkd</div>
        </div>
      </div>
      <p className="text-2xl font-times  mb-4">{detail.title}</p>
      <p className="text-base font-times  mb-4">
        {detail.description.slice(0, 200)}
      </p>
      <div className="grid justify-start rounded-full w-40 bg-green-500 h-5"></div>
      <div>
        <div className="text-sm text-left italic mt-1">
          <span className="font-semibold text-blue-600">
            {Math.floor(Math.random() * 100000)}
          </span>{" "}
          Votes
          <div className="grid justify-end">
            <button className="rounded-lg bg-green-400 border border-solid px-6 py-2 ">
              {isLogin ? (
                <span className="font-semibold">Vote</span>
              ) : (
                <Button
                  buttonText={"Sign In"}
                  css={
                    "bg-blue-500  text-white text-lg py-3 px-4 rounded-md hover:bg-blue-600 w-full shadow-lg transition duration-150 ease-in-out"
                  }
                  handleOnClick={() => {}}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* PropType validation to ensure correct prop types are passed to the component*/
PetitionCard.propTypes = {
  detail: PropTypes.object.isRequired,
  isLogin: PropTypes.bool,
};

export default PetitionCard;
