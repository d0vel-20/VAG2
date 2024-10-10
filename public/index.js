




// =============================================FAQ
    // FAQ Data
    const faqs = [
        {
          question: "What is Vision Africa Group?",
          answer:
            "At Vision Africa, we specialize in connecting foreign manufacturers with local African retailers, partners, and distributors of cutting-edge electronics. Our mission is to empower local businesses by providing access to a diverse range of high-quality products that enhance everyday life and drive economic growth.",
        },
        {
          question: "Does VA sell products",
          answer:
            "VA does not sell products directly. Instead, we provide an exclusive platform where you showcase your products to distributors and retail buyers and initiate conversations directly.",
        },
        {
          question: "Discount on Advertising?",
          answer:
            "VA offers a cost-effective solution for connecting with quality distributors. Unlike trade shows or agencies that are time-consuming and expensive, VA connects you with vetted distributors at a fraction of the cost.",
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






  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay:{
    //   delay: 5000,
    // },
    speed:1500,
    effect:'slide',
  });
  
      