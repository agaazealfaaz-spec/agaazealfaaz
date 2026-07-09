/**
 * Agaaz e Alfaaz — Core Execution Architecture 
 */

// Global App State Spaces
let activeLanguageMode = 'english'; // Default state track
let activeVisualTheme = 'dark';
let activeTypeSequenceInterval = null;

// Localization Dataset Mapping Matrix Dictionary
const localizationMatrix = {
    english: {
        introPhrase: "A home for unfinished feelings",
        heroMainTitle: "Agaaz e Alfaaz",
        heroSubTitle: "A home for unfinished feelings",
        heroCtaBtn: "Explore Feelings",
        sliderHeading: "Whispers of the Soul",
        formHeading: "Submit Your Poetry",
        inputNamePlaceholder: "Your Name",
        inputPoemPlaceholder: "Pour your heart here...",
        formSubmitBtn: "Send via WhatsApp",
        modalInstaLink: "Read more on Instagram",
        cardReadLabel: "Read Deeply"
    },
    urdu: {
        introPhrase: "نامکمل جذبات کا ایک گھر",
        heroMainTitle: "آغازِ الفاظ",
        heroSubTitle: "نامکمل جذبات کا ایک گھر",
        heroCtaBtn: "جذبات تلاش کریں",
        sliderHeading: "روح کی سرگوشیاں",
        formHeading: "اپنی شاعری بھیجیں",
        inputNamePlaceholder: "آپ کا نام",
        inputPoemPlaceholder: "اپنے دل کی بات یہاں لکھیں...",
        formSubmitBtn: "واٹس ایپ کے ذریعے بھیجیں",
        modalInstaLink: "انسٹاگرام پر مزید پڑھیں",
        cardReadLabel: "گہرائی میں پڑھیں"
    }
};

// Complete Bi-Script Parallel Poetry Database
const poetryDatabase = [
    {
        english: "Aye mukammal waqt par\nkhul jane wali aankh ....\n\nLihaaz to kiya kar ke\nkhwab kiska hai ...",
        urdu: "اے مکمل وقت پر\nکھل جانے والی آنکھ۔۔۔۔\n\nلحاظ تو کیا کر کہ\nخواب کس کا ہے ۔۔۔"
    },
    {
        english: "Kuch na reh saka jahan,\nViraaniyan toh reh gyin ..\n\nTum chale gye toh kya,\nKahaniyan toh reh gyin ...",
        urdu: "کچھ نہ رہ سکا جہاں،\nویرانیاں تو رہ گئیں۔۔۔\n\nتم چلے گئے تو کیا،\nکہانیاں تو رہ گئیں۔۔۔"
    },
    {
        english: "Kitni samtein thin rukh-e-nigah...\nGar humari nigahon ko tumhari aankhon siwa\nkoi jahan raas na aaya",
        urdu: "کتنى سمتیں تھیں رخِ نگاہ۔۔۔\nگر ہماری نگاہوں کو تمہاری آنکھوں سوا\nکوئی جہاں راس نہ آیا"
    },
    {
        english: "Barso'n tarteeb-e-alfaaz mujh bhi bol,\nMeri ibaadat tum ho, is manzar mein tum ho,\ntashreeh tum ho, firaaq tum ho,\nMeri mohabbat tum ho",
        urdu: "برسوں ترتیبِ الفاظ مجھے بھی بول،\nمیری عبادت تم ہو، اس منظر میں تم ہو،\nتشریح تم ہو، فراق تم ہو،\nمیری محبت تم ہو"
    },
    {
        english: "Aafreen aisa kya karun ki main tum mein dikh jaun?\nSuraj ki roshni ya chaand ban jaun?\nYa mehv-e-alfaaz khubsurati ka ek khwab ban jaun?",
        urdu: "آفرین ایسا کیا کروں کہ میں تم میں دکھ جاؤں؟\nسورج کی روشنی یا چاند بن جاؤں؟\nیا محوِ الفاظ خوبصورتی کا اک خواب بن جاؤں؟"
    },
    {
        english: "Meri aankho ko nhi bhaata har manzar..\nMujh me nhi har kisi se mutasir hojane ka jauhar",
        urdu: "میری آنکھوں کو نہیں بھاتا ہر منظر۔۔\nمجھ میں نہیں ہر کسی سے متاثر ہو جانے کا جوہر"
    }
];

window.addEventListener('DOMContentLoaded', () => {
    executeAppLifecycle();
    generatePoetryTrack();
    bindScrollInteractions();
    launchAmbientFeatherEngine();
});

function executeAppLifecycle() {
    // Initial loading splash presentation cleanup execution
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        if (intro) {
            intro.style.opacity = '0';
            setTimeout(() => intro.style.display = 'none', 1200);
        }
    }, 4000);

    // Event routing registrations Configuration Setup
    document.getElementById('theme-btn').addEventListener('click', toggleThemeInterface);
    document.getElementById('lang-btn').addEventListener('click', toggleLanguageInterface);

    const modalBackdrop = document.getElementById('poem-modal');
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) shutModalWindow();
    });
    modalBackdrop.querySelector('.close-btn').addEventListener('click', shutModalWindow);
}

function toggleThemeInterface() {
    const root = document.documentElement;
    const btn = document.getElementById('theme-btn');
    if (activeVisualTheme === 'dark') {
        root.setAttribute('data-theme', 'light');
        btn.innerText = 'Dark Mode';
        activeVisualTheme = 'light';
    } else {
        root.removeAttribute('data-theme');
        btn.innerText = 'Light Mode';
        activeVisualTheme = 'dark';
    }
}

function toggleLanguageInterface() {
    const root = document.documentElement;
    const btn = document.getElementById('lang-btn');
    
    if (activeLanguageMode === 'english') {
        root.setAttribute('data-lang', 'urdu');
        btn.innerText = 'English';
        activeLanguageMode = 'urdu';
    } else {
        root.removeAttribute('data-lang');
        btn.innerText = 'اردو';
        activeLanguageMode = 'english';
    }

    // Trigger universal text mutations across UI elements
    updateLocalizedStaticText();
    generatePoetryTrack(); // Refresh collection items inline template view matrix
}

function updateLocalizedStaticText() {
    const dictionary = localizationMatrix[activeLanguageMode];
    
    document.getElementById('intro-phrase').innerText = dictionary.introPhrase;
    document.getElementById('hero-main-title').innerText = dictionary.heroMainTitle;
    document.getElementById('hero-sub-title').innerText = dictionary.heroSubTitle;
    document.getElementById('hero-cta-btn').innerText = dictionary.heroCtaBtn;
    document.getElementById('slider-section-heading').innerText = dictionary.sliderHeading;
    document.getElementById('form-heading').innerText = dictionary.formHeading;
    document.getElementById('form-submit-btn').innerText = dictionary.formSubmitBtn;
    document.getElementById('modal-instagram-link').innerText = dictionary.modalInstaLink;

    // Apply attribute dynamic property configurations to form placeholders
    document.getElementById('author-name').placeholder = dictionary.inputNamePlaceholder;
    document.getElementById('poetry-body').placeholder = dictionary.inputPoemPlaceholder;
}

function generatePoetryTrack() {
    const track = document.getElementById('scroll-track');
    if (!track) return;
    
    track.innerHTML = ''; // Wipe matrix array list elements clear

    poetryDatabase.forEach((poem, index) => {
        const card = document.createElement('div');
        card.className = 'poetry-card glass-card';
        
        // Grab current translation state string snippet data string context block lines array
        const activeTextVersion = poem[activeLanguageMode];
        const displayLine = activeTextVersion.split('\n')[0];
        const secondaryReadLabel = localizationMatrix[activeLanguageMode].cardReadLabel;

        card.innerHTML = `
            <div class="card-snippet">"${displayLine}..."</div>
            <div style="font-size: 0.85rem; opacity: 0.5; letter-spacing: 1px;">${secondaryReadLabel}</div>
        `;
        
        card.addEventListener('click', () => triggerModalReveal(index));
        track.appendChild(card);
    });

    // Remap horizontal mouse wheel physics parameters natively bound context
    track.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        track.scrollLeft += evt.deltaY * 1.6;
    }, { passive: false });
}

function triggerModalReveal(index) {
    const modal = document.getElementById('poem-modal');
    const targetBlock = document.getElementById('modal-typography-target');
    
    if (!modal || !targetBlock) return;
    
    modal.classList.add('active');
    targetBlock.innerHTML = '';
    targetBlock.className = 'modal-text-block';
    
    if (activeTypeSequenceInterval) clearInterval(activeTypeSequenceInterval);

    const fullSourceText = poetryDatabase[index][activeLanguageMode];
    let stringCursorIndex = 0;

    // Line chronological stepping typewriter automation engine
    activeTypeSequenceInterval = setInterval(() => {
        if (stringCursorIndex < fullSourceText.length) {
            targetBlock.innerHTML += fullSourceText.charAt(stringCursorIndex);
            stringCursorIndex++;
        } else {
            clearInterval(activeTypeSequenceInterval);
        }
    }, 25);
}

function shutModalWindow() {
    const modal = document.getElementById('poem-modal');
    if (modal) modal.classList.remove('active');
    if (activeTypeSequenceInterval) clearInterval(activeTypeSequenceInterval);
}

// Zero-Configuration Scripted WhatsApp Action Handler Integration
function handleFormRouting() {
    const targetFormCard = document.getElementById('poetry-submission-form');
    const whatsappPhoneNumber = targetFormCard.getAttribute('data-whatsapp');
    
    const inputName = document.getElementById('author-name').value.trim();
    const inputPoem = document.getElementById('poetry-body').value.trim();

    if (!inputName || !inputPoem) {
        alert(activeLanguageMode === 'english' ? "Please complete all fields before sending." : "براہ کرم بھیجنے سے پہلے تمام خانے پُر کریں۔");
        return;
    }

    // Build the payload layout format string
    const textPayload = `*Agaaz e Alfaaz — Submission*\n\n*Name:* ${inputName}\n\n*Poem:* \n${inputPoem}`;
    const encodedPayload = encodeURIComponent(textPayload);
    
    // Construct universal device URL path links api address
    const whatsappDeepLinkUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodedPayload}`;
    
    // Deploy redirect execution operations layer window route
    window.open(whatsappDeepLinkUrl, '_blank');
}

function bindScrollInteractions() {
    const interactionNodes = document.querySelectorAll('.reveal');
    const parameters = { threshold: 0.12, rootMargin: "0px" };
    
    const interactionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, parameters);

    interactionNodes.forEach(node => interactionObserver.observe(node));
}

// Ambient Environment Particle Simulation Engine Canvas Configuration Space
function launchAmbientFeatherEngine() {
    const canvas = document.getElementById('feather-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let widthCanvas, heightCanvas;
    let particleSystemsStorage = [];

    function syncCanvasViewportSize() {
        widthCanvas = canvas.width = window.innerWidth;
        heightCanvas = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', syncCanvasViewportSize);
    syncCanvasViewportSize();

    class EnvironmentalFeatherParticle {
        constructor() {
            this.instantiateState(true);
        }
        instantiateState(isInitLoopPhase = false) {
            this.coordinateX = Math.random() * widthCanvas;
            this.coordinateY = isInitLoopPhase ? (Math.random() * heightCanvas) : -30;
            this.radialLength = Math.random() * 14 + 10;
            this.velocityDownwards = Math.random() * 0.6 + 0.3;
            this.velocityHorizontalOffset = Math.random() * 1.2 - 0.6;
            this.angleRadians = Math.random() * Math.PI * 2;
            this.rotationalSwaySpeed = (Math.random() - 0.5) * 0.025;
            this.colorSpectrumRenderingValue = `rgba(197, 178, 138, ${Math.random() * 0.18 + 0.08})`;
        }
        processFrameMotionUpdates() {
            this.coordinateY += this.velocityDownwards;
            this.coordinateX += Math.sin(this.angleRadians) * 0.5 + this.velocityHorizontalOffset;
            this.angleRadians += this.rotationalSwaySpeed;

            if (this.coordinateY > heightCanvas + this.radialLength || this.coordinateX < -this.radialLength || this.coordinateX > widthCanvas + this.radialLength) {
                this.instantiateState(false);
            }
        }
        paintFrameRenderCycle() {
            ctx.save();
            ctx.translate(this.coordinateX, this.coordinateY);
            ctx.rotate(this.angleRadians);
            
            ctx.beginPath();
            ctx.moveTo(0, -this.radialLength);
            ctx.quadraticCurveTo(this.radialLength / 2.2, 0, 0, this.radialLength);
            ctx.quadraticCurveTo(-this.radialLength / 2.2, 0, 0, -this.radialLength);
            ctx.fillStyle = this.colorSpectrumRenderingValue;
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(0, -this.radialLength);
            ctx.lineTo(0, this.radialLength);
            ctx.strokeStyle = this.colorSpectrumRenderingValue;
            ctx.lineWidth = 0.7;
            ctx.stroke();
            
            ctx.restore();
        }
    }

    const concurrentParticlesLimit = 25;
    for (let indexPos = 0; indexPos < concurrentParticlesLimit; indexPos++) {
        particleSystemsStorage.push(new EnvironmentalFeatherParticle());
    }

    function renderProcessingPipelineLoop() {
        ctx.clearRect(0, 0, widthCanvas, heightCanvas);
        particleSystemsStorage.forEach(featherNodeItem => {
            featherNodeItem.processFrameMotionUpdates();
            featherNodeItem.paintFrameRenderCycle();
        });
        requestAnimationFrame(renderProcessingPipelineLoop);
    }
    renderProcessingPipelineLoop();
}