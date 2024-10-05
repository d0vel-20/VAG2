
const flashSaleEndTime = new Date("2024-10-05T00:00:00").getTime();

// Countdown Timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = flashSaleEndTime - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Flash Sale Ended";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);



// =============================================FAQ
    // FAQ Data
    const faqs = [
        {
          question: "What is the return policy?",
          answer:
            "You can return any product within 30 days of receiving it. The product must be in its original packaging, unused, and in the same condition as when you received it. Please contact our support team for further instructions.",
        },
        {
          question: "How long does shipping take?",
          answer:
            "Shipping typically takes 3-7 business days for domestic orders. International orders may take longer depending on the destination. Once your order is shipped, we will send you a tracking number for your reference.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary based on your location. Please check the shipping details at checkout for more information.",
        },
        {
          question: "How do I track my order?",
          answer:
            "Once your order is shipped, you will receive an email with the tracking number and a link to track your shipment. You can also track your order directly from your account dashboard on our website.",
        },
        {
          question: "Can I cancel or change my order?",
          answer:
            "Yes, you can cancel or modify your order within 24 hours of placing it. After this period, the order may already be processed and shipped. Contact our customer support team for assistance with cancellations or changes.",
        },
      ];
  
      // Generate FAQ HTML
      const faqContainer = document.getElementById("faq-container");
      let activeIndex = null;
  
      const toggleFAQ = (index) => {
        activeIndex = activeIndex === index ? null : index;
        renderFAQs();
      };
  
      const renderFAQs = () => {
        faqContainer.innerHTML = faqs.map((faq, index) => `
          <div class="border-b border-gray-300 pb-4">
            <div class="flex justify-between items-center cursor-pointer" onclick="toggleFAQ(${index})">
              <h3 class="text-xl font-semibold">${faq.question}</h3>
              <span>${activeIndex === index ? '-' : '+'}</span>
            </div>
            ${activeIndex === index ? `<p class="mt-4 text-gray-600">${faq.answer}</p>` : ''}
          </div>
        `).join('');
      };
  
      // Initial Render
      renderFAQs();


  

  // ======================================================
  const features = [
    {
      title: 'Global Connections',
      description: 'We partner with reputable manufacturers from around the world, ensuring that our clients receive only the best products.',
      icon: '🌍' // Replace with actual image/icon if needed
    },
    {
      title: 'Local Expertise',
      description: 'Our deep understanding of the African market allows us to provide tailored solutions that meet the unique needs of retailers and distributors.',
      icon: '🏠' // Replace with actual image/icon if needed
    },
    {
      title: 'Streamlined Logistics',
      description: 'We handle all aspects of the supply chain, from sourcing to delivery, making it easier for you to focus on growing your business.',
      icon: '🚚' // Replace with actual image/icon if needed
    }
  ];
  
  function renderFeatures() {
    const featuresContainer = document.getElementById('features-container');
  
    features.forEach((feature) => {
      const featureCard = `
        <div class="bg-primaryGold p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <!-- Icon -->
          <div class="text-5xl text-blue-600 mb-4 text-center">
            ${feature.icon}
          </div>
  
          <!-- Feature Title -->
          <h3 class="text-xl font-semibold text-textColor mb-2 text-center">
            ${feature.title}
          </h3>
  
          <!-- Feature Description -->
          <p class="text-gray-600 text-center">
            ${feature.description}
          </p>
        </div>
      `;
  
      featuresContainer.innerHTML += featureCard;
    });
  }
  
  window.onload = renderFeatures;
  




  // ==--------------------------------=-===============CAROUSEL FUNCTION


  const container = document.getElementById('flashSaleContainer');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let scrollAmount = 0;

  // Function to get the number of visible cards based on the screen size
  const getVisibleCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      return 1; // 1 card on extra small screens
    } else if (screenWidth <= 640) {
      return 2; // 2 cards on very small screens
    } else if (screenWidth <= 768) {
      return 3; // 3 cards on small screens
    } else if (screenWidth <= 1024) {
      return 4; // 4 cards on medium screens
    } else {
      return 5; // 5 cards on large screens
    }
  };

  // Adjust the visible number of cards on load and resize
  let visibleCards = getVisibleCards();
  let cardWidth = container.children[0].offsetWidth + 24; // Width of a card plus gap (24px)

  window.addEventListener('resize', () => {
    visibleCards = getVisibleCards();
    cardWidth = container.children[0].offsetWidth + 24;
  });

  // Function to scroll left
  prevButton.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - cardWidth * visibleCards, 0);
    container.style.transform = `translateX(-${scrollAmount}px)`;
  });

  // Function to scroll right
  nextButton.addEventListener('click', () => {
    const maxScroll = cardWidth * (container.children.length - visibleCards);
    scrollAmount = Math.min(scrollAmount + cardWidth * visibleCards, maxScroll);
    container.style.transform = `translateX(-${scrollAmount}px)`;
  });



  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
      delay: 5000,
    },
    speed:1500,
    effect:'slide',
  });
  
      