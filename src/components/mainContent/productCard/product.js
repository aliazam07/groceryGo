// products.js
const products = [
  //Dry Fruits And Seeds
    {
      id: 1,
      cname: 'Dry_Fruits_And_Seeds',
      category: 'Dry Fruits And Seeds',
      productName: 'COLORBAR Sinful Matte Lipcolor, Dirty Date(Red, 3.5 g)',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Flipkart.com/fkitm27c8cc8decd79_1100x1100.jpeg', // Replace with actual image paths or URLs
      price: 891,
      discount: 26,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 500 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 520 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 480 },
        // Add more platforms and prices as needed
      ],
    },
    {
      id: 2,
      cname: 'Dry_Fruits_And_Seeds',
      category: 'Dry Fruits And Seeds',
      productName: 'COLORBAR Sinful Matte Lipcolor, Dirty Date(Red, 3.5 g)',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Amazon.in/amz41nP71ES37L_1100x1100.jpg',
      price: 199,
      discount: 12,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 500 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 520 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 480 },
        // Add more platforms and prices as needed
      ],
    },
    {
      id: 3,
      cname: 'Dry_Fruits_And_Seeds',
      category: 'Dry Fruits And Seeds',
      productName: 'YUVIKA Gond Chhuara - Gond Chuara - Dates Gum (50 Grams)',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Amazon.in/amz51QwNh-vBXL_1100x1100.jpg',
      price: 799,
      discount: 20,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 500 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 520 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 480 },
        // Add more platforms and prices as needed
      ],
    },
    {
      id: 4,
      cname: 'Dry_Fruits_And_Seeds',
      category: 'Dry Fruits And Seeds',
      productName: 'Bellanuts Long Raisins Attractive Beautiful Reusable Thal Gi...',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Amazon.in/amz51gBaVlELTL_1100x1100.jpg',
      price: 660,
      discount: 40,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 500 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 520 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 480 },
        // Add more platforms and prices as needed
      ],
    },
    {
      id: 5,
      cname: 'Dry_Fruits_And_Seeds',
      category: 'Dry Fruits And Seeds',
      productName: 'Bellanuts Long Raisins kishmish Indian 500g',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Amazon.in/amz51ODznc41gL_1100x1100.jpg',
      price: 400,
      discount: 20,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 380 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 390 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 385 },
        
      ],
    },

    {
      id: 6,
      cname: 'Dry_Fruits_And_Seeds',
      category: 'Dry Fruits And Seeds',
      productName: 'Bellanuts Kandhari Long Raisin 500gm(Kishmish)',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Amazon.in/amz51HFJd9hv1L_1100x1100.jpg',
      price: 800,
      discount: 11,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 750 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 700 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 720 },
        
      ],
    },

    // Snacks and Beverages
    {
      id: 10,
      cname: 'Snack_and_Beverages',
      category: 'Snack and Beverages',
      productName: 'DIZZLE Thanda Mitha Katka Mint Mouth Freshener(90 g)',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Flipkart.com/fkitmfbhezyraa9g9u_1100x1100.jpeg',
      price: 280,
      discount: 33,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 500 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 520 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 480 },
        // Add more platforms and prices as needed
      ],
    },
    {
      id: 11,
      cname: 'Snack_and_Beverages',
      category: 'Snack and Beverages',
      productName: 'DIZZLE Rajsi Khus(100g), Ilaichi Kesar Supari(100g), Rajsi Gulab(100g) Khus, ilaichi,Gulab Mouth Freshener(3 x 100 g)',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Flipkart.com/fkitmf5xuwydy79p69_1100x1100.jpeg',
      price: 1088,
      discount: 31,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 500 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 520 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 480 },
        
      ],
    },
    {
      id: 12,
      cname: 'Snack_and_Beverages',
      category: 'Snack and Beverages',
      productName: 'Khadi Herbal Greentea and Aloevera Hair Conditioner, 210ml (Pack of 2)',
      productImage: 'https://d1xbedroeo1z0l.cloudfront.net/fit-in/300x300/Amazon.in/amz41Z3BHqZ9iL_1100x1100.jpg',
      price: 297,
      discount: 29,
      prices: [
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Flipkart.com/Seller-Logo.png', platform: 'Flipkart', price: 500 },
        { logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Amazon.in/Seller-Logo.png', platform: 'Amazon', price: 520 },
        {logo:'https://d372i0x0rvq68a.cloudfront.net/seller_logos/Blinkit.com/Seller-Logo.png', platform: 'Blinkit', price: 480 },
        // Add more platforms and prices as needed
      ],
    },
    // Add more products as needed
  ];
  
  export default products;
  