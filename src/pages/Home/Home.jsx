import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import info_icon from '../../assets/info_icon.png'
import play_icon from '../../assets/play_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


function Home() {
    const titles = [
        { title: 'Blockbuster Movies' },
        { title: 'Feel Good Movies' },
        { title: 'Top Rated Movies' },
        { title: 'Animation Movies' }
    ];
    return (
        <div className='home'>
            <NavBar />
            <div className="hero">
                <img src={hero_banner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className='caption-img' />
                    <p>Discovering his ties to a secret ancient order, a young man living in modern Istabul embarks on a quest to save the city from a immortal enemy</p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="" />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                {titles.map((items, index) => (
                    <TitleCards key={index} title={items.title} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Home