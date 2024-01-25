import "./App.css";
import { allHeroes } from "./heroData";
import HeroCard from "./components/HeroCard";

export default function App() {
    return (
        <div className="container">
            <h1>HERO INFORMATION</h1>
            <div className="hero-container">
                {allHeroes.map((hero) => (
                    <HeroCard key={hero.hero} hero={hero} />
                ))}
            </div>
        </div>
    );
}
