import * as React from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '..'
import { DivStyled, FooterStyled, LiStyled, SpanStyled, UlStyled, AStyled } from './footer.component.style'

export const Footer = () => {
  return (
        <FooterStyled>
            <DivStyled>
                <a href="/" target="_blank" rel="">
                    <FacebookIcon />
                </a>

                <a href="/" target="_blank" rel="">
                    <InstagramIcon />
                </a>

                <a href="/" target="_blank" rel="">
                    <TwitterIcon />
                </a>

                <a href="/" target="_blank" rel="">
                    <YoutubeIcon />
                </a>
            </DivStyled>

            <UlStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Idioma e legendas</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Imprensa</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Privacidade</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Entre em contato</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Audiodescrição</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Relações com investidores</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Avisos legais</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Centro de ajuda</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Carreiras</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Preferências de cookies</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Cartão pré-pago</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Termos de uso</SpanStyled>
                    </AStyled>
                </LiStyled>
                <LiStyled>
                    <AStyled>
                        <SpanStyled>Informações corporativa</SpanStyled>
                    </AStyled>
                </LiStyled>
            </UlStyled>
        </FooterStyled>
  )
}
