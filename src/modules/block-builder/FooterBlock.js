import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout'

import excerpt from '../../tools/excerpt'

import { BsHeadset, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

const FooterBlock = ({ footerLogo, featurePosts }) => {
	return (
		<Layout type="ROW" opt={{ bgColor: '#222', classes: 'footer' }}>
			<Layout
				type="ROW"
				opt={{ isBoxed: true, numColumns: 4, classes: 'footer-columns' }}
			>
				<div className="footer-infos">
					<h3>Sobre a escola</h3>
					<p>
						A Descola é uma escola de cursos online que cria grandes
						experiências de aprendizagem para transformar as pessoas ao longo de
						suas vidas. Selecionamos temas e professores e construímos conteúdos
						para que você desenvolva Power Skills.
					</p>
					<p>Descola Cursos Inovadores LTDA EPP 17.996.625/0001-58</p>

					<p className="footer-headset">
						<BsHeadset />
						<a href="tel:+551130420043">+55 (11) 3042-0043</a>
					</p>
					{footerLogo ? <p className="footer-logo">{footerLogo}</p> : null}
				</div>
				<div className="tag-list-wrapper">
					<h3>Habilidades em destaque</h3>
					<a href="https://descola.org/cursos?tag=gestao" className="tag">
						Gestão
					</a>
					<a
						href="https://descola.org/cursos?tag=empregabilidade"
						className="tag"
					>
						Empregabilidade
					</a>
					<a href="https://descola.org/cursos?tag=colaboracao" className="tag">
						Colaboração
					</a>
					<a
						href="https://descola.org/cursos?tag=relacionamentos"
						className="tag"
					>
						Relacionamentos
					</a>
					<a href="https://descola.org/cursos?tag=inovacao" className="tag">
						Inovação
					</a>
					<a
						href="https://descola.org/cursos?tag=comunicacao-interpessoal"
						className="tag"
					>
						Comunicacao Interpessoal
					</a>
					<a
						href="https://descola.org/cursos?tag=design-thinking"
						className="tag"
					>
						Design Thinking
					</a>
					<a href="https://descola.org/cursos?tag=engajamento" className="tag">
						Engajamento
					</a>
					<a
						href="https://descola.org/cursos?tag=produtividade"
						className="tag"
					>
						Produtividade
					</a>
					<a href="https://descola.org/cursos?tag=rh" className="tag">
						RH
					</a>
					<a href="https://descola.org/cursos?tag=lideranca" className="tag">
						Liderança
					</a>
					<a href="https://descola.org/cursos?tag=trabalho" className="tag">
						Trabalho
					</a>
					{/* </div> */}
					<div className="footer-social-icons">
						<h3>Redes sociais</h3>
						<a
							href="https://br.linkedin.com/school/descola"
							rel="noopener noreferrer"
							target="_blank"
							className="btn btn-primary btn-icon"
						>
							<FaLinkedinIn />
						</a>
						<a
							href="https://www.instagram.com/descolagram"
							rel="noopener noreferrer"
							target="_blank"
							className="btn btn-primary btn-icon"
						>
							<BsInstagram />
						</a>
						<a
							href="https://www.facebook.com/descolasp"
							rel="noopener noreferrer"
							target="_blank"
							className="btn btn-primary btn-icon"
						>
							<FaFacebookF />
						</a>
					</div>
				</div>
				<div className="footer-column-blog">
					<h3>Blog da escola</h3>
					{featurePosts.slice(0, 3).map((eachPost, i) => {
						return (
							<Link
								to={`${eachPost.node.fields.slug}`}
								className="footer__card"
								key={i}
							>
								{eachPost.node.frontmatter.footerFeaturedImage ? (
									<Layout
										type="BLOCK_IMAGE"
										opt={{
											queryCard: eachPost.node.frontmatter.footerFeaturedImage,
											alt: 'Descola Holder',
										}}
									/>
								) : null}

								<div>
									<h4>{eachPost.node.frontmatter.title}</h4>
									<p>{excerpt(eachPost.node.excerpt, 50, '...')}</p>
								</div>
							</Link>
						)
					})}
				</div>
				<div className="footer-column-nav">
					<h3>Navegue</h3>
					<nav>
						<ul className="footer-menu">
							<li>
								<a href="https://descola.org/cursos">Cursos</a>
							</li>
							<li>
								<a
									href="https://blog.descola.org/"
									rel="noopener noreferrer"
									target="_blank"
								>
									Blog
								</a>
							</li>
							<li>
								<a href="https://descola.org/empresas">Para empresas</a>
							</li>
							<li>
								<a href="https://descola.org/contato">Contato</a>
							</li>
							<li>
								<a href="https://descola.org/faq">FAQ</a>
							</li>
							<li>
								<a href="https://descola.org/imprensa">Imprensa</a>
							</li>
							<li>
								<a href="https://descola.org/termos-de-uso">Termos de Uso</a>
							</li>
						</ul>
					</nav>
				</div>
			</Layout>
		</Layout>
	)
}

export default FooterBlock
