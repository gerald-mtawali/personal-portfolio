import './Home.css'; 
import '../../index.css';
// import DevAvatar from '../../assets/image/DevAvatar.svg'; 
import BrushStrokeBackground from '../../assets/image/brush-stroke-banner-background 2.svg'; 

function HomePage() {
	return (
		<div className='scroll'>
			<div className='introContainer'>
				<div id="intro_text" className='introDetail'>
					<h2> My Name is Gerald Mtawali</h2>
					<h3> Full Stack Software Engineer</h3>
					<p> I design. I engineer. I create. </p>
				</div>
				<div className='introProfileContainer' id="intro_image">
					<img src={BrushStrokeBackground} alt="Background" className='introProfileBackground'/>
					{/* <img src={DevAvatar} alt="Avatar" className='introProfileForeground'/> */}
				</div>
			</div>
			<hr className='solid'/>
		</div>
	);
}

export default HomePage;
