import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={facebook_icon} alt="" />
                <img src={youtube_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={twitter_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Audio Description</li>
                <li>Audio Description</li>
                <li>Audio Description</li>
                <li>Audio Description</li>
                <li>Audio Description</li>
                <li>Audio Description</li>
                <li>Audio Description</li>
            </ul>
            <p className='copyright-text' >1919191911919,Netflix,inc</p>
        </div>
    )
}

export default Footer