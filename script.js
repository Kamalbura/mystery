// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // ===== MEME GENERATOR =====
    const memeTemplate = document.getElementById('meme-template');
    const topTextInput = document.getElementById('top-text-input');
    const bottomTextInput = document.getElementById('bottom-text-input');
    const generateMemeBtn = document.getElementById('generate-meme');
    const memeImage = document.getElementById('meme-image');
    const topTextDisplay = document.getElementById('top-text-display');
    const bottomTextDisplay = document.getElementById('bottom-text-display');

    // Set initial meme image
    memeImage.src = memeTemplate.value;

    // Generate meme when button is clicked
    generateMemeBtn.addEventListener('click', () => {
        memeImage.src = memeTemplate.value;
        topTextDisplay.textContent = topTextInput.value || 'TOP TEXT';
        bottomTextDisplay.textContent = bottomTextInput.value || 'BOTTOM TEXT';
        
        // Add a fun shake animation
        memeImage.classList.add('shake');
        setTimeout(() => memeImage.classList.remove('shake'), 500);
    });

    // Update meme when template changes
    memeTemplate.addEventListener('change', () => {
        memeImage.src = memeTemplate.value;
    });

    // ===== JOKE GENERATOR =====
    const getJokeBtn = document.getElementById('get-joke');
    const jokeText = document.getElementById('joke-text');
    
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "What do you call a fake noodle? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What do you call a bear with no teeth? A gummy bear!",
        "What's orange and sounds like a parrot? A carrot!",
        "How do you organize a space party? You planet!",
        "Why did the bike fall over? Because it was two-tired!",
        "What's the best time to go to the dentist? Tooth-hurty!",
        "Why couldn't the bicycle stand up by itself? It was two tired!",
        "What do you call a cow with no legs? Ground beef!",
        "I'm on a seafood diet. Every time I see food, I eat it!",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
    ];

    getJokeBtn.addEventListener('click', () => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeText.textContent = randomJoke;
        jokeText.classList.add('pop');
        setTimeout(() => jokeText.classList.remove('pop'), 300);
    });

    // ===== FUN FACTS GENERATOR =====
    const getFactBtn = document.getElementById('get-fact');
    const factText = document.getElementById('fact-text');
    
    const facts = [
        "Octopuses have three hearts!",
        "A group of flamingos is called a 'flamboyance'!",
        "The Hawaiian alphabet has only 13 letters!",
        "A day on Venus is longer than a year on Venus!",
        "The fingerprints of koalas are so similar to humans that they have on occasion been confused at crime scenes!",
        "Cows have best friends and get stressed when they're separated!",
        "The average person spends 6 months of their life waiting at red lights!",
        "A single strand of spaghetti is called a 'spaghetto'!",
        "Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat!",
        "A crocodile cannot stick its tongue out!",
        "Bananas are berries, but strawberries aren't!",
        "An ostrich's eye is bigger than its brain!",
        "Cats can make over 100 vocal sounds, while dogs can only make about 10!",
        "A jiffy is an actual unit of time: 1/100th of a second!",
        "The Netherlands is so flat that there's a hill with a height of just 40 meters called 'Mountain of the Netherlands'!"
    ];

    getFactBtn.addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factText.textContent = randomFact;
        factText.classList.add('spin');
        setTimeout(() => factText.classList.remove('spin'), 500);
    });

    // ===== COLOR GAME =====
    const changeColorBtn = document.getElementById('change-color');
    const colorDisplay = document.getElementById('color-display');
    
    // Generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Create a gradient with random colors
    function setRandomGradient() {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const color3 = getRandomColor();
        const angle = Math.floor(Math.random() * 360);
        
        colorDisplay.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
        
        // Add a fun animation
        colorDisplay.classList.add('pulse');
        setTimeout(() => colorDisplay.classList.remove('pulse'), 500);
    }

    // Initial color setting
    setRandomGradient();
    
    // Change color when button is clicked
    changeColorBtn.addEventListener('click', setRandomGradient);

    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        .shake {
            animation: shake 0.5s;
        }
        
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
        
        .pop {
            animation: pop 0.3s;
        }
        
        @keyframes pop {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .spin {
            animation: spin 0.5s;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .pulse {
            animation: pulse 0.5s;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Easter egg: Konami code
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
            
            @keyframes spin-element {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Make elements spin
        const sections = document.querySelectorAll('.fun-section');
        sections.forEach(section => {
            section.style.animation = 'spin-element 1s infinite';
        });
        
        // Return to normal after 3 seconds
        setTimeout(() => {
            document.body.style.animation = '';
            sections.forEach(section => {
                section.style.animation = '';
            });
        }, 3000);
          // Show a message
        alert('You found the secret Konami code! How cool are you?!');
    }
    
    // ===== ANNOYING BUTTON =====
    const runAwayButton = document.getElementById('run-away-button');
    const annoyingMessage = document.getElementById('annoying-message');
    
    runAwayButton.addEventListener('mouseover', () => {
        // Calculate new position
        const maxX = window.innerWidth - runAwayButton.clientWidth;
        const maxY = window.innerHeight - runAwayButton.clientHeight;
        
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        
        // Set new position
        runAwayButton.style.left = newX + 'px';
        runAwayButton.style.top = newY + 'px';
        
        // Show the message
        annoyingMessage.classList.remove('hidden');
        setTimeout(() => annoyingMessage.classList.add('hidden'), 1500);
    });
    
    runAwayButton.addEventListener('click', () => {
        alert("Wow! You actually caught me! You're either very lucky or very good!");
    });
    
    // ===== ROAST GENERATOR =====
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
        roastText.classList.add('pop');
        setTimeout(() => roastText.classList.remove('pop'), 300);
    });
    
    // ===== FAKE VIRUS ALERT =====
    const showVirusBtn = document.getElementById('show-virus');
    const virusAlert = document.getElementById('virus-alert');
    const closeVirusBtn = document.getElementById('close-virus');
    const payButton = document.getElementById('pay-button');
    
    showVirusBtn.addEventListener('click', () => {
        virusAlert.classList.remove('hidden');
    });
    
    closeVirusBtn.addEventListener('click', () => {
        virusAlert.classList.add('hidden');
    });
    
    payButton.addEventListener('click', () => {
        alert("Transaction successful! Just kidding, this is just a prank website. No actual virus here!");
        virusAlert.classList.add('hidden');
    });
    
    // ===== GHOST CURSOR =====
    const toggleCursorBtn = document.getElementById('toggle-cursor');
    const cursorFollower = document.getElementById('cursor-follower');
    let ghostCursorActive = false;
    
    toggleCursorBtn.addEventListener('click', () => {
        ghostCursorActive = !ghostCursorActive;
        
        if (ghostCursorActive) {
            document.body.style.cursor = 'none';
            cursorFollower.style.display = 'block';
            cursorFollower.innerHTML = randomEmoji();
            toggleCursorBtn.textContent = "🚫 Normal Cursor";
        } else {
            document.body.style.cursor = 'default';
            cursorFollower.style.display = 'none';
            toggleCursorBtn.textContent = "👻 Ghost Cursor";
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (ghostCursorActive) {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }
    });
    
    function randomEmoji() {
        const emojis = ['😂', '🤣', '💩', '👻', '👽', '🤡', '👹', '😱', '🙄', '🤪'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }
    
    // ===== SPIN MODE =====
    const toggleSpinBtn = document.getElementById('toggle-spin');
    let spinModeActive = false;
    
    toggleSpinBtn.addEventListener('click', () => {
        spinModeActive = !spinModeActive;
        
        if (spinModeActive) {
            document.body.classList.add('spin-mode');
            toggleSpinBtn.textContent = "🛑 Stop Spinning";
        } else {
            document.body.classList.remove('spin-mode');
            toggleSpinBtn.textContent = "🌀 Spin Mode";
        }
    });
    
    // Add an occasional random popup after 30-60 seconds of browsing
    setTimeout(() => {
        if (Math.random() > 0.5) { // 50% chance
            alert("CONGRATS! You're the 1,000,000th visitor! You've won... absolutely nothing! 🎉");
        }
    }, Math.random() * 30000 + 30000);
});
