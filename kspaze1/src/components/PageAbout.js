import React, {useState, useEffect} from 'react';
import {getSortedUrls, getImgCaptions} from '../utils/firebase'
import placeholder from '../assets/placeholderImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css'; 


export default function PageAbout({anim, toggleAnim, closePage}) {
    const [aboutImgList, setAboutImgList] = useState([])
    const [aboutCaptionList, setAboutCaptionList] = useState([])
    
    useEffect(()=>{
        getSortedUrls('pageAbout').then(res=>setAboutImgList(res))
        getImgCaptions('pageAbout').then(res=>setAboutCaptionList(res))
    },[])
    
    const successfulImgFetch = aboutImgList.length
    const successfulCaptionFetch = aboutCaptionList.length
    const placeholderCaption = 'Artwork by Kspaze1'

    return (
        <div className='page' animation={anim} id='pageAbout' onAnimationEnd={()=>{if(anim === 'animateOut') closePage()}}>
            <div className="panel" >
                <div className="text-container">
                <div className='header-wrapper'>
                    <h1>ABOUT</h1>
                </div>
                <br></br>
                <div style={{width:'30%', float:'right', marginLeft:'2%'}}>
                <img src={successfulImgFetch ? aboutImgList[0] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${aboutCaptionList[0]}` : placeholderCaption }</div>
                </div>
                </div>
                <div className="body-wrapper">
                <h3>My traits</h3>
                <ul>
                    <li>BBC-featured tech founder, PhD in Chemistry & Nanomaterials, Singapore’s EDGE 35-under-35.</li>
                    <li>Character artist with works featured by eminent global musicians.</li>
                    <li>GamestopNFT’s launch artist.</li>
                    <li>Member of ARC Stellars – A curated invite-only web3 community.</li>
                    <li>Bboy at roots – The Bronx Boys Rocking Crew, Lords of Nanyang Crew, Flow with Life Crew, Ill Stack Squad.</li>
                </ul>
                <br></br>
                <h3>My journey to web3</h3>
                <p>Born and raised on the streets of Saigon, Vietnam and spent the teenage years and adulthood in Singapore, I was fortunate to learn from the best in both environments. I learnt art at 5 years old and fell in love with the hip-hop culture through its art forms, namely hip-hop music, graffiti and breaking (bboying). 
                    These street arts, and hip-hop rescued me from the darkest days as a troubled kid. I danced and played music so often that I skipped school. My pursuit in bboying has taught me various life lessons. I joined The Bronx Boys Rocking Crew – an global OG bboy crew originated from USA, and won many dance competitions in Singapore and the region with my greatest friends. </p>
                    <div style={{width:'50%',float:'left', marginRight:'2%'}}>
                <img src={successfulImgFetch ? aboutImgList[1] : placeholder} alt='me' width='100%' height='100%'></img>
                <div className="overlay">
                    <div className="img-credit">{successfulCaptionFetch? `${aboutCaptionList[1]}` : placeholderCaption }</div>
                </div>
                </div>
                <p>The culture had also taught me the value of learning and contributing. I pursued a degree in Chemistry, and obtained a PhD in Chemistry from Nanyang Technological University, Singapore. I graduated with 2 Gold medals for Research Excellence and a patent, and I co-founded a deep-tech company to commercialize my research to combat COVID-19. The work has earned me Singapore’s EDGE 35-under-35 award and a feature on BBC and global media.</p>
                <p>However, it was tough to run a company and do art. My time with art was significantly affected. As COVID-19 subsided, I decided to pursue art again. </p>
                <p>This was also when I was invited as a launch artist for Gamestop NFT marketplace debut. I prepared the HITCats art collection and my proposal was approved by content team, alongside a licensed right to make a special 1/1 art with Gamestop Logo. I sold out the collection, amassing 24 ETH volume in 3 days. Subsequently, I did various collab NFT project with creators on Loopring Layer 2. </p>
                <p>Nevertheless, I am motivated to take a bigger step to push my arts further, and venture towards the 1/1 art scene. I am bullish on the utility of NFT that authenticates artworks and builds a digital version of traditional art collecting. I was humbled by many great artists in the space and realized upskilling is necessary. </p>
                <br></br>
                <h3>Art</h3>
<p>I am in the early days of developing my style, which I aim to grow into something iconic in a few years. I was heavily influenced by graffiti arts and traditional American tattoo art styles – which emphasizes bold lines, rawness and a little bit of rebel. Started with doing art for fun without any real motivation about originality or finesse, I am learning to push my own boundaries towards creating more valuable arts.</p>

<p>Instilling more thoughts in composition, colours, shadow play, story-telling while keeping the raw and rebellious essence of my street art roots is my goal. I am constantly working towards crafting more unique arts at the realm of mental activities and technologies – the areas that I am deeply passionate about.</p>
</div>
            </div>
        </div>
        <div className='closeModal-container'>
            <FontAwesomeIcon icon={faXmark} className='closeModal my-button' onClick={()=>toggleAnim('animateOut')}/>
        </div>
        </div>
    );
}