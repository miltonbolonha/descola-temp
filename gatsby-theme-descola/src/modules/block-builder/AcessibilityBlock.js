import React from 'react'
import { Link } from 'gatsby'
const AccessibilityBlock = () => (
  <>
    <Link
      data-trackable="a11y-skip-to-help"
      className="non-layout"
      to="/accessibility"
      tabIndex="0"
    >
      Acessibilidade Primeiro
    </Link>
    <Link
      data-trackable="a11y-skip-to-navigation"
      className="non-layout"
      to="/#site-navigation"
      tabIndex="0"
    >
      Ir para o menu de navegação
    </Link>
    <Link
      data-trackable="a11y-skip-to-content"
      className="non-layout"
      to="#site-content"
      tabIndex="0"
    >
      Ir para o conteúdo
    </Link>
    <Link
      data-trackable="a11y-skip-to-footer"
      className="non-layout"
      to="#site-footer"
      tabIndex="0"
    >
      Ir para informações de rodapé
    </Link>
  </>
)

export default AccessibilityBlock
