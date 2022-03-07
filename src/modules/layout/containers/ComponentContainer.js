import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { FaPlay, FaRegLightbulb } from 'react-icons/fa'
import {
	GiOctopus,
	GiAlliedStar,
	GiAmericanFootballHelmet,
	GiAnarchy,
	GiArtificialHive,
} from 'react-icons/gi'

const ComponentContainer = ({ opt }) => {
	const handle = useFullScreenHandle()
	return (
		<>
			<div className="bg-nav-gray">
				<div className="hero">
					<div className="main-hero">
						{/*
						<StaticImage
							src={opt.bgImg.src}
							alt="NÜtkls"
							height={opt.bgImg.height}
							className={opt.bgImg.classes}
							style={{
								position: opt.bgImg.style.position,
								right: opt.bgImg.style.right,
								top: opt.bgImg.style.top,
							}}
						/> */}

						<div className="wrapper-main-hero-left css-typing">
							<h2 className="hero-heading-h2 type-this">Curso em Tecnologia</h2>
							<h3 className="hero-heading-h1 type-this">Desenvolvimento em</h3>
							<h1 className="hero-heading-h1 type-this">Agência Web Moderna</h1>
							<p className="hero-heading-p ">
								Aprenda criando o verdadeiro mão na massa. Crie e hospede seu
								app ou site GRÁTIS*
							</p>

							<button onClick={handle.enter} className="hero-cta-button one">
								<p className="four-head-button head-1">Veja o vídeo</p>
								<p className="four-head-button head-2">Vídeo Promocional</p>
								<p className="four-head-button head-3">
									Clique-me, baby, 1+time <FaPlay className="FaPlay" />
									<span className="four-head-button head-4">Play me</span>
								</p>
							</button>
						</div>
						<div className="wrapper-main-hero-center">
							<p>-- acesso a área do estudante</p>
							<p>-- aprenda com material de valor</p>
							<p>-- ganhe um domínio</p>
							<p>-- acesso a comunidade</p>
							<p>-- ganhe livros</p>
							<p>-- conquiste medalhas</p>
							<p>-- jogue on-line, jogue no tabuleiro</p>
							<p>-- conquiste o seu certificado</p>
							<p>
								<small>*confira os planos e suas extensões</small>
							</p>
						</div>
						<div
							className="wrapper-main-hero-right"
							style={{
								position: 'absolute',
								right: '0',
								width: '76px',
								bottom: '0',
								overflow: 'hidden',
								backgroundColor: '#1f1724',
								height: '100%',
							}}
						>
							<ul className="apps-menu">
								<li className="apps-menu-item">
									<Link to="/" className="call-apps-button apps-buttons-link">
										<FaRegLightbulb className="FaWhatsapp" />
									</Link>
								</li>
								<li className="apps-menu-item">
									<Link to="/" className="apps-buttons-link dark">
										<GiOctopus className="FaWhatsapp" />
									</Link>
								</li>

								<li className="apps-menu-item">
									<Link to="/" className="call-apps-button apps-buttons-link">
										<GiAlliedStar className="FaWhatsapp" />
									</Link>
								</li>

								<li className="apps-menu-item">
									<Link to="/" className="apps-buttons-link dark">
										<GiAmericanFootballHelmet className="FaWhatsapp" />
									</Link>
								</li>

								<li className="apps-menu-item zumba">
									<Link to="/" className="call-apps-button apps-buttons-link">
										<GiAnarchy className="FaWhatsapp" />
									</Link>
								</li>

								<li className="apps-menu-item">
									<Link to="/" className="apps-buttons-link dark">
										<GiArtificialHive className="FaWhatsapp" />
									</Link>
								</li>
							</ul>
						</div>
						<nav>
							<ul className="nav-menu wrapper-bottom-hero">
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Edu4Dev
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Cursos
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Planos
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Contato
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	)
}

export default ComponentContainer
