document.addEventListener('DOMContentLoaded', () => {
    // Core GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Entrada Cinematográfica Clássica
    const tlLoad = gsap.timeline();

    tlLoad.to('.tagline', { opacity: 1, filter: 'blur(0px)', y: 0, duration: 2, ease: 'power3.out', delay: 0.2 })
        .to('.headline', { opacity: 1, filter: 'blur(0px)', y: 0, scale: 1, duration: 2.5, ease: 'power4.out' }, "-=1.5")
        .to('.subheadline', { opacity: 1, filter: 'blur(0px)', y: 0, duration: 2, ease: 'power3.out' }, "-=2.0")
        .to('.buttons-wrapper', { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }, "-=1.5")
        .to('.scroll-indicator', { opacity: 1, duration: 2, ease: 'power2.out' }, "-=1.0");

    // Setup do Parallax Fluido (Apple Style)
    const video = document.getElementById('bg-video');

    if (video) {
        // Animação Parallax "Zoom-out" do Video de Fundo
        gsap.to(video, {
            scale: 1, // Volta pro tamanho original
            opacity: 0.3, // Escurece no final do scroll
            scrollTrigger: {
                trigger: "#hero-trigger",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5
            }
        });
    }

    // Text Fade-out Dinâmico
    gsap.to('.content', {
        y: -120,
        filter: 'blur(15px)',
        opacity: 0,
        scrollTrigger: {
            trigger: "#hero-trigger",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to('.scroll-indicator', {
        opacity: 0,
        y: 20,
        scrollTrigger: {
            trigger: "#hero-trigger",
            start: "top top",
            end: "+=300",
            scrub: true
        }
    });

    // -------------------------------------------------------------
    // Animação da Segunda Dobra (Features)
    // -------------------------------------------------------------
    const tlFeature = gsap.timeline({
        scrollTrigger: {
            trigger: "#features",
            start: "top 75%", // Inicia quando a segunda dobra atinge 75% da tela
            end: "bottom bottom"
        }
    });

    // Revelação do Card Principal
    tlFeature.from('.feature-card', {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
    });

    // Animação de Entrada e Saída do Lettering (Classic Vibe - Reversível)
    gsap.from('.feature-title, .feature-desc, .feature-line, .feature-stat', {
        y: 40,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1.5,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: ".feature-card",
            start: "top 75%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse"
        }
    });

    // Entrada e Efeito de Flutuação da Imagem do Relógio e do Flare
    tlFeature.from('.visual-flare', {
        opacity: 0,
        scale: 0.5,
        duration: 2.5,
        ease: 'power2.out'
    }, "-=0.5");

    tlFeature.from('.visual-img', {
        x: 100,
        opacity: 0,
        rotation: 10,
        scale: 0.8,
        duration: 2,
        ease: 'power3.out'
    }, "-=1.5");

    // Animação contínua (Levitação do relógio da Dobra 2) "Breathing"
    gsap.to('.visual-img', {
        y: -25,
        rotation: 2,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1 
    });

    // -------------------------------------------------------------
    // Animação da Terceira Dobra (Collections)
    // -------------------------------------------------------------
    const tlCollections = gsap.timeline({
        scrollTrigger: {
            trigger: "#collections",
            start: "top 70%",
            end: "bottom bottom"
        }
    });

    // Entrada Textos de Cabeçalho da Galeria
    tlCollections.from('.coll-header > *', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
    });

    // Entrada Imersiva da Galeria (Mágica com Scale & Clip-Path)
    tlCollections.from('.coll-item', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.15
    }, "-=0.8");

    // -------------------------------------------------------------
    // Animação da Quarta Dobra (Legacy Glow - Reversível)
    // -------------------------------------------------------------
    gsap.from('#glow-panel', {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(15px)',
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#legacy",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        }
    });

    gsap.from('.legacy-reveal', {
        opacity: 0,
        y: 40,
        duration: 1.5,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#glow-panel",
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse"
        }
    });

    // Animação do Living Background (Zoom e Pan suave)
    gsap.to('.legacy-bg-img', {
        scale: 1,
        x: -20,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true
    });
});
