// Truncate contract address
function truncateAddress(address) {
  if (!address) return '';
  return `${address.slice(0, 5)}...${address.slice(-5)}`;
}

// Full contract address (for copying)
const FULL_CONTRACT_ADDRESS = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// Contract address copy functionality
document.addEventListener('DOMContentLoaded', function() {
  const copyBtn = document.getElementById('copy-btn');
  const contractAddress = document.getElementById('contract-address');
  
  // Set truncated address on load
  if (contractAddress) {
    contractAddress.textContent = truncateAddress(FULL_CONTRACT_ADDRESS);
  }
  
  if (copyBtn && contractAddress) {
    copyBtn.addEventListener('click', async function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Copy the full address, not the truncated one
      const text = FULL_CONTRACT_ADDRESS;
      
      const copyIcon = document.getElementById('copy-icon');
      const checkIcon = document.getElementById('check-icon');
      
      try {
        await navigator.clipboard.writeText(text);
        
        // Show check icon, hide copy icon
        if (copyIcon) copyIcon.style.display = 'none';
        if (checkIcon) checkIcon.style.display = 'block';
        
        setTimeout(() => {
          // Show copy icon again, hide check icon
          if (copyIcon) copyIcon.style.display = 'block';
          if (checkIcon) checkIcon.style.display = 'none';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show check icon, hide copy icon
        if (copyIcon) copyIcon.style.display = 'none';
        if (checkIcon) checkIcon.style.display = 'block';
        
        setTimeout(() => {
          // Show copy icon again, hide check icon
          if (copyIcon) copyIcon.style.display = 'block';
          if (checkIcon) checkIcon.style.display = 'none';
        }, 2000);
      }
    });
    
    // Prevent container from enlarging on click
    const contractContainer = document.querySelector('.contract-container');
    if (contractContainer) {
      contractContainer.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Print button with emoji rain effect
  const printButton = document.getElementById('printButton');
  if (printButton) {
    printButton.addEventListener('click', function() {
      // Add click feedback only
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
      
      // Start emoji rain (no button text change)
      startEmojiRain();
    });
  }
});

// Function to create raining emoji effect with EXAGGERATED GRAVITY
function startEmojiRain() {
  const emojiImages = [
    'assets/mog-bags-252126f5.png',      // money bag cat
    'assets/mog-lockedin-048d658b.png',  // lock cat
    'assets/mog-printer-1-04275e91.png' // printer cat
  ];
  
  // Create 50 falling emojis
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createPhysicsEmoji(emojiImages);
    }, i * 100);
  }
}

function createPhysicsEmoji(emojiImages) {
  const emoji = document.createElement('img');
  const randomImg = emojiImages[Math.floor(Math.random() * emojiImages.length)];
  
  emoji.src = randomImg;
  emoji.style.position = 'fixed';
  emoji.style.width = (40 + Math.random() * 30) + 'px';
  emoji.style.height = 'auto';
  emoji.style.pointerEvents = 'none';
  emoji.style.zIndex = '9999';
  emoji.style.opacity = '0.9';
  
  // Starting position
  const startX = Math.random() * window.innerWidth;
  emoji.style.left = startX + 'px';
  emoji.style.top = '-100px';
  
  document.body.appendChild(emoji);
  
  // BALANCED PHYSICS - Natural, satisfying fall
  let posY = -100;
  let posX = startX;
  let velocityY = 2 + Math.random() * 2; // Moderate start speed: 2-4 px/frame
  let velocityX = (Math.random() - 0.5) * 2.5; // Gentle horizontal drift
  let rotation = Math.random() * 360;
  let rotationSpeed = (Math.random() - 0.5) * 6; // Moderate rotation speed
  
  // Animation loop
  const animate = () => {
    // REDUCED GRAVITY: 0.1 acceleration per frame (light, floaty fall)
    velocityY += 0.1;
    
    // Update positions
    posY += velocityY;
    posX += velocityX;
    rotation += rotationSpeed;
    
    // Apply position
    emoji.style.top = posY + 'px';
    emoji.style.left = posX + 'px';
    emoji.style.transform = `rotate(${rotation}deg)`;
    
    // Continue animation if still on screen
    if (posY < window.innerHeight + 100) {
      requestAnimationFrame(animate);
    } else {
      emoji.remove();
    }
  };
  
  animate();
}
