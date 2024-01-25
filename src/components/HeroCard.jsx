import "./HeroCard.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function HeroCard({ hero }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="card">
            <h2 className="card-title">{hero.hero}</h2>
            <p className="card-description">
                {showInfo && hero.info}
                <button onClick={() => setShowInfo((curr) => !curr)}>{showInfo ? "Hide info" : "Show info"}</button>
            </p>
            <p className="card-villain">Series Villain: {hero.villain}</p>
        </div>
    );
}

// HeroCard prop types for type safety
HeroCard.propTypes = {
    hero: PropTypes.shape({
        hero: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        villain: PropTypes.string.isRequired,
    }),
};
