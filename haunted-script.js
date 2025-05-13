// Haunted Website JS - Created by a PRO student developer 👻
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const body = document.body;
    const contextSwitchBtn = document.getElementById('context-switch');
    const hauntedSection = document.querySelector('.haunted-section');
    const happySection = document.getElementById('happy-section');
    const cursorFollower = document.getElementById('cursor-follower');
    const popupContainer = document.getElementById('popup-container');
    const closePopupBtn = document.getElementById('close-popup');
    const payButton = document.getElementById('pay-button');
    const fakecrash = document.getElementById('fake-crash');
    const closeCrashBtn = document.getElementById('close-crash');
    const jumpscareContainer = document.getElementById('jumpscare-container');
    
    // Get audio elements
    const jumpscareSound = document.getElementById('jumpscare-sound');
    const switchSound = document.getElementById('switch-sound');
    const ghostWhisper = document.getElementById('ghost-whisper');
    
    // Ghost cursor functionality
    let ghostCursorActive = true;
    
    // Start with ghost cursor active
    body.style.cursor = 'none';
    cursorFollower.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        if (ghostCursorActive) {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }
    });
    
    // Randomly change the cursor emoji
    setInterval(() => {
        if (ghostCursorActive && Math.random() > 0.9) {
            const emojis = ['👻', '💀', '👁️', '🕸️', '🧟', '😱', '🔪'];
            cursorFollower.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        }
    }, 3000);
    
    // Context switch button functionality
    contextSwitchBtn.addEventListener('click', () => {
        // Play context switch sound
        switchSound.play();
        
        // Hide haunted section and show happy section
        hauntedSection.classList.add('hidden');
        happySection.classList.remove('hidden');
        
        // Change background and remove haunted elements
        body.classList.remove('haunted-mode');
        body.style.backgroundColor = '#ff69b4';
        
        // Restore normal cursor
        ghostCursorActive = false;
        body.style.cursor = 'default';
        cursorFollower.style.display = 'none';
    });
    
    // Back to haunted mode button
    const backToHauntedBtn = document.getElementById('back-to-haunted');
    backToHauntedBtn.addEventListener('click', () => {
        // Hide happy section and show haunted section
        happySection.classList.add('hidden');
        hauntedSection.classList.remove('hidden');
        
        // Restore haunted mode
        body.classList.add('haunted-mode');
        body.style.backgroundColor = '#000';
        
        // Restore ghost cursor
        ghostCursorActive = true;
        body.style.cursor = 'none';
        cursorFollower.style.display = 'block';
        
        // Play ghost whisper sound
        ghostWhisper.play();
    });
    
    // Random jumpscare function
    function randomJumpscare() {
        const jumpscareChance = Math.random();
        
        if (jumpscareChance > 0.985 && !happySection.classList.contains('hidden')) {
            return; // Don't jumpscare in happy mode
        }
        
        if (jumpscareChance > 0.985) {
            const jumpscareImages = [
                'https://www.irishtimes.com/resizer/1Q5qRBlUUSY1Uw9UEVvw9SUnjbM=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/ENKATEE7J6ZE66AIN27FES6IEI.jpg',
                'https://media.tenor.com/NEPfRBianV4AAAAM/jumpscare-scary.gif',
                'https://ruinmyweek.com/wp-content/uploads/2020/09/scary-face-meme-pictures-14.jpg'
            ];
            
            // Create jumpscare element
            const jumpscare = document.createElement('img');
            jumpscare.src = jumpscareImages[Math.floor(Math.random() * jumpscareImages.length)];
            jumpscare.style.maxWidth = '100%';
            jumpscare.style.maxHeight = '100%';
            jumpscare.style.position = 'absolute';
            jumpscare.style.zIndex = '100';
            
            // Add jumpscare to container
            jumpscareContainer.innerHTML = '';
            jumpscareContainer.appendChild(jumpscare);
            
            // Play jumpscare sound
            jumpscareSound.play();
            
            // Add background flash
            document.body.style.animation = 'screen-flash 0.1s';
            
            // Remove jumpscare after a short time
            setTimeout(() => {
                jumpscareContainer.innerHTML = '';
                document.body.style.animation = '';
            }, 500);
        }
    }
    
    // Set interval for random jumpscare check
    setInterval(randomJumpscare, 10000);
    
    // Random screen glitch effect
    function randomGlitch() {
        if (Math.random() > 0.9 && !happySection.classList.contains('hidden')) {
            return; // Don't glitch in happy mode
        }
        
        if (Math.random() > 0.9) {
            const glitchDuration = Math.random() * 500 + 100;
            
            body.style.filter = `
                hue-rotate(${Math.random() * 360}deg) 
                saturate(${Math.random() * 5 + 1}) 
                contrast(${Math.random() * 5 + 1})
            `;
            
            setTimeout(() => {
                body.style.filter = '';
            }, glitchDuration);
        }
    }
    
    // Set interval for random glitch effect
    setInterval(randomGlitch, 5000);
    
    // Random whispers
    function randomWhisper() {
        if (Math.random() > 0.95 && !happySection.classList.contains('hidden')) {
            return; // Don't whisper in happy mode
        }
        
        if (Math.random() > 0.95) {
            ghostWhisper.volume = 0.3;
            ghostWhisper.play();
        }
    }
    
    // Set interval for random whispers
    setInterval(randomWhisper, 20000);
    
    // Show popup randomly
    function randomPopup() {
        if (Math.random() > 0.98 && !happySection.classList.contains('hidden')) {
            return; // Don't show popups in happy mode
        }
        
        if (Math.random() > 0.98) {
            popupContainer.classList.remove('hidden');
        }
    }
    
    // Set interval for random popup check
    setInterval(randomPopup, 30000);
    
    // Close popup button
    closePopupBtn.addEventListener('click', () => {
        popupContainer.classList.add('hidden');
    });
    
    // Pay button functionality
    payButton.addEventListener('click', () => {
        alert("Transaction successful! Just kidding, this is just a prank website! Your browser history is safe... for now 😈");
        popupContainer.classList.add('hidden');
    });
    
    // Random fake crash
    function randomCrash() {
        if (Math.random() > 0.99 && !happySection.classList.contains('hidden')) {
            return; // Don't crash in happy mode
        }
        
        if (Math.random() > 0.99) {
            fakecrash.classList.remove('hidden');
        }
    }
    
    // Set interval for random crash check
    setInterval(randomCrash, 45000);
    
    // Close crash button
    closeCrashBtn.addEventListener('click', () => {
        fakecrash.classList.add('hidden');
    });
    
    // Happy section functionality
    
    // Roast generator functionality
    const getRoastBtn = document.getElementById('get-roast');
    const roastText = document.getElementById('roast-text');
    
    const roasts = [
        "You have something on your face... Oh wait, that's just your face.",
        "If I wanted to kill myself, I'd climb your ego and jump to your IQ.",
        "You're not completely useless, you can always serve as a bad example.",
        "I'd agree with you, but then we'd both be wrong.",
        "Don't be ashamed of who you are. That's your parents' job.",
        "You're the reason the gene pool needs a lifeguard.",
        "Your phone battery lasts longer than your relationships.",
        "I thought of you today. It reminded me to take out the trash.",
        "You're like a cloud. When you disappear, it's a beautiful day.",
        "I'd tell you to go outside and play, but don't trees need oxygen?",
        "You have more issues than a magazine stand.",
        "Your grades say 'marry rich', but your face says 'study harder'.",
        "You must have been born on a highway, because that's where most accidents happen.",
        "I'm jealous of people who don't know you.",
        "You're not stupid; you just have bad luck thinking."
    ];
    
    getRoastBtn.addEventListener('click', () => {
        const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
        roastText.textContent = randomRoast;
        roastText.style.animation = 'pop 0.3s';
        setTimeout(() => {
            roastText.style.animation = '';
        }, 300);
    });
    
    // IQ test functionality
    const startIQTestBtn = document.getElementById('start-iq-test');
    const iqResult = document.getElementById('iq-result');
    
    startIQTestBtn.addEventListener('click', () => {
        // Add fake loading
        iqResult.textContent = "Testing intelligence...";
        
        setTimeout(() => {
            // Generate random IQ between -20 and 300
            let iq;
            const randomVal = Math.random();
            
            if (randomVal < 0.2) {
                // 20% chance of negative IQ
                iq = Math.floor(Math.random() * 50) * -1;
                iqResult.textContent = `Your IQ: ${iq}... That's impressively bad!`;
            } else if (randomVal < 0.7) {
                // 50% chance of low to average IQ
                iq = Math.floor(Math.random() * 80) + 10;
                iqResult.textContent = `Your IQ: ${iq}... Keep trying buddy!`;
            } else if (randomVal < 0.95) {
                // 25% chance of above average IQ
                iq = Math.floor(Math.random() * 50) + 100;
                iqResult.textContent = `Your IQ: ${iq}... Not bad, not great.`;
            } else {
                // 5% chance of genius IQ
                iq = Math.floor(Math.random() * 8000) + 2000;
                iqResult.textContent = `Your IQ: ${iq}... You're a certified genius! (Just kidding)`;
            }
        }, 1500);
    });
    
    // Crush predictor functionality
    const predictCrushBtn = document.getElementById('predict-crush');
    const crushName = document.getElementById('crush-name');
    const crushResult = document.getElementById('crush-result');
    
    predictCrushBtn.addEventListener('click', () => {
        if (!crushName.value) {
            crushResult.textContent = "Enter a name first, coward!";
            return;
        }
        
        // Add fake loading
        crushResult.textContent = "Analyzing social profiles and chat history...";
        
        setTimeout(() => {
            const randomVal = Math.random();
            
            if (randomVal < 0.7) {
                // 70% chance of rejection
                const rejections = [
                    `Result: Error 404. You are unlovable.`,
                    `${crushName.value} would rather date a potato.`,
                    `${crushName.value} saw your browser history. It's a no.`,
                    `Our analysis shows ${crushName.value} is WAY out of your league.`,
                    `${crushName.value} thinks you're "just a friend" forever.`
                ];
                crushResult.textContent = rejections[Math.floor(Math.random() * rejections.length)];
            } else {
                // 30% chance of success
                const successes = [
                    `OMG! ${crushName.value} actually likes you! (In an alternate universe)`,
                    `${crushName.value} might consider dating you... if you were the last person alive.`,
                    `${crushName.value} said yes! Just kidding, it's still no.`,
                    `${crushName.value} thinks about you... when they need a good laugh.`,
                ];
                crushResult.textContent = successes[Math.floor(Math.random() * successes.length)];
            }
        }, 2000);
    });
    
    // Spin mode functionality
    const toggleSpinBtn = document.getElementById('toggle-spin');
    let spinModeActive = false;
    
    toggleSpinBtn.addEventListener('click', () => {
        spinModeActive = !spinModeActive;
        
        if (spinModeActive) {
            body.classList.add('spin-mode');
            toggleSpinBtn.textContent = '🛑 Stop Spinning';
        } else {
            body.classList.remove('spin-mode');
            toggleSpinBtn.textContent = '🌀 Spin Mode';
        }
    });
    
    // Invert colors functionality
    const toggleInvertBtn = document.getElementById('toggle-invert');
    let invertModeActive = false;
    
    toggleInvertBtn.addEventListener('click', () => {
        invertModeActive = !invertModeActive;
        
        if (invertModeActive) {
            body.classList.add('invert-mode');
            toggleInvertBtn.textContent = '🔄 Normal Colors';
        } else {
            body.classList.remove('invert-mode');
            toggleInvertBtn.textContent = '🔄 Invert Colors';
        }
    });
    
    // Blur mode functionality
    const toggleBlurBtn = document.getElementById('toggle-blur');
    let blurModeActive = false;
    
    toggleBlurBtn.addEventListener('click', () => {
        blurModeActive = !blurModeActive;
        
        if (blurModeActive) {
            body.classList.add('blur-mode');
            toggleBlurBtn.textContent = '👓 Clear Vision';
        } else {
            body.classList.remove('blur-mode');
            toggleBlurBtn.textContent = '🌫️ Blur Mode';
        }
    });
    
    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        // Make the page go crazy for a few seconds
        document.body.style.animation = 'rainbow-bg 2s infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow-bg {
                0% { background: linear-gradient(45deg, red, orange); }
                14% { background: linear-gradient(45deg, orange, yellow); }
                28% { background: linear-gradient(45deg, yellow, green); }
                42% { background: linear-gradient(45deg, green, blue); }
                57% { background: linear-gradient(45deg, blue, indigo); }
                71% { background: linear-gradient(45deg, indigo, violet); }
                85% { background: linear-gradient(45deg, violet, red); }
                100% { background: linear-gradient(45deg, red, orange); }
            }
        `;
        document.head.appendChild(style);
        
        // Make elements spin
        const allElements = document.querySelectorAll('div, h1, h2, h3, p, button');
        allElements.forEach(element => {
            element.style.animation = 'spin 1s infinite';
        });
        
        // Return to normal after 3 seconds
        setTimeout(() => {
            document.body.style.animation = '';
            allElements.forEach(element => {
                element.style.animation = '';
            });
        }, 3000);
        
        // Show a message
        alert('You found the secret Konami code! How cool are you?!');
    }
});
