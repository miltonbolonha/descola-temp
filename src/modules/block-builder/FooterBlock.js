import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout'

import excerpt from '../../tools/excerpt'

import { BsHeadset, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import layoutYAML from '@Content/main.yaml'
// const { logo_url, link_01 } = layoutYAML.layout02

// import { useContentConfigs } from '../../tools/useContentConfigs'
// import { useTagsWidgets } from '../../tools/useTagsWidget'
const FooterBlock = ({ footerLogo, featurePosts }) => {
	// const { footer } = useContentConfigs().footer_content
	// const tags = useTagsWidgets()
	// console.log(tags)
	const { footer } = layoutYAML
	const { col1, col2, col3 } = footer
	const about_phone = col1.about_phone
	const about_phone_country_prefix = col1.about_phone_country_prefix
	const about_phone_state_prefix = col1.about_phone_state_prefix
	return (
		<footer id="site-footer">
			<Layout type="ROW" opt={{ bgColor: '#222', classes: 'footer' }}>
				<Layout
					type="ROW"
					opt={{ isBoxed: true, numColumns: 4, classes: 'footer-columns' }}
				>
					{col1?.about_widget ? (
						<div className="footer-infos">
							{col1.about_heading && col1.about_widget ? (
								<h3>{col1.about_heading}</h3>
							) : null}
							{col1.about_p?.map((text, i) => (
								<p key={i}>{text.p}</p>
							))}
							<p className="footer-headset">
								<BsHeadset />
								<a
									href={`tel:${about_phone_country_prefix}${about_phone_state_prefix}${about_phone}`}
								>
									{about_phone_country_prefix}
									{` `}${about_phone_state_prefix}
									{` `}
									{about_phone}
								</a>
							</p>
							{footerLogo ? <p className="footer-logo">{footerLogo}</p> : null}
						</div>
					) : null}

					{col2.footer_tags_widget ? (
						<div className="tag-list-wrapper">
							{col2.footer_tags_heading && col2.footer_tags_widget ? (
								<h3>{col2.footer_tags_heading}</h3>
							) : null}
							<a href="https://descola.org/cursos?tag=gestao" className="tag">
								Gestão
							</a>
							<a
								href="https://descola.org/cursos?tag=empregabilidade"
								className="tag"
							>
								Empregabilidade
							</a>
							<a
								href="https://descola.org/cursos?tag=colaboracao"
								className="tag"
							>
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
							<a
								href="https://descola.org/cursos?tag=engajamento"
								className="tag"
							>
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
							<a
								href="https://descola.org/cursos?tag=lideranca"
								className="tag"
							>
								Liderança
							</a>
							<a href="https://descola.org/cursos?tag=trabalho" className="tag">
								Trabalho
							</a>
							{/* </div> */}

							{col2.social_media_widget ? (
								<div className="footer-social-icons">
									{col2.social_media_heading && col2.social_media_widget ? (
										<h3>{col2.social_media_heading}</h3>
									) : null}
									<a
										href="https://br.linkedin.com/school/descola"
										rel="noopener noreferrer"
										target="_blank"
										aria-label="Linkedin profile (opens in a new window)"
										className="btn btn-primary btn-icon"
									>
										<FaLinkedinIn />
									</a>
									<a
										href="https://www.instagram.com/descolagram"
										rel="noopener noreferrer"
										target="_blank"
										aria-label="Instagram profile (opens in a new window)"
										className="btn btn-primary btn-icon"
									>
										<BsInstagram />
									</a>
									<a
										href="https://www.facebook.com/descolasp"
										rel="noopener noreferrer"
										target="_blank"
										aria-label="Facebook profile (opens in a new window)"
										className="btn btn-primary btn-icon"
									>
										<FaFacebookF />
									</a>
								</div>
							) : null}
						</div>
					) : null}

					{featurePosts.length > 0 ? (
						<div className="footer-column-blog">
							{col3.featured_posts_heading && col3.featured_posts_widget ? (
								<h3>{col3.featured_posts_heading}</h3>
							) : null}
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
													queryCard:
														eachPost.node.frontmatter.footerFeaturedImage,
													alt: eachPost.node.frontmatter.title,
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
					) : null}

					<div className="footer-column-nav">
						<h3>Navegue</h3>
						<nav
							itemScope="itemScope"
							itemType="http://schema.org/SiteNavigationElement"
						>
							<ul className="footer-menu" role="menu">
								<li>
									<a
										href="https://descola.org/cursos"
										role="menuitem"
										itemProp="url"
										title="Cursos da Descola"
										aria-label="Acesso a página: Cursos, no websítio da Descola"
									>
										Cursos
									</a>
								</li>
								<li>
									<Link
										to="/"
										role="menuitem"
										itemProp="url"
										title="Blog da Descola"
										aria-label="Acesso a página: Blog, no websítio da Descola"
									>
										Blog
									</Link>
								</li>
								<li>
									<a
										href="https://descola.org/empresas"
										role="menuitem"
										itemProp="url"
										title="Para Empresas"
										aria-label="Acesso a página: Para empresas, no websítio da Descola"
									>
										Para empresas
									</a>
								</li>
								<li>
									<a
										href="https://descola.org/contato"
										role="menuitem"
										itemProp="url"
										title="Contato da Descola"
										aria-label="Acesso a página: Contato, no websítio da Descola"
									>
										Contato
									</a>
								</li>
								<li>
									<a
										href="https://descola.org/faq"
										role="menuitem"
										itemProp="url"
										title="FAQ da Descola"
										aria-label="Acesso a página: FAQ, no websítio da Descola"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="https://descola.org/imprensa"
										role="menuitem"
										itemProp="url"
										title="Para a Imprensa"
										aria-label="Acesso a página: Imprensa, no websítio da Descola"
									>
										Imprensa
									</a>
								</li>
								<li>
									<a
										href="https://descola.org/termos-de-uso"
										role="menuitem"
										itemProp="url"
										title="Termos de Uso da Descola"
										aria-label="Acesso a página: Termos de Uso, no websítio da Descola"
									>
										Termos de Uso
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</Layout>
			</Layout>
		</footer>
	)
}

export default FooterBlock
