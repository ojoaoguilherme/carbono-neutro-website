import React from 'react';
import Head from 'next/head';

export default function Route() {
  React.useEffect(() => {
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
    function onLoad() {
      Array.from(document.getElementsByTagName('a'), a => {
        a.addEventListener('click', () => {
          if (isNavOpen()) {
            closeNav();
          }
        });
      });
    }
  });
  function isNavOpen() {
    const nav = document.getElementById('mobile_navigation');
    const isOpen = !nav.classList.contains('hidden');
    return isOpen;
  }
  function closeNav() {
    const nav = document.getElementById('mobile_navigation');
    const icon = document.getElementById('mobile_toggle_icon');
    nav.classList.add('hidden');
    icon.textContent = 'menu';
    document.body.style.overflow = '';
  }
  function openNav() {
    const nav = document.getElementById('mobile_navigation');
    const icon = document.getElementById('mobile_toggle_icon');
    nav.classList.remove('hidden');
    icon.textContent = 'close';
    document.body.style.overflow = 'hidden';
  }
  function toggleNav() {
    const nav = document.getElementById('mobile_navigation');
    const icon = document.getElementById('mobile_toggle_icon');
    if (isNavOpen()) {
      closeNav();
    } else {
      openNav();
    }
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Carbono Neutro APP</title>
        <meta name="author" content="carbononeutro.app" />
        <meta property="og:url" content="https://carbononeutro.app/" />
        <meta property="og:site_name" content="carbononeutro.app" />
        <meta property="og:title" content="carbononeutro.app" />
        <meta
          property="og:description"
          content=" 
  Carbono Neutro é um aplicativo que tem como objetivo despertar a consciência ecológica e a sustentabilidade "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.vimeocdn.com/video/607725486-06a5994f23745ca6fead2b215972920fc74710b76d396aebcddbea732fcc667e-d_640"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="carbononeutro.app" />
        <meta
          name="twitter:description"
          content="Despertar consciência ambiental é um dever de todos.🌍"
        />
        <meta
          name="twitter:image"
          content="https://i.vimeocdn.com/video/607725486-06a5994f23745ca6fead2b215972920fc74710b76d396aebcddbea732fcc667e-d_640"
        />
        <meta name="twitter:image:alt" content="carbononeutro.app" />
        <meta name="theme-color" content="#00805b" />
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,400,0,0&display=block"
        />
        <ExternalScripts />
      </Head>

      <div id="page_top" className="border-b border-gray-2">
        <header className="desktop-header">
          <div className="flex items-center" style={{ gap: '12px' }}>
            <a href="/" className="flex items-center justify-center">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                width="46"
                height="46"
              />
            </a>
            <h1 className="header-title">Eco Carbono Neutro</h1>
          </div>

          <nav className="flex items-center" style={{ gap: '20px' }}>
            <a href="#sobre" className="header-nav-link">
              Sobre o APP
            </a>
            <a href="#esg" className="header-nav-link">
              ESG
            </a>
            <a href="#cpr" className="header-nav-link">
              CPR Verde
            </a>
            <a href="#informacoes" className="header-nav-link">
              Informações
            </a>
            <a href="#" className="button">
              Baixe o APP
            </a>
          </nav>
        </header>

        {/* MOBILE */}
        <header className="mobile-header">
          <div
            className="grid items-center"
            style={{ gridTemplateColumns: 'auto 1fr auto', gap: '12px' }}
          >
            <a href="/" className="flex items-center justify-center">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                width="46"
                height="46"
              />
            </a>
            <h1 className="header-title text-center">Eco Carbono Neutro</h1>
            <button
              type="button"
              style={{
                appearance: 'none',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
              onClick={toggleNav}
            >
              <span
                id="mobile_toggle_icon"
                className="material-symbols-outlined"
                style={{ fontSize: '30px' }}
              >
                menu
              </span>
            </button>
          </div>
        </header>

        <div id="mobile_navigation" className="mobile-header-nav hidden">
          <a href="#sobre" className="header-nav-link">
            Sobre o APP
          </a>
          <a href="#esg" className="header-nav-link">
            ESG
          </a>
          <a href="#cpr" className="header-nav-link">
            CPR Verde
          </a>
          <a href="#informacoes" className="header-nav-link">
            Informações
          </a>
          <a href="#" className="button w-full">
            Baixe o APP
          </a>
        </div>
      </div>
      <div
        id="layout-a-4-caf-3-cd-8-d-64-4-c-25-8091-b-4-e-68-aa-5-f-214"
        class="layout layout-layout layout-layout-layout-13 locale-pt-BR lang-pt"
      >
        <div
          data-ux="Page"
          id="page-39782"
          class="x-el x-el-div x-el c1-1 c1-2 c1-3 c1-4 c1-5 c1-6 c1-7 c1-8 c1-9 c1-a c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
        >
          <div
            data-ux="Block"
            class="x-el x-el-div page-inner c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
          >
            <div
              id="71a5b96d-5d09-4403-9988-2116efa4263f"
              class="widget widget-header widget-header-header-9"
            >
              <div
                data-ux="Header"
                role="main"
                data-aid="HEADER_WIDGET"
                id="n-39783"
                class="x-el x-el-div x-el x-el c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-h c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    data-aid="HEADER_SECTION"
                    class="x-el x-el-section c1-1 c1-2 c1-h c1-i c1-j c1-k c1-l c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="HeaderMedia"
                      class="x-el x-el-div c1-1 c1-2 c1-o c1-b c1-c c1-d c1-e c1-f c1-g"
                    >
                      <div
                        data-ux="Block"
                        class="x-el x-el-div c1-1 c1-2 c1-p c1-4 c1-q c1-k c1-r c1-s c1-t c1-u c1-b c1-c c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="Wrapper"
                          class="x-el x-el-div c1-1 c1-2 c1-v c1-o c1-w c1-x c1-p c1-4 c1-k c1-b c1-c c1-d c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Element"
                            id="bs-1"
                            class="x-el x-el-div c1-1 c1-2 c1-p c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <span
                              data-ux="Element"
                              class="x-el x-el-span c2-1 c2-2 c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
                            >
                              <img
                                src="https://i.vimeocdn.com/video/607725486-06a5994f23745ca6fead2b215972920fc74710b76d396aebcddbea732fcc667e-d"
                                alt="https://i.vimeocdn.com/video/607725486-06a5994f23745ca6fead2b215972920fc74710b76d396aebcddbea732fcc667e-d"
                                data-ux="HeaderMediaImage"
                                data-aid="HEADER_VIDEO_EMBED_FILL_POSTER"
                                class="x-el x-el-img c2-1 c2-2 c2-g c2-h c2-i c2-j c2-k c2-l c2-m c2-n c2-o c2-p c2-q c2-r c2-s c2-t c2-u c2-v c2-w c2-x c2-y c2-z c2-10 c2-11 c2-12 c2-13 c2-14 c2-15 c2-16 c2-17 c2-3 c2-4 c2-18 c2-5 c2-6 c2-7 c2-8"
                              />
                              <div
                                data-ux="Block"
                                class="x-el x-el-div c2-1 c2-2 c2-y c2-19 c2-3 c2-4 c2-1a c2-5 c2-6 c2-7 c2-8"
                              >
                                <iframe
                                  data-ux="Embed"
                                  id="embed-iframe-1"
                                  src="https://player.vimeo.com/video/195455837?autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0"
                                  frameborder="0"
                                  allow="autoplay; fullscreen"
                                  allowfullscreen=""
                                  loading="lazy"
                                  data-aid="HEADER_VIDEO_EMBED"
                                  class="x-el x-el-iframe c2-1 c2-2 c2-u c2-1b c2-1c c2-1d c2-g c2-y c2-1e c2-1f c2-1g c2-1h c2-1n c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
                                ></iframe>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-ux="Block"
                        class="x-el x-el-div c1-1 c1-2 c1-h c1-1r c1-q c1-w c1-x c1-1s c1-1m c1-b c1-c c1-d c1-e c1-f c1-g"
                      ></div>
                      <div
                        data-ux="Block"
                        class="x-el x-el-div c1-1 c1-2 c1-o c1-1t c1-1u c1-1v c1-1w c1-b c1-c c1-d c1-1x c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="Block"
                          class="x-el x-el-div c1-1 c1-2 c1-4 c1-1y c1-1c c1-1z c1-1u c1-20 c1-r c1-t c1-b c1-c c1-d c1-21 c1-22 c1-23 c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Container"
                            class="x-el x-el-div c1-1 c1-2 c1-24 c1-25 c1-26 c1-27 c1-y c1-1t c1-b c1-c c1-28 c1-d c1-29 c1-2a c1-2b c1-2c c1-2d c1-e c1-2e c1-f c1-2f c1-g"
                          >
                            <div
                              data-ux="Hero"
                              class="x-el x-el-div c1-1 c1-2 c1-o c1-r c1-t c1-2g c1-2h c1-4 c1-1t c1-20 c1-1u c1-2i c1-b c1-c c1-d c1-2j c1-2k c1-2l c1-2m c1-2n c1-2o c1-2p c1-2q c1-e c1-f c1-g"
                            >
                              <div
                                data-ux="Block"
                                class="x-el x-el-div c1-1 c1-2 c1-2r c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  id="tagline-container-39787"
                                  defaultfontsize="xxlarge"
                                  class="x-el x-el-div c1-1 c1-2 c1-2s c1-2t c1-v c1-o c1-y c1-2u c1-2v c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <h1
                                    role="heading"
                                    aria-level="1"
                                    data-ux="Tagline"
                                    maxlines="4"
                                    data-aid="HEADER_TAGLINE_RENDERED"
                                    id="dynamic-tagline-39788"
                                    containerid="tagline-container-39787"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-h1 c1-1 c1-2 c1-2s c1-2t c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-2x c1-y c1-2y c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-36 c1-37 c1-38 c1-39"
                                    data-last-size="48px"
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </h1>
                                  <span
                                    role="heading"
                                    aria-level="NaN"
                                    data-ux="scaler"
                                    data-size="xxlarge"
                                    data-scaler-id="scaler-tagline-container-39787"
                                    aria-hidden="true"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-span c1-1 c1-2 c1-3a c1-3b c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-y c1-1c c1-3c c1-q c1-2u c1-3d c1-x c1-2x c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-36 c1-37 c1-38 c1-39"
                                    style={{ display: 'none' }}
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </span>
                                  <span
                                    role="heading"
                                    aria-level="NaN"
                                    data-ux="scaler"
                                    data-size="xxxlarge"
                                    data-scaler-id="scaler-tagline-container-39787"
                                    aria-hidden="true"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-span c1-1 c1-2 c1-3a c1-3b c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-y c1-1c c1-3c c1-q c1-2u c1-3d c1-x c1-3e c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-3f c1-3g c1-3h c1-3i"
                                    style={{ display: 'none' }}
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </span>
                                  <span
                                    role="heading"
                                    aria-level="NaN"
                                    data-ux="scaler"
                                    data-size="xlarge"
                                    data-scaler-id="scaler-tagline-container-39787"
                                    aria-hidden="true"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-span c1-1 c1-2 c1-3a c1-3b c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-y c1-1c c1-3c c1-q c1-2u c1-3d c1-x c1-3j c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-3k c1-3l c1-3m c1-3n"
                                    style={{ display: 'none' }}
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </span>
                                </div>
                              </div>
                              <div
                                data-ux="Block"
                                class="x-el x-el-div c1-1 c1-2 c1-2r c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  data-ux="HeroText"
                                  data-aid="HEADER_TAGLINE2_RENDERED"
                                  data-typography="BodyBeta"
                                  class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-y c1-3p c1-3q c1-3r c1-3s c1-b c1-30 c1-3t c1-31 c1-3u c1-3v c1-3w c1-3x x-rt"
                                >
                                  <p style={{ margin: 0 }}>
                                    <span>&nbsp;</span>
                                  </p>
                                  <p style={{ margin: 0 }}>
                                    <span>
                                      Carbono Neutro é um aplicativo que tem
                                      como objetivo despertar a consciência
                                      ecológica e a sustentabilidade&nbsp;
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div
                                data-ux="Block"
                                class="x-el x-el-div c1-1 c1-2 c1-48 c1-49 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  data-ux="Block"
                                  class="x-el x-el-div c1-1 c1-2 c1-4 c1-1t c1-4a c1-4b c1-4c c1-20 c1-b c1-c c1-4d c1-4e c1-4f c1-d c1-2a c1-e c1-f c1-g"
                                >
                                  <div style={{ maxWidth: '100%' }}>
                                    <a
                                      data-ux-btn="primary"
                                      data-ux="ButtonPrimary"
                                      color="HIGHCONTRAST"
                                      data-aid="HEADER_CTA_BTN"
                                      href="/"
                                      target=""
                                      data-tccl="ux2.header.cta_button.click,click"
                                      data-page="287f429b-ed6e-416e-aa2a-319409973b79"
                                      data-typography="ButtonAlpha"
                                      class="x-el x-el-a c1-4g c1-4h c1-4i c1-4j c1-4k c1-1z c1-20 c1-2i c1-4l c1-2t c1-2s c1-o c1-y c1-4 c1-4m c1-4n c1-4o c1-4p c1-4q c1-4r c1-4s c1-3 c1-b c1-42 c1-4t c1-4u c1-4v c1-4w c1-4x c1-4y c1-4z c1-50"
                                    >
                                      Baixar aplicativo
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="Block"
                          class="x-el x-el-div c1-1 c1-2 c1-4 c1-1y c1-1t c1-1z c1-1u c1-20 c1-r c1-t c1-b c1-c c1-d c1-21 c1-22 c1-51 c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Container"
                            class="x-el x-el-div c1-1 c1-2 c1-24 c1-25 c1-26 c1-27 c1-y c1-1t c1-b c1-c c1-28 c1-d c1-29 c1-2a c1-2b c1-2c c1-2d c1-e c1-2e c1-f c1-2f c1-g"
                          >
                            <div
                              data-ux="Hero"
                              class="x-el x-el-div c1-1 c1-2 c1-o c1-r c1-t c1-2g c1-2h c1-4 c1-1t c1-20 c1-1u c1-2i c1-b c1-c c1-d c1-2j c1-2k c1-2l c1-2m c1-2n c1-2o c1-2p c1-2q c1-e c1-f c1-g"
                            >
                              <div
                                data-ux="Block"
                                class="x-el x-el-div c1-1 c1-2 c1-2r c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  id="tagline-container-39789"
                                  defaultfontsize="xxlarge"
                                  class="x-el x-el-div c1-1 c1-2 c1-2s c1-2t c1-v c1-o c1-y c1-2u c1-2v c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <h1
                                    role="heading"
                                    aria-level="1"
                                    data-ux="Tagline"
                                    maxlines="4"
                                    data-aid="HEADER_TAGLINE_RENDERED"
                                    id="dynamic-tagline-39790"
                                    containerid="tagline-container-39789"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-h1 c1-1 c1-2 c1-2s c1-2t c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-2x c1-y c1-2y c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-36 c1-37 c1-38 c1-39"
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </h1>
                                  <span
                                    role="heading"
                                    aria-level="NaN"
                                    data-ux="scaler"
                                    data-size="xxlarge"
                                    data-scaler-id="scaler-tagline-container-39789"
                                    aria-hidden="true"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-span c1-1 c1-2 c1-3a c1-3b c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-y c1-1c c1-3c c1-q c1-2u c1-3d c1-x c1-2x c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-36 c1-37 c1-38 c1-39"
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </span>
                                  <span
                                    role="heading"
                                    aria-level="NaN"
                                    data-ux="scaler"
                                    data-size="xxxlarge"
                                    data-scaler-id="scaler-tagline-container-39789"
                                    aria-hidden="true"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-span c1-1 c1-2 c1-3a c1-3b c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-y c1-1c c1-3c c1-q c1-2u c1-3d c1-x c1-3e c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-3f c1-3g c1-3h c1-3i"
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </span>
                                  <span
                                    role="heading"
                                    aria-level="NaN"
                                    data-ux="scaler"
                                    data-size="xlarge"
                                    data-scaler-id="scaler-tagline-container-39789"
                                    aria-hidden="true"
                                    data-typography="HeadingAlpha"
                                    class="x-el x-el-span c1-1 c1-2 c1-3a c1-3b c1-2v c1-24 c1-25 c1-r c1-t c1-2w c1-y c1-1c c1-3c c1-q c1-2u c1-3d c1-x c1-3j c1-2z c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-3k c1-3l c1-3m c1-3n"
                                  >
                                    Despertar consciência ambiental é um dever
                                    de todos.🌍
                                  </span>
                                </div>
                              </div>
                              <div
                                data-ux="Block"
                                class="x-el x-el-div c1-1 c1-2 c1-2r c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  data-ux="HeroText"
                                  data-aid="HEADER_TAGLINE2_RENDERED"
                                  data-typography="BodyBeta"
                                  class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-y c1-3p c1-3q c1-3r c1-3s c1-b c1-30 c1-3t c1-31 c1-3u c1-3v c1-3w c1-3x x-rt"
                                >
                                  <p style={{ margin: 0 }}>
                                    <span>&nbsp;</span>
                                  </p>
                                  <p style={{ margin: 0 }}>
                                    <span>
                                      Carbono Neutro é um aplicativo que tem
                                      como objetivo despertar a consciência
                                      ecológica e a sustentabilidade&nbsp;
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div
                                data-ux="Block"
                                class="x-el x-el-div c1-1 c1-2 c1-48 c1-49 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  data-ux="Block"
                                  class="x-el x-el-div c1-1 c1-2 c1-4 c1-1t c1-4a c1-4b c1-4c c1-20 c1-b c1-c c1-4d c1-4e c1-4f c1-d c1-2a c1-e c1-f c1-g"
                                >
                                  <div style={{ maxWidth: '100%' }}>
                                    <a
                                      data-ux-btn="primary"
                                      data-ux="ButtonPrimary"
                                      color="HIGHCONTRAST"
                                      data-aid="HEADER_CTA_BTN"
                                      href="/"
                                      target=""
                                      data-tccl="ux2.header.cta_button.click,click"
                                      data-page="287f429b-ed6e-416e-aa2a-319409973b79"
                                      data-typography="ButtonAlpha"
                                      class="x-el x-el-a c1-4g c1-4h c1-4i c1-4j c1-4k c1-1z c1-20 c1-2i c1-4l c1-2t c1-2s c1-o c1-y c1-4 c1-4m c1-4n c1-4o c1-4p c1-4q c1-4r c1-4s c1-3 c1-b c1-42 c1-4t c1-4u c1-4v c1-4w c1-4x c1-4y c1-4z c1-50"
                                    >
                                      Baixar aplicativo
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="b8964550-6169-4900-9861-ca1dae4a62af"
              class="widget widget-content widget-content-content-12"
            >
              <div
                data-ux="Widget"
                role="region"
                id="b8964550-6169-4900-9861-ca1dae4a62af"
                class="x-el x-el-div x-el c1-1 c1-2 c1-h c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-h c1-i c1-j c1-52 c1-b c1-c c1-m c1-n c1-53 c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Block"
                      data-aid="MARQUEE_WRAPPER_RENDERED"
                      class="x-el x-el-div c1-1 c1-2 c1-54 c1-55 c1-56 c1-57 c1-58 c1-59 c1-5a c1-5b c1-5c c1-5d c1-5e c1-5f c1-5g c1-5h c1-5i c1-5j c1-5k c1-5l c1-b c1-c c1-d c1-e c1-f c1-g"
                    >
                      <div
                        data-ux="Block"
                        id="marquee_39791"
                        data-scrolling="true"
                        class="x-el x-el-div c1-1 c1-2 c1-4 c1-2g c1-2h c1-b c1-c c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="Block"
                          id="marquee_39791_banner"
                          data-aid="MARQUEE_BANNER_RENDERED"
                          data-name="banner"
                          class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          style={{ animationDuration: '42.54s' }}
                        >
                          <div
                            data-ux="Block"
                            id="marquee_39791_content"
                            data-name="content"
                            aria-hidden="false"
                            class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <h3
                              role="heading"
                              aria-level="3"
                              data-ux="HeadingMiddle"
                              data-aid="CONTENT_SECTION_TITLE_RENDERED"
                              data-typography="HeadingGamma"
                              data-font-scaled="true"
                              class="x-el x-el-h3 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g"
                            >
                              "O futuro do nosso planeta depende das escolhas
                              sustentáveis que fazemos hoje."
                            </h3>
                          </div>
                          <div
                            data-ux="Block"
                            id="marquee_39791_clones"
                            data-name="clones"
                            aria-hidden="true"
                            class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              data-name="content"
                              class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <h3
                                role="heading"
                                aria-level="3"
                                data-ux="HeadingMiddle"
                                data-aid="CONTENT_SECTION_TITLE_RENDERED"
                                data-typography="HeadingGamma"
                                data-font-scaled="true"
                                class="x-el x-el-h3 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g"
                              >
                                "O futuro do nosso planeta depende das escolhas
                                sustentáveis que fazemos hoje."
                              </h3>
                            </div>
                            <div
                              data-ux="Block"
                              data-name="content"
                              class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <h3
                                role="heading"
                                aria-level="3"
                                data-ux="HeadingMiddle"
                                data-aid="CONTENT_SECTION_TITLE_RENDERED"
                                data-typography="HeadingGamma"
                                data-font-scaled="true"
                                class="x-el x-el-h3 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g"
                              >
                                "O futuro do nosso planeta depende das escolhas
                                sustentáveis que fazemos hoje."
                              </h3>
                            </div>
                            <div
                              data-ux="Block"
                              data-name="content"
                              class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <h3
                                role="heading"
                                aria-level="3"
                                data-ux="HeadingMiddle"
                                data-aid="CONTENT_SECTION_TITLE_RENDERED"
                                data-typography="HeadingGamma"
                                data-font-scaled="true"
                                class="x-el x-el-h3 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g"
                              >
                                "O futuro do nosso planeta depende das escolhas
                                sustentáveis que fazemos hoje."
                              </h3>
                            </div>
                            <div
                              data-ux="Block"
                              data-name="content"
                              class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <h3
                                role="heading"
                                aria-level="3"
                                data-ux="HeadingMiddle"
                                data-aid="CONTENT_SECTION_TITLE_RENDERED"
                                data-typography="HeadingGamma"
                                data-font-scaled="true"
                                class="x-el x-el-h3 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g"
                              >
                                "O futuro do nosso planeta depende das escolhas
                                sustentáveis que fazemos hoje."
                              </h3>
                            </div>
                            <div
                              data-ux="Block"
                              data-name="content"
                              class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <h3
                                role="heading"
                                aria-level="3"
                                data-ux="HeadingMiddle"
                                data-aid="CONTENT_SECTION_TITLE_RENDERED"
                                data-typography="HeadingGamma"
                                data-font-scaled="true"
                                class="x-el x-el-h3 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g"
                              >
                                "O futuro do nosso planeta depende das escolhas
                                sustentáveis que fazemos hoje."
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="92531a26-1aa5-436e-97d2-c3a7b7f216e1"
              class="widget widget-about widget-about-about-1"
            >
              <div
                data-ux="Widget"
                role="region"
                id="92531a26-1aa5-436e-97d2-c3a7b7f216e1"
                class="x-el x-el-div x-el c1-1 c1-2 c1-3 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Container"
                      class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <h2
                        role="heading"
                        aria-level="2"
                        data-ux="SectionHeading"
                        data-aid="ABOUT_SECTION_TITLE_RENDERED"
                        data-typography="HeadingBeta"
                        class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5n c1-u c1-25 c1-r c1-5o c1-2i c1-2z c1-2x c1-5p c1-31 c1-36 c1-2o c1-2b c1-37 c1-38 c1-39"
                      >
                        <span
                          data-ux="Element"
                          class="x-el x-el-span c1-5q c1-41 c1-5r c1-5s c1-5t"
                        >
                          Tenha acesso a empresas sustentáveis em nossa
                          comunidade.
                        </span>
                        <div
                          data-ux="Block"
                          class="x-el x-el-div c1-4 c1-5u c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                        >
                          <hr
                            aria-hidden="true"
                            role="separator"
                            data-ux="SectionHeadingHR"
                            class="x-el x-el-hr c1-5v c1-5w c1-11 c1-48 c1-t c1-5x c1-2y c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                          />
                        </div>
                      </h2>
                      <div
                        data-ux="ContentCards"
                        class="x-el x-el-div x-el c1-1 c1-2 c1-2i c1-20 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-61 c1-62 c1-b c1-c c1-63 c1-64 c1-65 c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            index="0"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-6o c1-6p c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image1.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="ContentCardImageThumbnail"
                                  overlayalpha="0"
                                  data-aid="ABOUT_IMAGE_RENDERED0"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-6q c1-1h c1-1b c1-b c1-c c1-6r c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="ABOUT_HEADLINE_RENDERED0"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                Academia ESG
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                App Carbono Neutro
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                App Carbono Neutro
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="ABOUT_DESCRIPTION_RENDERED0"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Você terá acesso a Videoaulas, que vão te
                                  ajudar a entender sobre Energia Renovável,
                                  Sustentabilidade, Economia Verde,
                                  Oportunidades de trabalho no cenário
                                  global.&nbsp;
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            index="1"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-6o c1-6p c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image2.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="ContentCardImageThumbnail"
                                  overlayalpha="0"
                                  data-aid="ABOUT_IMAGE_RENDERED1"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-6q c1-1h c1-1b c1-b c1-c c1-6r c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="ABOUT_HEADLINE_RENDERED1"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                App Carbono Neutro
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                App Carbono Neutro
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                App Carbono Neutro
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="ABOUT_DESCRIPTION_RENDERED1"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Um super aplicativo que tem como principal
                                  objetivo despertar a consciência ecológica e a
                                  sustentabilidade em toda classe social, por
                                  que a responsabilidade do nosso planeta está
                                  nas mãos de todos.&nbsp;
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            index="2"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-6o c1-6p c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image3.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  data-ux="ContentCardImageThumbnail"
                                  overlayalpha="0"
                                  data-aid="ABOUT_IMAGE_RENDERED2"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-6q c1-1h c1-1b c1-b c1-c c1-6r c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="ABOUT_HEADLINE_RENDERED2"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                Comunidade
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                App Carbono Neutro
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                Comunidade
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="ABOUT_DESCRIPTION_RENDERED2"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Ao aderir a comunidade Carbono Neutro, você
                                  embarca em um ecossistema repleto de
                                  recompensas, oferecidas por uma rede de lojas
                                  e estabelecimentos focados em salvar o
                                  planeta.&nbsp;
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="sobre"
              class="widget widget-introduction widget-introduction-introduction-2"
            >
              <div
                data-ux="Widget"
                role="region"
                id="c5ada56d-24db-4d49-975d-82a8938fb8bc"
                class="x-el x-el-div x-el c1-1 c1-2 c1-h c1-k c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-h c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="SplitLayout"
                      data-aid="SPLIT_LAYOUT_RENDERED"
                      class="x-el x-el-div x-el c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <div
                        data-ux="Grid"
                        class="x-el x-el-div c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-61 c1-62 c1-b c1-c c1-63 c1-64 c1-65 c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-7s c1-b c1-c c1-6d c1-6e c1-6f c1-6g c1-d c1-7t c1-7u c1-7v c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Block"
                            class="x-el x-el-div c1-1 c1-2 c1-o c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <picture
                              data-lazyimg="true"
                              class="x-el x-el-picture c1-1 c1-2 c1-4 c1-p c1-2i c1-7w c1-1i c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <source
                                media="(max-width: 450px)"
                                data-lazyimg="true"
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 451px) and (max-width: 767px)"
                                data-lazyimg="true"
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                data-lazyimg="true"
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 1024px) and (max-width: 1279px)"
                                data-lazyimg="true"
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 1280px) and (max-width: 1535px)"
                                data-lazyimg="true"
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 1536px)"
                                data-lazyimg="true"
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <img
                                data-ux="Image"
                                data-lazyimg="true"
                                data-srclazy="/assets/images/image4.webp"
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                data-aid="IMAGE_RENDERED"
                                class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-7x c1-1h c1-b c1-c c1-7y c1-d c1-e c1-f c1-g"
                              />
                            </picture>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-b c1-c c1-6d c1-6e c1-6f c1-6g c1-d c1-7t c1-7u c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Block"
                            class="x-el x-el-div c1-1 c1-2 c1-4 c1-p c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="VerticalBox"
                              class="x-el x-el-div x-el c1-1 c1-2 c1-p c1-2u c1-1t c1-7z c1-80 c1-1u c1-81 c1-2g c1-2h c1-b c1-c c1-82 c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <div
                                data-ux="Group"
                                class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <h2
                                  role="heading"
                                  aria-level="2"
                                  data-ux="HeadingMajor"
                                  data-aid="SECTION_TITLE_RENDERED"
                                  data-typography="HeadingBeta"
                                  class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-81 c1-1d c1-1e c1-1f c1-1g c1-2z c1-2x c1-30 c1-31 c1-1i c1-36 c1-83 c1-84 c1-85 c1-86 c1-87 c1-21 c1-88 c1-22 c1-89 c1-37 c1-38 c1-39"
                                >
                                  App Carbono Neutro
                                </h2>
                                <div
                                  data-ux="HorizontalBox"
                                  class="x-el x-el-div x-el c1-1 c1-2 c1-8a c1-4 c1-1t c1-1w c1-80 c1-48 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <div
                                    data-ux="Text"
                                    data-aid="DESCRIPTION_TEXT"
                                    fontscalemultiplier="0.88"
                                    data-typography="BodyBeta"
                                    data-font-scaled="true"
                                    class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-y c1-b c1-30 c1-8b c1-31 c1-8c c1-8d c1-8e c1-8f x-rt"
                                  >
                                    <p style={{ margin: 0 }}>
                                      <span>
                                        Cada pegada que você neutraliza no App,
                                        se converte em um ponto. Cada 100 pontos
                                        podem ser trocados por uma TON de
                                        crédito de carbono ou utilizado como
                                        crédito nas redes credenciadas da
                                        Comunidade Carbono Neutro.&nbsp;
                                      </span>
                                    </p>
                                    <p style={{ margin: 0 }}>
                                      <span>
                                        Você também ganha pontos ao participar
                                        das pesquisas do app, nossa comunidade
                                        está em constante movimento&nbsp;
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  data-ux="Block"
                                  class="x-el x-el-div c1-1 c1-2 c1-8g c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <a
                                    data-ux-btn="secondary"
                                    data-ux="ButtonSecondary"
                                    data-aid="CTA_BUTTON_RENDERED"
                                    href="/"
                                    target=""
                                    data-tccl="ux2.INTRODUCTION.introduction2.Group.Default.Button.Secondary.39801.click,click"
                                    data-page="287f429b-ed6e-416e-aa2a-319409973b79"
                                    data-typography="ButtonAlpha"
                                    class="x-el x-el-a c1-4g c1-4h c1-4i c1-4j c1-4k c1-1z c1-20 c1-2i c1-4l c1-2t c1-2s c1-o c1-y c1-4 c1-4m c1-4n c1-4o c1-4p c1-4q c1-4r c1-8h c1-3 c1-b c1-42 c1-4t c1-4u c1-4v c1-4w c1-4x c1-4y c1-4z c1-50"
                                  >
                                    Baixe o app
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="esg"
              class="widget widget-content widget-content-content-6"
            >
              <div
                data-ux="Widget"
                role="region"
                id="f98ed7b5-5403-4e5a-bd1b-3e4c0400dc6d"
                class="x-el x-el-div x-el c1-1 c1-2 c1-8i c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-8i c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Container"
                      class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <h2
                        role="heading"
                        aria-level="2"
                        data-ux="SectionHeading"
                        data-aid="CONTENT_SECTION_TITLE_RENDERED"
                        data-typography="HeadingBeta"
                        class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5n c1-u c1-25 c1-r c1-5o c1-2i c1-2z c1-2x c1-5p c1-31 c1-36 c1-2o c1-2b c1-37 c1-38 c1-39"
                      >
                        <span
                          data-ux="Element"
                          class="x-el x-el-span c1-5q c1-41 c1-5r c1-5s c1-5t"
                        >
                          ESG - Environmental, social, and governance
                        </span>
                        <div
                          data-ux="Block"
                          class="x-el x-el-div c1-4 c1-5u c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                        >
                          <hr
                            aria-hidden="true"
                            role="separator"
                            data-ux="SectionHeadingHR"
                            class="x-el x-el-hr c1-8j c1-5w c1-11 c1-48 c1-t c1-5x c1-2y c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                          />
                        </div>
                      </h2>
                      <div
                        data-ux="Grid"
                        class="x-el x-el-div c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-t c1-62 c1-81 c1-20 c1-b c1-c c1-63 c1-64 c1-8k c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-1f c1-6a c1-8l c1-b c1-c c1-8m c1-8n c1-6d c1-6e c1-8o c1-6g c1-d c1-8p c1-8q c1-8r c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentBasic"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-1t c1-1u c1-4 c1-6j c1-8s c1-81 c1-6k c1-6l c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <h4
                              role="heading"
                              aria-level="4"
                              data-ux="ContentHeading"
                              data-aid="CONTENT_MEDIA_HEADLINE1_RENDERED"
                              data-typography="HeadingDelta"
                              class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-b c1-8t c1-3t c1-31 c1-3u c1-3v c1-3w c1-3x"
                            >
                              "Preservar a natureza não é uma opção, é uma
                              responsabilidade de todos"
                            </h4>
                            <div
                              data-ux="ContentText"
                              alignment="left"
                              data-aid="CONTENT_MEDIA_DESCRIPTION1_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-1y c1-b c1-8u c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  O ESG representa os critérios ambientais,
                                  sociais e de governança que as empresas
                                  consideram em suas operações e estratégias de
                                  investimento. Esses critérios são usados para
                                  avaliar o impacto de uma empresa no meio
                                  ambiente, na sociedade e na qualidade de sua
                                  governança corporativa.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  O futuro da ação ESG é promissor, pois reflete
                                  uma mudança global em direção a práticas
                                  empresariais mais responsáveis e sustentáveis.
                                  À medida que os investidores e consumidores se
                                  tornam mais conscientes do impacto ambiental e
                                  social das empresas, a demanda por
                                  transparência e responsabilidade está
                                  aumentando. Empresas que priorizam e
                                  demonstram um compromisso genuíno com os
                                  princípios ESG estão posicionando-se de forma
                                  mais competitiva no mercado, atraindo
                                  investimentos e ganhando a confiança dos
                                  consumidores.&nbsp;
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Além disso, regulamentações governamentais e
                                  pressões da sociedade estão impulsionando
                                  ainda mais a adoção dessas práticas. Portanto,
                                  é esperado que a ação ESG continue a crescer e
                                  se tornar uma parte cada vez mais integral das
                                  estratégias empresariais e de investimento no
                                  futuro.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-1f c1-6a c1-8v c1-2i c1-b c1-c c1-8m c1-8n c1-6d c1-6e c1-8o c1-6g c1-d c1-6h c1-6i c1-8w c1-83 c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Block"
                            class="x-el x-el-div c1-1 c1-2 c1-2i c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <span
                              data-ux="Element"
                              class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <img
                                data-lazyimg="true"
                                data-srclazy="/assets/images/image5.webp"
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                data-ux="Image"
                                data-aid="CONTENT_IMAGE1_RENDERED"
                                class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-8x c1-z c1-8y c1-2y c1-1h c1-b c1-c c1-8z c1-d c1-22 c1-e c1-f c1-g"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="42b1d663-f32f-4af3-af79-6ebe58ca9357"
              class="widget widget-content widget-content-content-5"
            >
              <div
                data-ux="WidgetBanner"
                role="region"
                id="42b1d663-f32f-4af3-af79-6ebe58ca9357"
                class="x-el x-el-div x-el c1-1 c1-2 c1-h c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <div
                    role="img"
                    data-aid="BACKGROUND_IMAGE_RENDERED"
                    data-ux="Background"
                    dataaid="CONTENT_BACKGROUND_IMAGE_RENDERED"
                    class="x-el x-el-div c1-1 c1-2 c1-90 c1-b c1-c c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Block"
                      data-lazybg="true"
                      class="x-el x-el-div d-none c1-1 c1-2 c1-91 c1-92 c1-93 c1-94 c1-4t c1-b c1-c c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-9j c1-9k c1-9l c1-9m c1-9n c1-9o c1-9p c1-d c1-e c1-f c1-g"
                    ></div>
                    <section
                      data-ux="SectionBanner"
                      class="x-el x-el-section c1-1 c1-2 c1-9q c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                    >
                      <div
                        data-ux="Container"
                        class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                      >
                        <div
                          data-ux="CardBanner"
                          class="x-el x-el-div x-el c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-1t c1-1z c1-20 c1-1u c1-2g c1-2h c1-9r c1-b c1-c c1-28 c1-d c1-29 c1-9s c1-9t c1-9u c1-9v c1-9w c1-9x c1-9y c1-9z c1-a0 c1-a1 c1-a2 c1-a3 c1-a4 c1-a5 c1-e c1-2e c1-f c1-2f c1-g"
                        >
                          <div
                            data-ux="CardBannerBlock"
                            class="x-el x-el-div c1-1 c1-2 c1-1t c1-1y c1-2i c1-1d c1-1f c1-a6 c1-b c1-c c1-d c1-83 c1-e c1-f c1-g"
                          >
                            <h2
                              role="heading"
                              aria-level="2"
                              data-ux="CardBannerHeading"
                              data-aid="CONTENT_SECTION_TITLE_RENDERED"
                              data-typography="HeadingDelta"
                              data-font-scaled="true"
                              class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-a7 c1-24 c1-25 c1-r c1-t c1-b c1-30 c1-3j c1-31 c1-3k c1-3l c1-3m c1-3n"
                            >
                              Ao calcular essa emissão diária, o resultado é a
                              pegada de carbono que estamos deixando no planeta.
                            </h2>
                          </div>
                          <div
                            data-ux="CardBannerBlock"
                            class="x-el x-el-div c1-1 c1-2 c1-1t c1-1y c1-2i c1-1d c1-1f c1-a6 c1-b c1-c c1-d c1-83 c1-e c1-f c1-g"
                          >
                            <a
                              data-ux-btn="primary"
                              data-ux="CardBannerButton"
                              color="HIGHCONTRAST"
                              data-aid="CONTENT_CTA_BTN_RENDERED"
                              href="/"
                              target=""
                              data-tccl="ux2.CONTENT.content5.Card.Banner.Button.Primary.39802.click,click"
                              data-page="287f429b-ed6e-416e-aa2a-319409973b79"
                              data-typography="ButtonAlpha"
                              class="x-el x-el-a c1-4g c1-4h c1-r c1-25 c1-t c1-24 c1-4i c1-4j c1-4k c1-1z c1-20 c1-2i c1-4l c1-2t c1-2s c1-o c1-y c1-4 c1-4m c1-4n c1-4o c1-4p c1-4q c1-4r c1-4s c1-3 c1-b c1-42 c1-4t c1-4u c1-4v c1-4w c1-4x c1-4y c1-4z c1-50"
                            >
                              Baixar o App
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="cpr"
              class="widget widget-content widget-content-content-6"
            >
              <div
                data-ux="Widget"
                role="region"
                id="5f6717b3-fc0c-48e3-b7ae-2b7d1de59c04"
                class="x-el x-el-div x-el c1-1 c1-2 c1-3 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Container"
                      class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <h2
                        role="heading"
                        aria-level="2"
                        data-ux="SectionHeading"
                        data-aid="CONTENT_SECTION_TITLE_RENDERED"
                        data-typography="HeadingBeta"
                        class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5n c1-u c1-25 c1-r c1-5o c1-2i c1-2z c1-2x c1-5p c1-31 c1-36 c1-2o c1-2b c1-37 c1-38 c1-39"
                      >
                        <span
                          data-ux="Element"
                          class="x-el x-el-span c1-5q c1-41 c1-5r c1-5s c1-5t"
                        >
                          Mas quem poderia investir em uma CPR verde?
                        </span>
                        <div
                          data-ux="Block"
                          class="x-el x-el-div c1-4 c1-5u c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                        >
                          <hr
                            aria-hidden="true"
                            role="separator"
                            data-ux="SectionHeadingHR"
                            class="x-el x-el-hr c1-5v c1-5w c1-11 c1-48 c1-t c1-5x c1-2y c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                          />
                        </div>
                      </h2>
                      <div
                        data-ux="Grid"
                        class="x-el x-el-div c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-t c1-62 c1-81 c1-20 c1-b c1-c c1-63 c1-64 c1-8k c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-1f c1-6a c1-8l c1-b c1-c c1-8m c1-8n c1-6d c1-6e c1-8o c1-6g c1-d c1-8p c1-8q c1-8r c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentBasic"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-1t c1-1u c1-4 c1-6j c1-8s c1-81 c1-6k c1-6l c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="ContentText"
                              alignment="left"
                              data-aid="CONTENT_MEDIA_DESCRIPTION1_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Um exemplo comum e mais utilizado são empresas
                                  que queiram ostentar a condição de ser
                                  sustentável ou até mesmo empresas que
                                  necessitam de uma compensação ambiental por
                                  algum dano ou mesmo por necessidade do
                                  negócio. &nbsp;
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Foi promulgado na sexta-feira, 1º de outubro
                                  de 2010, o
                                  <a
                                    class="x-el x-el-a c1-3y c1-3z c1-47 c1-2s c1-2t c1-a8 c1-4i c1-5q c1-b c1-5p c1-44 c1-a9 c1-aa"
                                    href="https://www.in.gov.br/en/web/dou/-/decreto-n-10.828-de-1-de-outubro-de-2021-349986833"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    Decreto n. 10.828
                                  </a>
                                  , que regulamenta a emissão de Cédula de
                                  Produto Rural (CPR) relacionada às atividades
                                  de conservação e recuperação de florestas
                                  nativas e de seus biomas, a chamada “CPR VERDE
                                  (CPR-V)”, modalidade esta que foi criada pela
                                  conhecida
                                  <a
                                    class="x-el x-el-a c1-3y c1-3z c1-47 c1-2s c1-2t c1-a8 c1-4i c1-5q c1-b c1-5p c1-44 c1-a9 c1-aa"
                                    href="https://direitorural.com.br/lei-do-agro-lei-13-986-20/"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    “Lei do Agro”,
                                  </a>
                                  ao alterar o art. 1º da Lei nº 8.929/94.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  A CPR-V não é um “título verde” como o mercado
                                  está acostumado, não é um tipo de dívida com
                                  características ambientais. A CPR-V é um
                                  título que materializa um acordo para que os
                                  produtores rurais comercializem “serviços
                                  ambientais”, ou seja, produtos associados à
                                  atividade de conservação ou formação de
                                  florestas nativas e seus biomas através de uma
                                  CPR própria.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Esses serviços ambientais devem resultar em
                                  redução de emissões de gases de efeito estufa,
                                  manutenção ou aumento do estoque de carbono
                                  florestal, redução do desmatamento e da
                                  degradação de vegetação nativa, conservação da
                                  biodiversidade, conservação dos recursos
                                  hídricos, conservação do solo ou outros
                                  benefícios ecossistêmicos.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  A ideia é ligar empresas, indústrias ou
                                  pessoas que queiram investir na proteção ao
                                  meio ambiente a produtores rurais que estejam
                                  dispostos a preservar florestas em pé ou
                                  formar novas florestas destinadas a
                                  preservação, sendo remunerados por isso.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-1f c1-6a c1-8v c1-2i c1-b c1-c c1-8m c1-8n c1-6d c1-6e c1-8o c1-6g c1-d c1-6h c1-6i c1-8w c1-83 c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Block"
                            class="x-el x-el-div c1-1 c1-2 c1-2i c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <span
                              data-ux="Element"
                              class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <img
                                data-lazyimg="true"
                                data-srclazy="https://img1.wsimg.com/isteam/ip/a4caf3cd-8d64-4c25-8091-b4e68aa5f214/359922_O.png/:/cr=t:0%25,l:24.66%25,w:50.68%25,h:100%25/rs=w:400,h:533.3333333333334,cg:true"
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                data-ux="Image"
                                data-aid="CONTENT_IMAGE1_RENDERED"
                                class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-8x c1-z c1-8y c1-2y c1-1h c1-b c1-c c1-8z c1-d c1-22 c1-e c1-f c1-g"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="a57aa411-bbd5-4fa3-801d-c8b6c7db8f12"
              class="widget widget-content widget-content-content-9"
            >
              <div
                data-ux="Widget"
                role="region"
                id="a57aa411-bbd5-4fa3-801d-c8b6c7db8f12"
                class="x-el x-el-div x-el c1-1 c1-2 c1-h c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-h c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Container"
                      class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <h2
                        role="heading"
                        aria-level="2"
                        data-ux="SectionHeading"
                        data-aid="CONTENT_SECTION_TITLE_RENDERED"
                        data-typography="HeadingBeta"
                        class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5n c1-u c1-25 c1-r c1-5o c1-2i c1-2z c1-2x c1-30 c1-31 c1-36 c1-2o c1-2b c1-37 c1-38 c1-39"
                      >
                        <span
                          data-ux="Element"
                          class="x-el x-el-span c1-5q c1-41 c1-5r c1-5s c1-5t"
                        >
                          Funcionamento da CPR Verde
                        </span>
                        <div
                          data-ux="Block"
                          class="x-el x-el-div c1-4 c1-5u c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                        >
                          <hr
                            aria-hidden="true"
                            role="separator"
                            data-ux="SectionHeadingHR"
                            class="x-el x-el-hr c1-ab c1-5w c1-11 c1-48 c1-t c1-5x c1-2y c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                          />
                        </div>
                      </h2>
                      <div
                        data-ux="ContentCards"
                        class="x-el x-el-div x-el c1-1 c1-2 c1-2i c1-20 c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-61 c1-62 c1-b c1-c c1-63 c1-64 c1-65 c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE1_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-30 c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                Cédula de Produto Rural
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-30 c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                Adquirir CPR-V de produtores
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-30 c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                Adquirir CPR-V de produtores
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <picture
                                  data-lazyimg="true"
                                  class="x-el x-el-picture c1-1 c1-2 c1-4 c1-p c1-2i c1-7w c1-1i c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <source
                                    media="(max-width: 450px)"
                                    data-lazyimg="true"
                                    sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  />
                                  <source
                                    media="(min-width: 451px)"
                                    data-lazyimg="true"
                                    sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  />
                                  <img
                                    data-ux="Image"
                                    data-lazyimg="true"
                                    data-srclazy="/assets/images/image8.webp"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                    data-aid="CONTENT_IMAGE1_RENDERED"
                                    class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                  />
                                </picture>
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION1_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Se um produtor que deseja preservar ou formar
                                  uma área florestal em sua propriedade pode
                                  estabelecer uma parceria com empresas
                                  interessadas em investir na conservação
                                  ambiental. O processo envolve definir os
                                  termos do acordo, como preço, área e métodos
                                  de conservação ou plantio, e a mensuração dos
                                  benefícios ambientais propostos.&nbsp;
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  O produtor emite uma CPR (Cédula de Produto
                                  Rural) que reflete os termos acordados e
                                  registra o título com agentes autorizados. A
                                  empresa, por sua vez, paga o produtor pelos
                                  serviços ambientais prestados conforme o
                                  acordado
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE2_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-30 c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                Adquirir CPR-V de produtores
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-30 c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                Adquirir CPR-V de produtores
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-30 c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                Adquirir CPR-V de produtores
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <picture
                                  data-lazyimg="true"
                                  class="x-el x-el-picture c1-1 c1-2 c1-4 c1-p c1-2i c1-7w c1-1i c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <source
                                    media="(max-width: 450px)"
                                    data-lazyimg="true"
                                    sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  />
                                  <source
                                    media="(min-width: 451px)"
                                    data-lazyimg="true"
                                    sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  />
                                  <img
                                    data-ux="Image"
                                    data-lazyimg="true"
                                    data-srclazy="/assets/images/image9.webp"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                    data-aid="CONTENT_IMAGE2_RENDERED"
                                    class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                  />
                                </picture>
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION2_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-30 c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Um exemplo é de uma empresa que deseja
                                  compensar suas emissões de carbono, medindo a
                                  biomassa emitida por suas atividades e
                                  adquirindo CPR-V de produtores que têm
                                  projetos para capturar biomassa. &nbsp;
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Aliás, parece ser um excelente produto para se
                                  oferecer também à ativistas ambientais e ONGs
                                  estrangeiras preocupadas com o meio ambiente
                                  no Brasil. Ao invés de financiar ataques à
                                  centros de pesquisa, propagandas na mídia,
                                  etc., esses ativistas podem passar a comprar
                                  esses títulos diretamente do produtor rural,
                                  estimulando a conservação florestal no Brasil.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="informacoes"
              class="widget widget-content widget-content-content-2"
            >
              <div
                data-ux="Widget"
                role="region"
                id="bca9d842-0f4d-4e66-9faa-4bb3b291cccc"
                class="x-el x-el-div x-el c1-1 c1-2 c1-3 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Container"
                      class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <h2
                        role="heading"
                        aria-level="2"
                        data-ux="SectionHeading"
                        data-aid="CONTENT_SECTION_TITLE_RENDERED"
                        data-typography="HeadingBeta"
                        class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5n c1-u c1-25 c1-r c1-5o c1-2i c1-2z c1-2x c1-5p c1-31 c1-36 c1-2o c1-2b c1-37 c1-38 c1-39"
                      >
                        <span
                          data-ux="Element"
                          class="x-el x-el-span c1-5q c1-41 c1-5r c1-5s c1-5t"
                        >
                          Mais Informações
                        </span>
                        <div
                          data-ux="Block"
                          class="x-el x-el-div c1-4 c1-5u c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                        >
                          <hr
                            aria-hidden="true"
                            role="separator"
                            data-ux="SectionHeadingHR"
                            class="x-el x-el-hr c1-5v c1-5w c1-11 c1-48 c1-t c1-5x c1-2y c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                          />
                        </div>
                      </h2>
                      <div
                        data-ux="ContentCards"
                        class="x-el x-el-div x-el c1-1 c1-2 c1-2i c1-20 c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-61 c1-62 c1-b c1-c c1-63 c1-64 c1-65 c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE1_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                RESERVA LEGAL
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                PAGAMENTO DO SERVIÇO
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                RESERVA LEGAL
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image10.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="Image"
                                  data-aid="CONTENT_IMAGE1_RENDERED"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION1_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  A CPR Verde não só pode, como também é
                                  <em class="x-el x-el-span c1-3y c1-3z c1-b c1-40 c1-41 c1-44 c1-43 c1-45">
                                    incentivada
                                  </em>
                                  à ser utilizada em áreas de Reserva Legal dos
                                  imóveis rurais, como defendido pelo secretário
                                  do MAPA, José Angelo.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  A CPR-V tem por objeto remunerar o produtor
                                  rural pela prestação de serviços ambientais,
                                  dentre eles, a proteção de Reserva Legal,
                                  sendo uma forma atraente para o produtor rural
                                  ter rendimentos financeiros por área que
                                  legalmente deve preservar.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE2_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                CERTIFICADORA
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                PAGAMENTO DO SERVIÇO
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                RESERVA LEGAL
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image11.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="Image"
                                  data-aid="CONTENT_IMAGE2_RENDERED"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION2_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Outro ponto que o Decreto prevê é a
                                  necessidade de participação de um terceiro
                                  órgão responsável pela certificação e
                                  validação da CPR-V, como empresas
                                  particulares, que irão validar a mensuração
                                  dos serviços ambientais propostos e certificar
                                  a CPR-V emitida.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Aqui que o Governo Federal, pelo menos a
                                  princípio, não tem interesse em fazer qualquer
                                  tipo de checagem, auditoria ou controle dessas
                                  empresas certificadoras, cabendo ao próprio
                                  mercado regular a sua atuação, conforme
                                  informado pelo MAPA e pelo MMA.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE3_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                PAGAMENTO DO SERVIÇO
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                PAGAMENTO DO SERVIÇO
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                VANTAGENS DA CPR VERDE
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image12.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="Image"
                                  data-aid="CONTENT_IMAGE3_RENDERED"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION3_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  A CPR-V é um instrumento emitido entre
                                  particulares, como produtores rurais e
                                  empresas, instituições ou indústrias que
                                  queiram ser ambientalmente responsáveis. Não
                                  há dinheiro público envolvido.&nbsp;
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  É um mercado que está surgindo e ainda não
                                  existe uma mensuração do que poderá ser feito
                                  e de como o produtor poderá ser remunerado.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  A motivação da CPR-V para o produtor rural
                                  será a remuneração para que cumpra as regras
                                  ambientais dispostas no título como “serviço
                                  ambiental”.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE4_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                VANTAGENS DA CPR VERDE
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                VANTAGENS DA CPR VERDE
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                VANTAGENS DA CPR VERDE
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image13.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="Image"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION4_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  &nbsp;Uma das vantagens da CPR Verde é a
                                  possibilidade de produtores rurais obterem
                                  rendimentos por meio de práticas sustentáveis
                                  e lucrar com conservação de áreas florestais,
                                  criando um
                                  <em class="x-el x-el-span c1-3y c1-3z c1-b c1-40 c1-41 c1-44 c1-43 c1-45">
                                    commodity
                                  </em>
                                  adicional para o agricultor. Ele também passa
                                  a ter reconhecido as suas boas práticas de
                                  conservação da fauna e flora nativas do
                                  Brasil, a redução de emissões de gases de
                                  efeito estufa, a conservação da
                                  biodiversidade, recursos hídricos e do solo.
                                  Dessa forma, a compensação financeira se faz
                                  necessária, como resultado dessas boas
                                  práticas.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Este título também permite que empresas, com
                                  interesse em ações ambientais, adquiram a CPR
                                  Verde para conservar uma área junto ao
                                  produtor rural, trazendo ganhos para ambas as
                                  partes e assegurando o desenvolvimento
                                  sustentável.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE5_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                OPORTUNIDADES
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                VANTAGENS DA CPR VERDE
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                OPORTUNIDADES
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image14.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  srcset="
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true  451w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true  768w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true 1024w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true 1280w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                              "
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="Image"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION5_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  &nbsp;A CPR Verde garante uma excelente
                                  alternativa de renda extra, sendo elegíveis ao
                                  registro quaisquer produtores que possuem
                                  reflorestamentos para restauração e áreas para
                                  conservação de vegetação nativa (englobando
                                  áreas de reserva legal e APPs), em suas
                                  propriedades.&nbsp;
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Ademais, diversos serviços ambientais
                                  consequentes dessa conservação podem ser
                                  valorados e agregados ao registro da
                                  cédula.&nbsp;
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Para referência, a primeira cédula registrada
                                  na B3 integrou o valor de 27 serviços
                                  ambientais envolvidos em um processo de
                                  conservação florestal, possibilitando
                                  operações com a segurança da tecnologia
                                  <em class="x-el x-el-span c1-3y c1-3z c1-b c1-40 c1-41 c1-44 c1-43 c1-45">
                                    blockchain
                                  </em>
                                  .
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-1t c1-b c1-c c1-6b c1-6c c1-6d c1-6e c1-6f c1-6g c1-d c1-6h c1-6i c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="ContentCard"
                            class="x-el x-el-div x-el c1-1 c1-2 c1-o c1-1t c1-1u c1-1z c1-2i c1-1w c1-4 c1-6j c1-6k c1-6l c1-1y c1-b c1-c c1-6m c1-6n c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              class="x-el x-el-div c1-1 c1-2 c1-4 c1-o c1-6s c1-b c1-c c1-6t c1-d c1-6u c1-e c1-f c1-g"
                            >
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-aid="CONTENT_HEADLINE6_RENDERED"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6w c1-3u c1-3v c1-3w c1-3x"
                              >
                                CONCLUSÃO
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-3u c1-6x c1-3v c1-3w c1-3x"
                              >
                                VANTAGENS DA CPR VERDE
                              </h4>
                              <h4
                                role="heading"
                                aria-level="4"
                                data-ux="ContentCardHeading"
                                data-typography="HeadingBeta"
                                data-font-scaled="true"
                                class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-49 c1-3c c1-q c1-6v c1-w c1-2z c1-3t c1-5p c1-31 c1-6y c1-3u c1-3v c1-3w c1-3x"
                              >
                                OPORTUNIDADES
                              </h4>
                            </div>
                            <div
                              data-ux="ContentCardWrapperImage"
                              class="x-el x-el-div c1-1 c1-2 c1-2y c1-u c1-s c1-2i c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <span
                                data-ux="Element"
                                class="x-el x-el-span c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <img
                                  data-lazyimg="true"
                                  data-srclazy="/assets/images/image13.webp"
                                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  srcset="
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true  451w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true  768w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true 1024w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true 1280w,
                                https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:388,h:194,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                              "
                                  sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                  data-ux="Image"
                                  class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-ac c1-1h c1-b c1-c c1-ad c1-ae c1-d c1-e c1-f c1-g"
                                />
                              </span>
                            </div>
                            <div
                              data-ux="ContentCardText"
                              data-aid="CONTENT_DESCRIPTION6_RENDERED"
                              data-typography="BodyAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75 c1-76 c1-77 c1-78 c1-79 c1-7a c1-7b c1-7c c1-7d c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-7l c1-7m c1-7n c1-7o c1-7p c1-7q c1-4 c1-1y c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  &nbsp;Em suma, a CPR-V parece ser uma
                                  excelente oportunidade de renda extra para o
                                  produtor rural que queira monetizar seu
                                  passivo ambiental, como as áreas de reserva
                                  legal ou florestas nativas, ou que possuam
                                  interesse em formação de novas matas.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  Alguns pontos ainda serão validados pelo
                                  mercado, porém a tendência é de que novos
                                  caminhos sejam abertos com essa
                                  regulamentação.
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  <br />
                                </span>
                              </p>
                              <p style={{ margin: 0 }}>
                                <span>
                                  O Direito Rural está atento às novidades e,
                                  oportunamente, traremos mais informações sobre
                                  como emitir a CPR Verde de forma eficaz e
                                  segura.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="68f5af94-f7ff-47c9-a24f-82c6fa550bd8"
              class="widget widget-introduction widget-introduction-introduction-2"
            >
              <div
                data-ux="Widget"
                role="region"
                id="68f5af94-f7ff-47c9-a24f-82c6fa550bd8"
                class="x-el x-el-div x-el c1-1 c1-2 c1-8i c1-k c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-8i c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="SplitLayout"
                      data-aid="SPLIT_LAYOUT_RENDERED"
                      class="x-el x-el-div x-el c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <div
                        data-ux="Grid"
                        class="x-el x-el-div c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-61 c1-62 c1-b c1-c c1-63 c1-64 c1-65 c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-7s c1-b c1-c c1-6d c1-6e c1-6f c1-6g c1-d c1-7t c1-7u c1-7v c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Block"
                            class="x-el x-el-div c1-1 c1-2 c1-o c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <picture
                              data-lazyimg="true"
                              class="x-el x-el-picture c1-1 c1-2 c1-4 c1-p c1-2i c1-7w c1-1i c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <source
                                media="(max-width: 450px)"
                                data-lazyimg="true"
                                srcset="
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:451,h:301,cg:true,m,i:true/qt=q:1/ll=n:true    451w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:768,h:514,cg:true,m,i:true/qt=q:1/ll=n:true    768w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1024,h:685,cg:true,m,i:true/qt=q:1/ll=n:true  1024w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1280,h:856,cg:true,m,i:true/qt=q:1/ll=n:true  1280w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1536,h:1028,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                            "
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 451px) and (max-width: 767px)"
                                data-lazyimg="true"
                                srcset="
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:451,h:301,cg:true,m,i:true/qt=q:1/ll=n:true    451w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:768,h:514,cg:true,m,i:true/qt=q:1/ll=n:true    768w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1024,h:685,cg:true,m,i:true/qt=q:1/ll=n:true  1024w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1280,h:856,cg:true,m,i:true/qt=q:1/ll=n:true  1280w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1536,h:1028,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                            "
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                data-lazyimg="true"
                                srcset="
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:451,h:301,cg:true,m,i:true/qt=q:1/ll=n:true    451w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:768,h:514,cg:true,m,i:true/qt=q:1/ll=n:true    768w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1024,h:685,cg:true,m,i:true/qt=q:1/ll=n:true  1024w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1280,h:856,cg:true,m,i:true/qt=q:1/ll=n:true  1280w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1536,h:1028,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                            "
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 1024px) and (max-width: 1279px)"
                                data-lazyimg="true"
                                srcset="
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:451,h:301,cg:true,m,i:true/qt=q:1/ll=n:true    451w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:768,h:514,cg:true,m,i:true/qt=q:1/ll=n:true    768w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1024,h:685,cg:true,m,i:true/qt=q:1/ll=n:true  1024w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1280,h:856,cg:true,m,i:true/qt=q:1/ll=n:true  1280w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1536,h:1028,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                            "
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 1280px) and (max-width: 1535px)"
                                data-lazyimg="true"
                                srcset="
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:451,h:301,cg:true,m,i:true/qt=q:1/ll=n:true    451w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:768,h:514,cg:true,m,i:true/qt=q:1/ll=n:true    768w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1024,h:685,cg:true,m,i:true/qt=q:1/ll=n:true  1024w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1280,h:856,cg:true,m,i:true/qt=q:1/ll=n:true  1280w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1536,h:1028,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                            "
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <source
                                media="(min-width: 1536px)"
                                data-lazyimg="true"
                                srcset="
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:451,h:301,cg:true,m,i:true/qt=q:1/ll=n:true    451w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:768,h:514,cg:true,m,i:true/qt=q:1/ll=n:true    768w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1024,h:685,cg:true,m,i:true/qt=q:1/ll=n:true  1024w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1280,h:856,cg:true,m,i:true/qt=q:1/ll=n:true  1280w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1536,h:1028,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                            "
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                              />
                              <img
                                data-ux="Image"
                                data-lazyimg="true"
                                data-srclazy="https://img1.wsimg.com/isteam/stock/8617/:/cr=t:7.9%25,l:0%25,w:100%25,h:84.19%25"
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                srcset="
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:451,h:301,cg:true,m,i:true/qt=q:1/ll=n:true    451w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:768,h:514,cg:true,m,i:true/qt=q:1/ll=n:true    768w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1024,h:685,cg:true,m,i:true/qt=q:1/ll=n:true  1024w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1280,h:856,cg:true,m,i:true/qt=q:1/ll=n:true  1280w,
                              https://img1.wsimg.com/isteam/ip/static/transparent_placeholder.png/:/rs=w:1536,h:1028,cg:true,m,i:true/qt=q:1/ll=n:true 1536w
                            "
                                sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px"
                                data-aid="IMAGE_RENDERED"
                                class="x-el x-el-img c1-1 c1-2 c1-4 c1-y c1-u c1-s c1-r c1-t c1-z c1-af c1-1h c1-b c1-c c1-ag c1-d c1-e c1-f c1-g"
                              />
                            </picture>
                          </div>
                        </div>
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-68 c1-y c1-1d c1-69 c1-2h c1-6a c1-b c1-c c1-6d c1-6e c1-6f c1-6g c1-d c1-7t c1-7u c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Block"
                            class="x-el x-el-div c1-1 c1-2 c1-4 c1-p c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="VerticalBox"
                              class="x-el x-el-div x-el c1-1 c1-2 c1-p c1-2u c1-1t c1-7z c1-80 c1-1u c1-81 c1-2g c1-2h c1-b c1-c c1-82 c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <div
                                data-ux="Group"
                                class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                              >
                                <h2
                                  role="heading"
                                  aria-level="2"
                                  data-ux="HeadingMajor"
                                  data-aid="SECTION_TITLE_RENDERED"
                                  data-typography="HeadingBeta"
                                  class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-81 c1-1d c1-1e c1-1f c1-1g c1-2z c1-2x c1-8t c1-31 c1-1i c1-36 c1-83 c1-84 c1-85 c1-86 c1-87 c1-21 c1-88 c1-22 c1-89 c1-37 c1-38 c1-39"
                                >
                                  Conclusão
                                </h2>
                                <div
                                  data-ux="HorizontalBox"
                                  class="x-el x-el-div x-el c1-1 c1-2 c1-8a c1-4 c1-1t c1-1w c1-80 c1-48 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <div
                                    data-ux="Text"
                                    data-aid="DESCRIPTION_TEXT"
                                    fontscalemultiplier="0.88"
                                    data-typography="BodyBeta"
                                    data-font-scaled="true"
                                    class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-y c1-b c1-8u c1-8b c1-31 c1-8c c1-8d c1-8e c1-8f x-rt"
                                  >
                                    <p style={{ margin: 0 }}>
                                      <span>
                                        Nosso aplicativo simplifica a compra e
                                        venda de créditos de carbono, ajudando
                                        empresas a compensar suas emissões e
                                        aprimorar sua sustentabilidade. Ao usar
                                        nossa plataforma, as empresas reforçam
                                        seu compromisso com o meio ambiente,
                                        melhoram sua imagem e contribuem para a
                                        conservação ecológica.
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  data-ux="Block"
                                  class="x-el x-el-div c1-1 c1-2 c1-8g c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <a
                                    data-ux-btn="secondary"
                                    data-ux="ButtonSecondary"
                                    data-aid="CTA_BUTTON_RENDERED"
                                    href="/"
                                    target=""
                                    data-tccl="ux2.INTRODUCTION.introduction2.Group.Default.Button.Secondary.39806.click,click"
                                    data-page="287f429b-ed6e-416e-aa2a-319409973b79"
                                    data-typography="ButtonAlpha"
                                    class="x-el x-el-a c1-4g c1-4h c1-4i c1-4j c1-4k c1-1z c1-20 c1-2i c1-4l c1-2t c1-2s c1-o c1-y c1-4 c1-4m c1-4n c1-4o c1-4p c1-4q c1-4r c1-30 c1-h c1-b c1-42 c1-4t c1-4u c1-ah c1-4w c1-4x c1-4y c1-4z c1-50"
                                  >
                                    Saiba mais
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="8b42eaaf-4936-4620-a312-e63431c082c1"
              class="widget widget-faq widget-faq-faq-1"
            >
              <div
                data-ux="Widget"
                role="region"
                id="8b42eaaf-4936-4620-a312-e63431c082c1"
                class="x-el x-el-div x-el c1-1 c1-2 c1-3 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Container"
                      class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <div
                        data-ux="Intro"
                        class="x-el x-el-div x-el c1-1 c1-2 c1-5o c1-2i c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                      >
                        <h2
                          role="heading"
                          aria-level="2"
                          data-ux="SectionHeading"
                          data-aid="FAQ_SECTION_TITLE_RENDERED"
                          data-typography="HeadingBeta"
                          class="x-el x-el-h2 c1-1 c1-2 c1-2s c1-2t c1-5n c1-u c1-25 c1-r c1-t c1-2i c1-2z c1-2x c1-5p c1-31 c1-36 c1-2o c1-2b c1-22 c1-37 c1-38 c1-39"
                        >
                          <span
                            data-ux="Element"
                            class="x-el x-el-span c1-5q c1-41 c1-5r c1-5s c1-5t"
                          >
                            Mais informações
                          </span>
                          <div
                            data-ux="Block"
                            class="x-el x-el-div c1-4 c1-5u c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                          >
                            <hr
                              aria-hidden="true"
                              role="separator"
                              data-ux="SectionHeadingHR"
                              class="x-el x-el-hr c1-5v c1-5w c1-11 c1-48 c1-t c1-5x c1-2y c1-2z c1-2x c1-36 c1-37 c1-38 c1-39"
                            />
                          </div>
                        </h2>
                      </div>
                      <div
                        data-ux="Grid"
                        class="x-el x-el-div c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-60 c1-t c1-62 c1-b c1-c c1-63 c1-64 c1-8k c1-66 c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="GridCell"
                          class="x-el x-el-div c1-1 c1-2 c1-5y c1-1y c1-67 c1-ai c1-y c1-1d c1-69 c1-1f c1-6a c1-b c1-c c1-aj c1-8m c1-8n c1-6d c1-6e c1-8o c1-6g c1-d c1-ak c1-8p c1-8q c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="Block"
                            id="8b42eaaf-4936-4620-a312-e63431c082c139807"
                            class="x-el x-el-div c1-1 c1-2 c1-al c1-am c1-b c1-c c1-d c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="Block"
                              id="693c5aee-a5a6-4468-a6df-d14352af19a2"
                              class="x-el x-el-div c1-1 c1-2 c1-an c1-ao c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <button
                                data-ux="Block"
                                aria-controls="693c5aee-a5a6-4468-a6df-d14352af19a2"
                                aria-expanded="false"
                                data-tccl="ux2.faq.question.click,click"
                                class="x-el x-el-button accordion-question c1-1 c1-2 c1-4 c1-1t c1-ap c1-aq c1-4o c1-4p c1-1g c1-1e c1-81 c1-1n c1-1o c1-1p c1-1q c1-9q c1-ar c1-b c1-c c1-as c1-at c1-d c1-e c1-f c1-g"
                              >
                                <span
                                  role="heading"
                                  aria-level="NaN"
                                  data-ux="HeadingProduct"
                                  data-aid="FAQ_QUESTION_RENDERED_0"
                                  data-typography="HeadingBeta"
                                  data-font-scaled="true"
                                  class="x-el x-el-span c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-2z c1-3t c1-5p c1-31 c1-3u c1-3v c1-3w c1-3x"
                                >
                                  QUAL O CONTEXTO ATUAL DA CPR VERDE NA B3?{' '}
                                </span>
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  width="16"
                                  height="16"
                                  data-ux="Icon"
                                  class="x-el x-el-svg accordion-icon c1-1 c1-2 c1-5p c1-2y c1-z c1-au c1-av c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M19.774 7.86c.294-.335.04-.839-.423-.84L4.538 7c-.447-.001-.698.48-.425.81l7.204 8.693a.56.56 0 0 0 .836.011l7.621-8.654z"
                                  ></path>
                                </svg>
                              </button>
                              <div
                                data-ux="Block"
                                aria-labelledby="693c5aee-a5a6-4468-a6df-d14352af19a2"
                                class="x-el x-el-div accordion-answer c1-1 c1-2 c1-1c c1-4o c1-4p c1-b c1-c c1-aw c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  data-ux="Text"
                                  data-aid="FAQ_ANSWER_RENDERED_0"
                                  data-typography="BodyAlpha"
                                  class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                                >
                                  <p style={{ margin: 0 }}>
                                    <span>
                                      A Bolsa do Brasil, recebeu no final de
                                      Fev/2022 o registro oficial da primeira
                                      CPR Verde emitida sob as diretrizes do
                                      decreto nº 10.828/21. Segundo estimativas
                                      do governo federal, o mercado de CPR Verde
                                      deverá atingir cerca de R$30 bilhões em
                                      quatro anos. Dada segurança legal do
                                      registro na B3, investidores
                                      internacionais e fundos de investimentos
                                      podem adquirir a CPR Verde, com aposta na
                                      valorização de títulos de conservação de
                                      florestas, que atualmente é a maior
                                      promessa do mercado como ativo, diante da
                                      corrida das corporações para o cumprimento
                                      das metas de Net Zero. &nbsp;
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <hr
                              aria-hidden="true"
                              role="separator"
                              data-ux="HR"
                              class="x-el x-el-hr c1-1 c1-2 c1-5v c1-ax c1-11 c1-r c1-t c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            />
                            <div
                              data-ux="Block"
                              id="d37a0b93-b244-41e3-b068-21badc7c009a"
                              class="x-el x-el-div c1-1 c1-2 c1-an c1-ao c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <button
                                data-ux="Block"
                                aria-controls="d37a0b93-b244-41e3-b068-21badc7c009a"
                                aria-expanded="false"
                                data-tccl="ux2.faq.question.click,click"
                                class="x-el x-el-button accordion-question c1-1 c1-2 c1-4 c1-1t c1-ap c1-aq c1-4o c1-4p c1-1g c1-1e c1-81 c1-1n c1-1o c1-1p c1-1q c1-9q c1-ar c1-b c1-c c1-as c1-at c1-d c1-e c1-f c1-g"
                              >
                                <span
                                  role="heading"
                                  aria-level="NaN"
                                  data-ux="HeadingProduct"
                                  data-aid="FAQ_QUESTION_RENDERED_1"
                                  data-typography="HeadingBeta"
                                  data-font-scaled="true"
                                  class="x-el x-el-span c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-2z c1-3t c1-5p c1-31 c1-3u c1-3v c1-3w c1-3x"
                                >
                                  QUAIS AS VANTAGENS DA CPR VERDE?
                                </span>
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  width="16"
                                  height="16"
                                  data-ux="Icon"
                                  class="x-el x-el-svg accordion-icon c1-1 c1-2 c1-5p c1-2y c1-z c1-au c1-av c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M19.774 7.86c.294-.335.04-.839-.423-.84L4.538 7c-.447-.001-.698.48-.425.81l7.204 8.693a.56.56 0 0 0 .836.011l7.621-8.654z"
                                  ></path>
                                </svg>
                              </button>
                              <div
                                data-ux="Block"
                                aria-labelledby="d37a0b93-b244-41e3-b068-21badc7c009a"
                                class="x-el x-el-div accordion-answer c1-1 c1-2 c1-1c c1-4o c1-4p c1-b c1-c c1-aw c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  data-ux="Text"
                                  data-aid="FAQ_ANSWER_RENDERED_1"
                                  data-typography="BodyAlpha"
                                  class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                                >
                                  <p style={{ margin: 0 }}>
                                    <span>
                                      Uma das vantagens da CPR Verde é a
                                      possibilidade de produtores rurais obterem
                                      rendimentos por meio de práticas
                                      sustentáveis e lucrar com conservação de
                                      áreas florestais, criando um commodity
                                      adicional para o agricultor. Ademais,
                                      também passa a ter reconhecido as suas
                                      boas práticas de conservação da fauna e
                                      flora nativas do Brasil, a redução de
                                      emissões de gases de efeito estufa, a
                                      conservação da biodiversidade, recursos
                                      hídricos e do solo. Dessa forma, a
                                      compensação financeira se faz necessária,
                                      como resultado dessas boas práticas. Este
                                      título também permite que empresas, com
                                      interesse em ações ambientais, adquiram a
                                      CPR Verde para conservar uma área junto ao
                                      produtor rural, trazendo ganhos para ambas
                                      as partes e assegurando o desenvolvimento
                                      sustentável. &nbsp;
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <hr
                              aria-hidden="true"
                              role="separator"
                              data-ux="HR"
                              class="x-el x-el-hr c1-1 c1-2 c1-5v c1-ax c1-11 c1-r c1-t c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            />
                            <div
                              data-ux="Block"
                              id="484db0b2-a5f0-4462-9a19-cbea7f8976ac"
                              class="x-el x-el-div c1-1 c1-2 c1-an c1-ao c1-b c1-c c1-d c1-e c1-f c1-g"
                            >
                              <button
                                data-ux="Block"
                                aria-controls="484db0b2-a5f0-4462-9a19-cbea7f8976ac"
                                aria-expanded="false"
                                data-tccl="ux2.faq.question.click,click"
                                class="x-el x-el-button accordion-question c1-1 c1-2 c1-4 c1-1t c1-ap c1-aq c1-4o c1-4p c1-1g c1-1e c1-81 c1-1n c1-1o c1-1p c1-1q c1-9q c1-ar c1-b c1-c c1-as c1-at c1-d c1-e c1-f c1-g"
                              >
                                <span
                                  role="heading"
                                  aria-level="NaN"
                                  data-ux="HeadingProduct"
                                  data-aid="FAQ_QUESTION_RENDERED_2"
                                  data-typography="HeadingBeta"
                                  data-font-scaled="true"
                                  class="x-el x-el-span c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-2z c1-3t c1-5p c1-31 c1-3u c1-3v c1-3w c1-3x"
                                >
                                  QUEM PODE SE INTERESSAR PELO PROJETO?
                                </span>
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  width="16"
                                  height="16"
                                  data-ux="Icon"
                                  class="x-el x-el-svg accordion-icon c1-1 c1-2 c1-5p c1-2y c1-z c1-au c1-av c1-b c1-c c1-d c1-e c1-f c1-g"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M19.774 7.86c.294-.335.04-.839-.423-.84L4.538 7c-.447-.001-.698.48-.425.81l7.204 8.693a.56.56 0 0 0 .836.011l7.621-8.654z"
                                  ></path>
                                </svg>
                              </button>
                              <div
                                data-ux="Block"
                                aria-labelledby="484db0b2-a5f0-4462-9a19-cbea7f8976ac"
                                class="x-el x-el-div accordion-answer c1-1 c1-2 c1-1c c1-4o c1-4p c1-b c1-c c1-aw c1-d c1-e c1-f c1-g"
                              >
                                <div
                                  data-ux="Text"
                                  data-aid="FAQ_ANSWER_RENDERED_2"
                                  data-typography="BodyAlpha"
                                  class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-b c1-7r c1-c c1-31 c1-d c1-e c1-f c1-g x-rt"
                                >
                                  <p style={{ margin: 0 }}>
                                    <span>
                                      Parece ser um excelente produto para se
                                      oferecer também à ativistas ambientais e
                                      ONGs estrangeiras preocupadas com o meio
                                      ambiente no Brasil. Ao invés de financiar
                                      ataques à centros de pesquisa, propagandas
                                      na mídia, etc., esses ativistas podem
                                      passar a comprar esses títulos diretamente
                                      do produtor rural, estimulando a
                                      conservação florestal no Brasil. resposta
                                      a este item.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <hr
                              aria-hidden="true"
                              role="separator"
                              data-ux="HR"
                              class="x-el x-el-hr c1-1 c1-2 c1-5v c1-ax c1-11 c1-r c1-t c1-4 c1-b c1-c c1-d c1-e c1-f c1-g"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="73419053-1186-44c0-948d-11d982a8b886"
              class="widget widget-footer widget-footer-footer-2"
            >
              <div
                data-ux="Widget"
                role="contentinfo"
                id="73419053-1186-44c0-948d-11d982a8b886"
                class="x-el x-el-div x-el c1-1 c1-2 c1-h c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <div>
                  <section
                    data-ux="Section"
                    class="x-el x-el-section c1-1 c1-2 c1-h c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g"
                  >
                    <div
                      data-ux="Container"
                      class="x-el x-el-div c1-1 c1-2 c1-u c1-s c1-26 c1-27 c1-y c1-b c1-c c1-28 c1-d c1-29 c1-e c1-2e c1-f c1-2f c1-g"
                    >
                      <div
                        data-ux="Layout"
                        class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
                      >
                        <div
                          data-ux="Grid"
                          class="x-el x-el-div c1-1 c1-2 c1-1t c1-5y c1-5z c1-4a c1-r c1-25 c1-t c1-24 c1-1z c1-2i c1-b c1-c c1-d c1-e c1-f c1-g"
                        >
                          <div
                            data-ux="GridCell"
                            class="x-el x-el-div c1-1 c1-2 c1-5y c1-ay c1-67 c1-68 c1-y c1-1d c1-1e c1-1f c1-1g c1-b c1-c c1-d c1-az c1-b0 c1-e c1-f c1-g"
                          >
                            <div
                              data-ux="FooterDetails"
                              data-aid="FOOTER_COPYRIGHT_RENDERED"
                              data-typography="DetailsAlpha"
                              class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-b c1-30 c1-4u c1-31 c1-4x c1-83 c1-4y c1-4z c1-50 x-rt"
                            >
                              <p style={{ margin: 0 }}>
                                <span>
                                  Copyright © 2024 carbononeutro.app – Todos os
                                  direitos reservados.
                                </span>
                              </p>
                            </div>
                          </div>
                          <div
                            data-ux="GridCell"
                            class="x-el x-el-div c1-1 c1-2 c1-5y c1-ay c1-67 c1-68 c1-y c1-1d c1-1e c1-1f c1-1g c1-b c1-c c1-d c1-az c1-b0 c1-e c1-f c1-g"
                          >
                            <p
                              data-ux="FooterDetails"
                              data-aid="FOOTER_POWERED_BY_RENDERED"
                              data-typography="DetailsAlpha"
                              class="x-el x-el-p c1-1 c1-2 c1-2s c1-2t c1-3o c1-48 c1-t c1-b c1-30 c1-4u c1-31 c1-4x c1-b1 c1-21 c1-4y c1-4z c1-50"
                            >
                              <span>
                                Desenvolvido por
                                <a
                                  rel="nofollow noopener"
                                  role="link"
                                  aria-haspopup="true"
                                  data-ux="Link"
                                  target="_blank"
                                  data-aid="FOOTER_POWERED_BY_RENDERED_LINK"
                                  href="#"
                                  data-typography="LinkAlpha"
                                  class="x-el x-el-a c1-3y c1-3z c1-4l c1-2s c1-2t c1-a8 c1-4i c1-48 c1-b c1-30 c1-4u c1-44 c1-b2 c1-b3 c1-4x c1-b1 c1-21 c1-4y c1-4z c1-50"
                                  data-tccl="ux2.FOOTER.footer2.Layout.Default.Link.Default.39808.click,click"
                                >
                                  Top Mídia Tecnologia Ltda
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div
              id="05d77790-9108-4d71-a633-3d4b27a74c22"
              class="widget widget-cookie-banner widget-cookie-banner-cookie-1"
            >
              <div
                data-ux="Group"
                data-aid="FOOTER_COOKIE_BANNER_RENDERED"
                id="05d77790-9108-4d71-a633-3d4b27a74c22-banner"
                class="x-el x-el-div c1-1 c1-2 c1-b4 c1-1s c1-b5 c1-4 c1-8a c1-81 c1-h c1-1h c1-b6 c1-b7 c1-b8 c1-b9 c1-ba c1-2g c1-27 c1-2h c1-26 c1-r c1-25 c1-t c1-24 c1-1i c1-b c1-c c1-bb c1-bc c1-bd c1-be c1-bf c1-bg c1-bh c1-d c1-e c1-f c1-g"
              >
                <h4
                  role="heading"
                  aria-level="4"
                  data-ux="Heading"
                  data-aid="FOOTER_COOKIE_TITLE_RENDERED"
                  data-typography="HeadingDelta"
                  class="x-el x-el-h4 c1-1 c1-2 c1-2s c1-2t c1-5m c1-24 c1-25 c1-r c1-t c1-4p c1-b c1-30 c1-3t c1-31 c1-3u c1-3v c1-3w c1-3x"
                >
                  Este site usa cookies.
                </h4>
                <div
                  data-ux="Text"
                  data-aid="FOOTER_COOKIE_MESSAGE_RENDERED"
                  data-typography="BodyAlpha"
                  class="x-el c1-1 c1-2 c1-2s c1-2t c1-3o c1-r c1-t c1-bi c1-b6 c1-b c1-30 c1-c c1-31 c1-bj c1-d c1-e c1-f c1-g x-rt"
                >
                  <p style={{ margin: 0 }}>
                    <span>
                      Usamos cookies para analisar o tráfego do site e otimizar
                      sua experiência nele. Ao aceitar nosso uso de cookies,
                      seus dados serão agregados com os dados de todos os demais
                      usuários.
                    </span>
                  </p>
                </div>
                <div
                  data-ux="Block"
                  class="x-el x-el-div c1-1 c1-2 c1-1t c1-ap c1-b c1-c c1-d c1-e c1-f c1-g"
                >
                  <a
                    data-ux-btn="primary"
                    data-ux="ButtonPrimary"
                    color="HIGHCONTRAST"
                    href=""
                    data-aid="FOOTER_COOKIE_CLOSE_RENDERED"
                    id="05d77790-9108-4d71-a633-3d4b27a74c22-accept"
                    data-typography="ButtonAlpha"
                    class="x-el x-el-a c1-4g c1-4h c1-1t c1-1u c1-20 c1-4i c1-48 c1-bk c1-bl c1-bm c1-1y c1-4j c1-1z c1-2i c1-4l c1-2t c1-2s c1-o c1-y c1-4 c1-bn c1-bo c1-bp c1-bq c1-br c1-4r c1-4s c1-3 c1-b c1-42 c1-4t c1-bs c1-bt c1-4v c1-4w c1-bu c1-bv c1-bw c1-bx"
                    data-tccl="ux2.COOKIE_BANNER.cookie1.Group.Default.Button.Primary.39809.click,click"
                  >
                    Aceitar
                  </a>
                </div>
              </div>
            </div>
            <div
              id="4647411b-ae06-4919-a030-9f66d82884ea"
              class="widget widget-popup widget-popup-popup-1"
            ></div>
            <div
              id="5b0a5011-d471-4ee1-ba6a-4af10f5a6802"
              class="widget widget-messaging widget-messaging-messaging-1"
            >
              <div
                data-ux="Element"
                id="bs-2"
                class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"
              >
                <span
                  data-ux="Element"
                  class="x-el x-el-span c2-1 c2-2 c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
                >
                  <div
                    data-ux="Block"
                    class="x-el x-el-div c2-1 c2-2 c2-9 c2-a c2-b c2-c c2-d c2-e c2-3 c2-4 c2-5 c2-f c2-6 c2-7 c2-8"
                  >
                    <div>
                      <div></div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          ('IntersectionObserver' in window && 'Intl' in window && 'Locale' in window.Intl) || document.write('<script src="https://img1.wsimg.com/poly/v3/polyfill.min.js?rum=0&unknown=polyfill&flags=gated&features=Intl.~locale.pt-BR"><\\/script>');
        `,
        }}
      />
      <script
        src="https://img1.wsimg.com/blobby/go/a4caf3cd-8d64-4c25-8091-b4e68aa5f214/gpub/8bc8bcc913bd4b06/script.js"
        crossOrigin=""
      ></script>
      <script
        src="https://img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.4.38.3.js"
        crossOrigin=""
      ></script>
      <script
        src="https://img1.wsimg.com/blobby/go/a4caf3cd-8d64-4c25-8091-b4e68aa5f214/gpub/3e06d8fbe1dfcc23/script.js"
        crossOrigin=""
      ></script>
      <script
        type="text/javascript"
        src="https://img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"
      ></script>
      <script
        defer
        src="https://img1.wsimg.com/traffic-assets/js/tccl.min.js"
        crossOrigin=""
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          Core.utils.onAllowCookieTracking(() => {
            let e = window.location.search,
              l = new URLSearchParams(e),
              i = l.get('gclid');
            i && localStorage.setItem('gclid', i);
          });
        `,
        }}
      />
      <iframe style={{ width: '0px', height: '0px', display: 'none' }} />
    </>
  );
}

function ExternalScripts() {
  return (
    <>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/bs-layout13-Theme-publish-Theme-96064f33.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/MESSAGING/bs-Component-564b6432.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers-1ddb43ea.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-defaultSocialIconPack-a2c518b6.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-humanisticFilled-91edd0e1.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-imageToHeaderTreatments-e81a288a.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-index-4e26cd6b.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-index3-1c2062ef.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-legacyOverrides-42582241.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-loaders-fffeeba5.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-overlayTypes-4cc463a5.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-themeOverrides-e736c017.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/lib/common/constants/form/formIdentifiers-99523055.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/lib/common/constants/traffic2-0a7e72c6.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/lib/components/Recaptcha/badge-e542c4f1.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/lib/components/Carousel-3d82957b.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/lib/components/ColorSwatch-4196a0a9.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/lib/components/DynamicFontScaler-6cccd626.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-dataAids-6a839d53.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-index2-87bd33e6.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-navigationDrawer-27f5f1f5.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/bs-searchFormLocations-c86f2a99.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/c/_commonjsHelpers-67085353.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/c/_react_commonjs-external-a1351e34.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/c/_rollupPluginBabelHelpers-8ce54c82.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/c/interopRequireDefault-c83974f7.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@wsb/guac-widget-shared/c/dynamicFontScaler-ecd443bf.js"
      ></script>
      <script
        crossOrigin="Anonymous"
        src="https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/bs-EmbedVideo-Component-ff2f8caf.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      'undefined' === typeof _trfq && (window._trfq = []);
      _trfq.push([
        'cmdLogEvent',
        'impression',
        'pandc.vnext.upgrades.freemium_ad',
        [
          ['source-website', 'a4caf3cd-8d64-4c25-8091-b4e68aa5f214'],
          ['kevel-experiment-cohort', 'ineligible'],
        ],
      ]);
      document
        .querySelector('a.gd-ad-body')
        .addEventListener('click', function () {
          _trfq.push([
            'cmdLogEvent',
            'click',
            'pandc.vnext.upgrades.freemium_ad',
            [
              ['source-website', 'a4caf3cd-8d64-4c25-8091-b4e68aa5f214'],
              ['kevel-experiment-cohort', 'ineligible'],
            ],
          ]);
        });
    `,
        }}
      />
    </>
  );
}
